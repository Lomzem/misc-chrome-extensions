// ==UserScript==
// @name         Canvas Autologin
// @version      2025-10-20
// @description  Automatically login to Canvas
// @author       Lomzem
// @match        https://shibboleth.csuchico.edu/*
// ==/UserScript==

(function () {
  "use strict";

  /** @type {HTMLInputElement | null} */
  const username = document.querySelector("input#username");

  /**@type {HTMLInputElement | null} */
  const password = document.querySelector("input#password");

  /** @type {HTMLInputElement | null} */
  const loginBtn = document.querySelector('input[type="submit"]');

  const submitIfFilled = () => {
    if (username.value.length > 0 && password.value.length > 0) {
      loginBtn.click();
    }
  };

  username.addEventListener("change", submitIfFilled);
  password.addEventListener("change", submitIfFilled);
})();
