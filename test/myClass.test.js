var MyClass = require('../src/myClass')
var myObj = new MyClass()
var chai = require('chai')
var expect = chai.expect
describe('Test suite',()=>{
    it('test the add Method',()=>{
        expect(myObj.add(1,2)).to.be.equal(3)
    })
})