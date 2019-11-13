import { getAudioFeatures } from '../api'
import { defaultErrorText } from '../App'

/**
Loads either an audio file or URL and plays an animation of colored bars in sync
with the music.
Based on Gina Lee's music visualizer:
https://github.com/gg-1414/music-visualizer
*/
export const loadMusic = ({
  audioRef,
  canvasRef,
  fileRef,
  srcUrl,
  existingContext,
  setContext,
  existingAudioNode,
  setAudioNode,
  existingAnalyser,
  setAnalyser,
  setError,
  audioFeatures
}) => {

  const audio = audioRef.current
  if (!audio) {
    return
  }

  if (fileRef) {
    try {
      const file = fileRef.current
      if (file && file.files.length > 0) {
        audio.src = URL.createObjectURL(file.files[0])
      }
    } catch (error) {
      setError(defaultErrorText)
    }
  }
  else {
    audio.src = srcUrl
  }

  const canvas = canvasRef.current
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext("2d")

  const context = (existingContext) ? existingContext : new AudioContext()
  if (existingContext) {
    context.resume() // this one line fixed everything lol
  }
  const audioNode = (existingAudioNode) ? existingAudioNode : context.createMediaElementSource(audio)
  const analyser = (existingAnalyser) ? existingAnalyser : context.createAnalyser()

  audioNode.connect(analyser)

  analyser.connect(context.destination)
  analyser.fftSize = 16384

  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  const colors = [
    [179, 0, 54], // red
    [255, 60, 0], // red-orange
    [255, 123, 0], // orange
    [255, 178, 0], // honey yellow
    [255, 243, 163], // light yellow
    [203, 247, 57], // yellow-green
    [25, 191, 0], // green
    [0, 161, 155], // blue-green
    [0, 181, 169], // green-blue
    [0, 113, 212], // blue
    [39, 16, 173], // indigo
    [75, 0, 145], // dark purple
    [145, 10, 145], // magenta
  ]

  function getColorOfSoundBars(keyIndex, offset) {
    let newIndex = keyIndex + offset
    if (newIndex >= colors.length) {
      newIndex -= colors.length
    }
    if (newIndex < 0) {
      newIndex += colors.length
    }
    return colors[newIndex]
  }

  const canvasWidth = canvas.width
  const canvasHeight = canvas.height
  const barWidth = (canvasWidth / bufferLength) * 40
  const barHeightMax = 500
  const barsPerColorSection = 6
  const totalNumberOfBars = barsPerColorSection * colors.length
  const barSpacing = (canvasWidth - (totalNumberOfBars-1) * barWidth) / totalNumberOfBars
  const offset = (audioFeatures && audioFeatures.key) ? audioFeatures.key : 0

  let barHeight
  let x = 0

  function renderFrame() {
    requestAnimationFrame(renderFrame)

    x = 0

    analyser.getByteFrequencyData(dataArray)

    // Clears canvas with black and use opacity 0.1 to create fade effect
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    for (let barIndex = 0; barIndex < totalNumberOfBars; barIndex++) {
      barHeight = (dataArray[barIndex] * 2)

      let [r, g, b] = getColorOfSoundBars(Math.floor(barIndex/barsPerColorSection), offset)
      let a = (barHeight / barHeightMax) ** 3.5

      ctx.fillStyle = `rgba(${r},${g},${b},${a})`
      ctx.fillRect(x, (canvasHeight - barHeight), barWidth, barHeight)

      x += barWidth + barSpacing
    }
  }

  try {
    const audioPlay = audio.play().catch(() => {
      setError(defaultErrorText)
    })
  } catch (error) {
    setError(defaultErrorText)
  }
  renderFrame()

  if (!existingAudioNode) {
    setAudioNode(audioNode)
  }
  if (!existingAnalyser) {
    setAnalyser(analyser)
  }
  if (!existingContext) {
    setContext(context)
  }
}

export const performAudioFeaturesQuery = async ({
  setError,
  songID,
  setAudioFeatures,
  defaultErrorText
}) => {

  setError(null)

  try {
    const result = await getAudioFeatures(songID)

    setAudioFeatures(result)

  } catch (error) {
    setError(defaultErrorText)
  }
}
