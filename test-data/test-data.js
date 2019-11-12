const VALID_LOGIN = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
}
const INVALID_USERNAME_LOGIN = {
    username: '',
    password: 'SuperSecretPassword!'
}
const INVALID_PASSWORD_LOGIN = {
    username: 'tomsmith',
    password: ''
}

exports.VALID_LOGIN_DATA =  VALID_LOGIN
exports.INVALID_USERNAME_DATA =  INVALID_USERNAME_LOGIN
exports.INVALID_PASSWORD_DATA =  INVALID_PASSWORD_LOGIN