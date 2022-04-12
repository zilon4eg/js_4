function getPasswordChecker(password) {
    let truePass = password;
    return function passwordChecker(checkPass) {
            if (checkPass === truePass) {
                console.log(true);
                return true
            }
            else {
                console.log(false);
                return false
            }
    }
}


const check = getPasswordChecker('Qwe123');
check('MyPass');
check('Qwe123');


