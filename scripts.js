"use strict";

const buttonTrigger = document.getElementById("generatePassword");

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

let chars = alpha;

function generatePassword() {
  let length = document.getElementById("length").value;

  if (document.getElementById("hasChars").checked) {
    chars += symbols;
  }

  if (document.getElementById("hasNumbers").checked) {
    chars += numbers;
  }

  let newPassword = "";

  for (let i = 0; i < length; i++) {
    newPassword += chars.charAt(Math.floor(Math.random() * chars.length));

    document.getElementById("passwordDisplay").innerHTML = newPassword;
  }
}

function copyToClipboard() {
  let password = document.getElementById("passwordDisplay").innerHTML;
  try {
    navigator.clipboard.writeText(password);
    console.log("Copied");
  } catch (error) {
    console.error("Copy failed: ", error);
  }
}
