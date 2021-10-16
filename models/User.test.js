const User = require("./User")
// @ponicode
describe("checkPassword", () => {
    let inst

    beforeEach(() => {
        inst = new User()
    })

    test("0", () => {
        let callFunction = () => {
            inst.checkPassword("accessdenied4u")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.checkPassword("NoWiFi4you")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.checkPassword("!Lov3MyPianoPony")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.checkPassword("$p3onyycat")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.checkPassword("YouarenotAllowed2Use")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.checkPassword(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
