(function() {
    'use strict';
    const user = document.getElementById("username");
    const login = document.getElementsByName("_eventId_proceed")[0];
    const pwd = document.getElementById("password");

    function userFilled() {
        if (user.value.length == 0 || pwd.value.length == 0) {
            return;
        }

        clearInterval(checkFilled);
        login.click();
    }

    const checkFilled = setInterval(userFilled, 100);
})();
