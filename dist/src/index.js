"use strict";
var Main = (function () {
    function Main() {
        this.value = true;
    }
    Main.prototype.validate = function () {
        return this.value;
    };
    return Main;
}());
exports.Main = Main;
