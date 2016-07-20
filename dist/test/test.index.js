"use strict";
var index_1 = require("../src/index");
var chai_1 = require("chai");
suite("index", function () {
    var m;
    setup(function () {
        m = new index_1.Main();
    });
    test("should validate", function () {
        chai_1.assert.isTrue(m.validate());
    });
});
