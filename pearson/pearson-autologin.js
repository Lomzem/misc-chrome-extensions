(function() {
    'use strict';
    const user = document.getElementById("username");
    const pwd = document.getElementById("password");
    const login = document.getElementById("mainButton");

    function userFilled() {
        if (user.value.length == 0 || pwd.value.length == 0) {
            return;
        }

        clearInterval(checkFilled);
        login.click();
    }

    const checkFilled = setInterval(userFilled, 100);
})();
