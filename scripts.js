"use strict";

const buttonTrigger = document.getElementById("generatePassword");

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  let alphaLength = alpha.length;
  let newPassword = "";

  for (let i = 0; i < 8; i++) {
    newPassword += alpha.charAt(Math.floor(Math.random() * alphaLength));

    document.getElementById("passwordDisplay").innerHTML = newPassword;
  }
}
