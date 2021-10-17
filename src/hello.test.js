const hello = require("./hello")
// @ponicode
describe("hello.sayHello", () => {
    test("0", () => {
        let callFunction = () => {
            hello.sayHello()
        }
    
        expect(callFunction).not.toThrow()
    })
})
