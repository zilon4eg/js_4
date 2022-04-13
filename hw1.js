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


const checkPassword = getPasswordChecker('Qwe123');
checkPassword('MyPass');
checkPassword('Qwe123');


