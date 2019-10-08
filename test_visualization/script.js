window.onload = function() {

  const file = document.getElementById("file-input")
  const canvas = document.getElementById("canvas")
  const h3 = document.getElementById("name")
  const audio = document.getElementById("audio")

  file.onchange = function() {

    const files = this.files
    console.log("files[0]: " , files[0])
    audio.src = URL.createObjectURL(files[0])

    const name = files[0].name
    h3.innerText = `${name}`

    ///////////////
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ///////////////////


    const context = new AudioContext(); // (Interface) Audio-processing graph
    let src = context.createMediaElementSource(audio); // Give the audio context an audio source,
    // to which can then be played and manipulated
    const analyser = context.createAnalyser(); // Create an analyser for the audio context

    src.connect(analyser); // Connects the audio context source to the analyser
    analyser.connect(context.destination); // End destination of an audio graph in a given context
    // Sends sound to the speakers or headphones


    /////////////// ANALYSER FFTSIZE ////////////////////////
    // analyser.fftSize = 32;
    // analyser.fftSize = 64;
    // analyser.fftSize = 128;
    // analyser.fftSize = 256;
    // analyser.fftSize = 512;
    // analyser.fftSize = 1024;
    // analyser.fftSize = 2048;
    // analyser.fftSize = 4096;
    // analyser.fftSize = 8192;
    analyser.fftSize = 16384;
    // analyser.fftSize = 32768;

    // (FFT) is an algorithm that samples a signal over a period of time
    // and divides it into its frequency components (single sinusoidal oscillations).
    // It separates the mixed signals and shows what frequency is a violent vibration.

    // (FFTSize) represents the window size in samples that is used when performing a FFT

    // Lower the size, the less bars (but wider in size)
    ///////////////////////////////////////////////////////////


    const bufferLength = analyser.frequencyBinCount; // (read-only property)
    // Unsigned integer, half of fftSize (so in this case, bufferLength = 8192)
    // Equates to number of data values you have to play with for the visualization

    // The FFT size defines the number of bins used for dividing the window into equal strips, or bins.
    // Hence, a bin is a spectrum sample, and defines the frequency resolution of the window.

    const dataArray = new Uint8Array(bufferLength); // Converts to 8-bit unsigned integer array
    // At this point dataArray is an array with length of bufferLength but no values
    console.log('DATA-ARRAY: ', dataArray) // Check out this array of frequency values!

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    console.log('WIDTH: ', WIDTH, 'HEIGHT: ', HEIGHT)

    const barWidth = (WIDTH / bufferLength) * 40;
    console.log('BARWIDTH: ', barWidth)

    console.log('TOTAL WIDTH: ', (117*10)+(118*barWidth)) // (total space between bars)+(total width of all bars)

    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering

      x = 0;

      analyser.getByteFrequencyData(dataArray); // Copies the frequency data into dataArray
      // Results in a normalized array of values between 0 and 255
      // Before this step, dataArray's values are all zeros (but with length of 8192)

      ctx.fillStyle = "rgba(0,0,0,0.1)"; // Clears canvas before rendering bars (black with opacity 0.2)
      ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars

      let r, g, b, a;
      let bars = 120 // Set total number of bars you want per frame

      colors = [
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

      function getColor(index, offset) {
        newIndex = index + offset
        if (newIndex >= colors.length) {
          newIndex -= colors.length
        }
        if (newIndex < 0) {
          newIndex += colors.length
        }
        return colors[newIndex]
      }

      for (let i = 0; i < bars; i++) {

        barHeight = (dataArray[i] * 2.5);

        barHeightMax = 255 * 2.5;

        multiple = 6
        // offset = -10 // Lord Huron, the Night We Met (key: A major)
        offset = -7 // Kina Grannis, Iris (key: F# Major)

        if (i < 1 * multiple){ // red
          [r, g, b] = getColor(0, offset)
        } else if (i < 2 * multiple){ // red-orange
          [r, g, b] = getColor(1, offset)
        } else if (i < 3 * multiple){ // orange
          [r, g, b] = getColor(2, offset)
        } else if (i < 4 * multiple){ // yellow
          [r, g, b] = getColor(3, offset)
        } else if (i < 5 * multiple){ // light yellow
          [r, g, b] = getColor(4, offset)
        } else if (i < 6 * multiple){ // yellow-green
          [r, g, b] = getColor(5, offset)
        } else if (i < 7 * multiple){ // green
          [r, g, b] = getColor(6, offset)
        } else if (i < 8 * multiple){ // blue-green
          [r, g, b] = getColor(7, offset)
        } else if (i < 9 * multiple){ // green-blue
          [r, g, b] = getColor(8, offset)
        } else if (i < 10 * multiple){ // dark blue
          [r, g, b] = getColor(9, offset)
        } else if (i < 11 * multiple){ // indigo
          [r, g, b] = getColor(10, offset)
        } else if (i < 12 * multiple){ // dark purple
          [r, g, b] = getColor(11, offset)
        } else { // magenta
          [r, g, b] = getColor(12, offset)
        }

        a = (barHeight / barHeightMax) ** 3;

        // if (i === 0){
        //   console.log(dataArray[i])
        // }

        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);
        // (x, y, i, j)
        // (x, y) Represents start point
        // (i, j) Represents end point

        x += barWidth + 10 // Gives 10px space between each bar
      }
    }

    audio.play();
    renderFrame();
  };
}
