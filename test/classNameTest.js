//for cli tests
//declare & initialize assert to avoid syntax repetition
var assert = require('chai').assert; // for cli testing
//import the addClass function/methods from test.js
var className = require('../src/js/test.js');
var addClass = className.addClass;

//declare & initialize assert to avoid syntax repetition
// var assert = chai.assert;  //for browser testing
//describe is used to group individual tests
describe('addClass', function(){
    //define a use case to test for
    it('should add class to element', function(){
        //create a variable and pass it as an arg to addClass()
        //also pass a string theat represents the class name value
        var el = {className: ''};
        addClass(el, 'test-class');
        //check if the string is added as a class
        assert.equal(el.className, 'test-class');
    });
    //define a second use case to test for
    it('should not add a class which already exists', function(){
        //create a variable with a className and pass both as args to addClass()
        var el = {className: 'exists'};
        addClass(el, 'exists');
        //use split() to create substrings of the current class list & store the list in a var called totalClasses
        var totalClasses = el.className.split(' ').length;
        //check if 'exists' is returned as the only substring contained in the class list
        assert.equal(totalClasses, 1);
    });
    it('should append new class after exisiting one', function(){
        //create a variable with a className
        var el = {className: 'exists'};
        //pass that variable as an arg to addClass & also pass another different className
        addClass(el, 'new-class');
        //use split() to create substrings of the current class list & store the list in a var called classes
        var classes = el.className.split(' ');
        //check the list of classes using array notation to see if 'new-class' is the second substring that was returned from the list
        assert.equal(classes[1], 'new-class');
    });
});
