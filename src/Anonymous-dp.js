document.addEventListener("DOMContentLoaded", function () {
  // get Elements from DOM
  const textToChange = document.getElementById("profile-name");
  const colorPicker = document.getElementById("profile-color-picker");
  const generate_DP = document.getElementById("profile-generate-dp");
  const save_DP = document.getElementById("profile-save-dp");
  const firstNameInput = document.querySelector(".profile-fname-input");
  const lastNameInput = document.querySelector(".profile-lname-input");
  const profile_change_name = document.getElementById("profile-cname-btn");
  const submit_name_change = document.getElementById("profile-name-submit");
  const colorPickerBtn = document.getElementById("profile-colorPickerBtn");

  // Canvas initialization
  const canvas = document.getElementById("profile-picture");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const width = canvas.width;
  const height = canvas.height;

  //mode-1 Function
  function mode1() {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    // Generate random colors
    const colors = [
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
    ];

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
  }

  // mode-2 Function
  function mode2() {
    const firstName = document
      .querySelector(".profile-fname")
      .textContent.charAt(0);
    const lastName = document
      .querySelector(".profile-lname")
      .textContent.charAt(0);
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Generate random colors
    const colors = [
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
    ];

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

    // Extract the font size from the canvas class name
    const fontColorMatch = canvas.className.match(
      /profile-font-color-([a-zA-Z0-9]+)/
    );

    if (fontColorMatch) {
      ctx.fillStyle = "#" + fontColorMatch[1];
    } else if (
      canvas.classList.contains("mode-3") &&
      canvas.classList.contains("profile-font-complementary")
    ) {
      ctx.fillStyle = complementaryColor();
    } else if (
      canvas.classList.contains("mode-2") &&
      canvas.classList.contains("profile-random-font-color")
    ) {
      ctx.fillStyle = generateRandomColor();
    } else if (colorPicker) {
      ctx.fillStyle = colorPicker.value;
    } else {
      ctx.fillStyle = "#00000";
    }
    // Set font properties for initials
    let fontSize = 100;

    // Extract the font size from the canvas class name
    const fontSizeMatch = canvas.className.match(/profile-font-size-(\d+)/);
    if (fontSizeMatch) {
      fontSize = parseInt(fontSizeMatch[1]) * 10;
    }

    ctx.font = `${fontSize}px Arial`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    // Calculate the position of initials in the center of the canvas
    const initialsX = width / 2;
    const initialsY = height / 2;

    // Draw initials
    ctx.fillText(firstName + lastName, initialsX, initialsY);
  }

  // Mode-3 Function
  function mode3() {
    // Get initials
    const firstName = document
      .querySelector(".profile-fname")
      .textContent.charAt(0);
    const lastName = document
      .querySelector(".profile-lname")
      .textContent.charAt(0);

    ctx.clearRect(0, 0, width, height);

    // Extract the font size from the canvas class name
    const dpColorMatch = canvas.className.match(
      /profile-dp-color-([a-zA-Z0-9]+)/
    );

    if (dpColorMatch) {
      ctx.fillStyle = "#" + dpColorMatch[1];
    } else if (
      canvas.classList.contains("mode-3") &&
      canvas.classList.contains("profile-random-dp-color")
    ) {
      ctx.fillStyle = generateRandomColor();
    } else if (colorPicker) {
      //ctx.fillStyle = colorPicker.value;
      ctx.fillStyle = "#808080";
    } else {
      ctx.fillStyle = "#808080";
    }

    ctx.fillRect(0, 0, width, width);

    // Extract the font size from the canvas class name
    const fontColorMatch = canvas.className.match(
      /profile-font-color-([a-zA-Z0-9]+)/
    );

    if (fontColorMatch) {
      ctx.fillStyle = "#" + fontColorMatch[1];
    } else if (
      canvas.classList.contains("mode-3") &&
      canvas.classList.contains("profile-font-complementary")
    ) {
      ctx.fillStyle = complementaryColor();
    } else if (
      canvas.classList.contains("mode-3") &&
      canvas.classList.contains("profile-random-font-color")
    ) {
      ctx.fillStyle = generateRandomColor();
    } else if (colorPicker) {
      ctx.fillStyle = colorPicker.value;
    } else {
      ctx.fillStyle = "#ffffff";
    }

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

    // Draw initials
    ctx.fillText(firstName + lastName, initialsX, initialsY);
  }

  ///////////////// Random color ///////////////////////////
  // Function to generate a random color in hexadecimal format
  function generateRandomColor() {
    // Generate random values for red, green, and blue channels
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Convert the RGB values to hexadecimal format
    var hexR = r.toString(16).padStart(2, "0");
    var hexG = g.toString(16).padStart(2, "0");
    var hexB = b.toString(16).padStart(2, "0");
    // Return the hexadecimal color string
    return `#${hexR}${hexG}${hexB}`;
  }

  ///////////////////complementary color////////////////////

  // Function to calculate complementary color
  function complementaryColor() {
    // Get the pixel color at the top-left corner of the canvas
    var pixelData = ctx.getImageData(0, 0, 1, 1).data;
    var bgColor = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

    // Function to convert RGB color to hex color
    function rgbToHex(red, green, blue) {
      var hexRed = red.toString(16).padStart(2, "0");
      var hexGreen = green.toString(16).padStart(2, "0");
      var hexBlue = blue.toString(16).padStart(2, "0");

      return "#" + hexRed + hexGreen + hexBlue;
    }

    // Function to generate the complementary color
    function getComplementaryColor(color) {
      var red = parseInt(color.substring(1, 3), 16);
      var green = parseInt(color.substring(3, 5), 16);
      var blue = parseInt(color.substring(5, 7), 16);

      var complementaryRed = 255 - red;
      var complementaryGreen = 255 - green;
      var complementaryBlue = 255 - blue;

      var complementaryColor =
        "rgb(" +
        complementaryRed +
        ", " +
        complementaryGreen +
        ", " +
        complementaryBlue +
        ")";
      return rgbToHex(complementaryRed, complementaryGreen, complementaryBlue);
    }

    // Set the font color to the complementary color
    return getComplementaryColor(bgColor);
  }
  ///////////////////// Events ////////////////////////

  function checkMode() {
    if (canvas.classList.contains("mode-1")) {
      mode1();
    } else if (canvas.classList.contains("mode-2")) {
      mode2();
    } else if (canvas.classList.contains("mode-3")) {
      mode3();
    } else {
      throw new Error("Invalid canvas mode or no canvas mode class found");
    }
  }

  // Save button click event
  // Generate
  if (generate_DP) {
    generate_DP.addEventListener("click", () => {
      checkMode();
    });
  }

  // Save button click event
  if (save_DP) {
    save_DP.addEventListener("click", function () {
      // Convert canvas image to data URL
      const dataURL = canvas.toDataURL("image/png");

      // Create an anchor element
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "User-DP.png";

      // Simulate click on the anchor element
      link.click();
    });
  }

  // Color picker

  if (colorPicker && !colorPickerBtn) {
    colorPicker.addEventListener("input", function () {
      const color = colorPicker.value;
      textToChange.style.color = color;
    });
  }
  if (colorPickerBtn) {
    // colorPicker.addEventListener("input", function () {
    //   const color = colorPicker.value;
    //   textToChange.style.color = color;
    // });

    // Flag to track if color picker is open
    var isColorPickerOpen = false;

    // Add click event listener to the color picker button
    colorPickerBtn.addEventListener("click", function () {
      colorPicker.click();
      isColorPickerOpen = true;
    });

    colorPicker.addEventListener("focus", function () {
      isColorPickerOpen = true;
      console.log(isColorPickerOpen);
    });

    // Handle color change event
    colorPicker.addEventListener("change", function () {
      // Get the selected color
      const selectedColor = colorPicker.value;
      textToChange.style.color = selectedColor;
    });

    colorPicker.addEventListener("blur", function () {
      // Delay the execution to allow time for the click event to trigger on colorPickerBtn
      isColorPickerOpen = false;

      // if (!isColorPickerOpen) {
      //   // Color picker has been dismissed or closed
      //   console.log("Color picker dismissed");
      //   checkMode();
      // }

      setTimeout(function () {
        // Check if the color picker is still closed after the timeout
        if (!isColorPickerOpen) {
          // Color picker has been dismissed or closed
          checkMode();
        }
      }, 100);
    });

    // Set the flag to false when the color picker is clicked again
    colorPicker.addEventListener("click", function () {
      isColorPickerOpen = false;
    });
  }

  // Update name
  function updateName() {
    document.querySelector(".profile-fname").textContent = firstNameInput.value;
    document.querySelector(".profile-lname").textContent = lastNameInput.value;
  }
  if (submit_name_change) {
    submit_name_change.addEventListener("click", () => {
      const p_name_control = document.getElementById("profile-name-change");
      const p_name = document.getElementById("profile-name");
      checkMode();
      p_name_control.style.display = "none";
      p_name.style.display = "block";
    });
  }

  if (profile_change_name) {
    profile_change_name.addEventListener("click", () => {
      const p_name_control = document.getElementById("profile-name-change");
      const p_name = document.getElementById("profile-name");

      p_name_control.style.display = "block";
      p_name.style.display = "none";
    });
  }

  if (firstNameInput) {
    firstNameInput.addEventListener("input", updateName);
  }
  if (lastNameInput) {
    lastNameInput.addEventListener("input", updateName);
  }
  // Canvas mode Selection
  checkMode();
});
