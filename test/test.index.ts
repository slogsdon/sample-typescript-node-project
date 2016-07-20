import {Main} from "../src/index";
import {assert} from "chai";

suite("index", function () {
    let m: Main;

    setup(function () {
        m = new Main();
    });

    test("should validate", function () {
        assert.isTrue(m.validate());
    });
});
