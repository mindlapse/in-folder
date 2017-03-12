let path = require("path")
let inside = require("../in-folder")
require("chai").should()


describe("inside", () => {

    it("should call the callback", () => {
        let result = { called : false }
        inside('test', () => result.called = true)
        result.called.should.equal(true)

    })

    it("should change folders", async () => {
        let cwd = process.cwd()
        await inside('test', () => {
            path.join(cwd, "test").should.equal(process.cwd())
        })

    })

    it("should change back to the original folder after", async () => {
        let cwd = process.cwd()
        await inside('test', () => {
            path.join(cwd, "test").should.equal(process.cwd())
        })
        cwd.should.equal(process.cwd())
    })

    it("should restore the original folder in the event of an exception", async () => {
        let cwd = process.cwd()
        let exceptionCaught = false
        try {
            await inside('test', () => {
                path.join(cwd, "test").should.equal(process.cwd())
                throw Exception("problemo")
            })
        } catch (e) {
            exceptionCaught = true
            cwd.should.equal(process.cwd())
        }
        exceptionCaught.should.equal(true)
    })

    it("should return the result of the callback", async () => {
        let result = await inside('test', () => {
            return { someObject : true }
        })
        result.should.have.property("someObject")
    })

})