const checkOddEven = require("./oddEven");

test("8 is Even", () => {
    expect(checkOddEven(8)).toBe("Even");
});

test("5 is Odd", () => {
    expect(checkOddEven(5)).toBe("Odd");
});

test("0 is Even", () => {
    expect(checkOddEven(0)).toBe("Even");
});

test("-7 is Odd", () => {
    expect(checkOddEven(-7)).toBe("Odd");
});

test("-10 is Even", () => {
    expect(checkOddEven(-10)).toBe("Even");
});

test("101 is Odd", () => {
    expect(checkOddEven(101)).toBe("Odd");
});