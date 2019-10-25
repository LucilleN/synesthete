function renderFrame({x, width, height, analyser, dataArray, ctx, }) {
  requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering

  x = 0;

  analyser.getByteFrequencyData(dataArray);

  ctx.fillStyle = "rgba(0,0,0,0.1)"; // Clears canvas before rendering bars (black with opacity 0.2)
  ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars

  let r, g, b, a;
  let bars = 120 // Set total number of bars you want per frame

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

  function getColor(index, offset) {
    let newIndex = index + offset
    if (newIndex >= colors.length) {
      newIndex -= colors.length
    }
    if (newIndex < 0) {
      newIndex += colors.length
    }
    return colors[newIndex]
  }

  for (let i = 0; i < bars; i++) {
    barHeight = (dataArray[i] * 2);
    const barHeightMax = 255 * 2;
    const multiple = 6
    // offset = -10 // Lord Huron, the Night We Met (key: A major)
    let offset = -7 // Kina Grannis, Iris (key: F# Major)

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

    ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
    ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

    x += barWidth + 10 // Gives 10px space between each bar
  }
}
