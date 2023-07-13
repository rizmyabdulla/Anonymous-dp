const canvas = document.getElementById("profile-picture");
const save_DP = document.getElementById("download-dp");
const generate_DP = document.getElementById("generate-dp");
const submit_DP = document.getElementsByClassName("submit-dp");
const generate_DP_with_initials = document.getElementById(
  "generate-dp-with-initials"
);
const profile_change_name = document.getElementById("profile-cname");
const submit_name_change = document.getElementById("submit");

window.onload = canvas.classList.add("mode-1");

function updateInitials() {
  const firstName = document.querySelector(".profile-fname-input").value;
  const lastName = document.querySelector(".profile-lname-input").value;

  document.querySelector(".profile-fname").textContent = firstName;
  document.querySelector(".profile-lname").textContent = lastName;
}
if (submit_name_change) {
  submit_name_change.addEventListener("click", () => {
    const p_name_control = document.getElementById("profile-name-control");
    const p_name = document.getElementById("profile-name");

    p_name_control.style.display = "none";
    p_name.style.display = "block";
  });
}
if (generate_DP_with_initials) {
  generate_DP_with_initials.addEventListener("change", () => {
    if (generate_DP_with_initials.checked) {
      document.getElementById("color-picker-container").style.display = "flex";
    } else {
      document.getElementById("color-picker-container").style.display = "none";
    }
  });
}

// Generate initial pattern
if (generate_DP) {
  generate_DP.addEventListener("click", () => {
    if (generate_DP_with_initials.checked) {
      generatePattern();
    } else {
      generatePatternWithInitials();
    }
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

for (var i = 0; i < submit_DP.length; i++) {
  submit_DP[i].addEventListener("click", async function () {
    let imageBlob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png")
    );
    let formData = new FormData();
    formData.append("image", imageBlob, "dp.png");
    console.log(formData.get("image"));
  });
}

if (profile_change_name) {
  profile_change_name.addEventListener("click", () => {
    const p_name_control = document.getElementById("profile-name-control");
    const p_name = document.getElementById("profile-name");

    p_name_control.style.display = "block";
    p_name.style.display = "none";
  });
}

const p_F_Input = document.querySelector(".profile-fname-input");
const p_L_Input = document.querySelector(".profile-lname-input");
if (p_F_Input) {
  p_F_Input.addEventListener("input", updateInitials);
}
if (p_L_Input) {
  p_L_Input.addEventListener("input", updateInitials);
}
