var allCheckbox = document.getElementById("form-checkbox");
var checkbox = document.getElementById("checkbox");
var identity = /** @class */ (function () {
    function identity(name, score, email) {
        this.name = name;
        this.score = score;
        this.email = email;
    }
    ;
    identity.prototype.getName = function () {
        return this.name;
    };
    identity.prototype.getEmail = function () {
        return this.email;
    };
    identity.prototype.getScore = function () {
        return this.score;
    };
    identity.prototype.setName = function (name) {
        this.name = name;
    };
    identity.prototype.setEmail = function (email) {
        this.email = email;
    };
    identity.prototype.setScore = function (score) {
        this.score = score;
    };
    return identity;
}());
function checkboxChecking() {
    if (allCheckbox) {
        checkbox.checked;
    }
}
