(function() {
    'use strict';
    const user = document.getElementById("frmLogin_UserName");
    const login = document.getElementById("btnLogin");
    const pwd = document.getElementById("frmLogin_Password");

    function userFilled() {
        if (user.value.length == 0 || pwd.value.length == 0) {
            return;
        }

        clearInterval(checkFilled);
        login.click();
    }

    const checkFilled = setInterval(userFilled, 100);
})();
