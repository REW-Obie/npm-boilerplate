//declare & initialize assert to avoid syntax repetition
var assert = require('chai').assert;  //for cli tests

//declare & initialize assert to avoid syntax repetition
// var assert = chai.assert;  //for browser testing

//describe is used to group individual tests
describe('Array', function() {
    //'it' is used to create actual tests
    //each 'it' should explain one specific behavior
    it('should start empty', function() {
        //create an empty array and check its length with assert
        var arr = [];
        //validation: assert.equal() is iused to check the result of the test
        //most assertion functions take two args; 1:the actual value from the test & 2: the expected value
        assert.equal(arr.length, 0, 'Array length was not 0');
    });
});
