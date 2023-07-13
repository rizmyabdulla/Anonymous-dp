// Get canvas and context
const canvas = document.getElementById("test-profile-picture");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

// Clear canvas
ctx.clearRect(0, 0, width, height);

// Generate random colors
const colors = [getRandomColor(), getRandomColor(), getRandomColor()];

// Draw pattern
for (let x = 0; x < width; x += 10) {
  for (let y = 0; y < height; y += 10) {
    // Get random color from colors array
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Set fill color
    ctx.fillStyle = color;

    // Draw rectangle
    ctx.fillRect(x, y, 10, 10);
  }
}

// Get initials
const firstName = document
  .querySelector(".profile-fname")
  .textContent.charAt(0);
const lastName = document.querySelector(".profile-lname").textContent.charAt(0);

ctx.fillStyle = "#000000";

// Set font properties for initials
let fontSize = 100;
const canvasClass = canvas.className;

// Extract the font size from the canvas class name
const fontSizeMatch = canvasClass.match(/profile-font-size-(\d+)/);
if (fontSizeMatch) {
  fontSize = parseInt(fontSizeMatch[1]) * 10;
}

ctx.font = `${fontSize}px Arial`;
ctx.textBaseline = "middle";
ctx.textAlign = "center";

// Calculate the position of initials in the center of the canvas
const initialsX = width / 2;
const initialsY = height / 2;

// Draw initials with default color
ctx.fillText(firstName + lastName, initialsX, initialsY);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
// Function to calculate complementary color
function getComplementaryColor(color) {
  // Convert color to HSL
  const hsl = rgbToHsl(color);

  // Calculate complementary hue
  const complementaryHue = (hsl[0] + 0.5) % 1;

  // Convert complementary HSL to RGB
  const complementaryRgb = hslToRgb(complementaryHue, hsl[1], hsl[2]);

  return complementaryRgb;
}

// Function to convert RGB to HSL
function rgbToHsl(rgb) {
  var r = parseInt(rgb.substring(4, rgb.indexOf(",")), 10) / 255;
  var g =
    parseInt(rgb.substring(rgb.indexOf(",") + 2, rgb.lastIndexOf(",")), 10) /
    255;
  var b =
    parseInt(rgb.substring(rgb.lastIndexOf(",") + 2, rgb.length - 1), 10) / 255;

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

// Function to convert HSL to RGB
function hslToRgb(h, s, l) {
  var r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return (
    "rgb(" +
    Math.round(r * 255) +
    "," +
    Math.round(g * 255) +
    "," +
    Math.round(b * 255) +
    ")"
  );
}

// Get background color of the canvas
const imageData = ctx.getImageData(0, 0, width, height);
const data = imageData.data;
const bgColor = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;

// Function to calculate and set complementary color for initials
function setComplementaryColor() {
  // Calculate complementary color
  const complementaryColor = getComplementaryColor(bgColor);

  // Set complementary color for initials
  ctx.fillStyle = complementaryColor;
  ctx.fillText(firstName + lastName, initialsX, initialsY);
}

if (canvas.classList.contains("profile-font-Complementary")) {
  setComplementaryColor();
}
