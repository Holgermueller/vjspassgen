"use strict";

const buttonTrigger = document.getElementById("generatePassword");

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

let chars = alpha;

function generatePassword() {
  let hasNum = document.getElementById("hasNumbers").value;
  let hasChars = document.getElementById("hasChars").value;
  let alphaLength = alpha.length;
  let newPassword = "";

  if (hasNum.checked) {
    console.log(true);
  }

  console.log(hasNum.checked, hasChars);

  for (let i = 0; i < 8; i++) {
    newPassword += chars.charAt(Math.floor(Math.random() * alphaLength));

    document.getElementById("passwordDisplay").innerHTML = newPassword;
  }
}
