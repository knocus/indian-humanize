"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var humanize_1 = require("../humanize");
test('Humanized value of  12345 is 12.3K', function () {
    expect(humanize_1.humanize(12345)).toBe("12.3K");
});
test('Humanized value of  123 is 123', function () {
    expect(humanize_1.humanize(123)).toBe("123");
});
test('Humanized value of  123000 is 1.2L', function () {
    expect(humanize_1.humanize(123000)).toBe("1.2L");
});
test('Humanized value of  15000 is 15K', function () {
    expect(humanize_1.humanize(15000)).toBe("15K");
});
