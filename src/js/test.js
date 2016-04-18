//random tests (see:../../test/)
//for node cli 
module.exports = {
    addClass: function(el, newClass) {
        //el === a dom-node ; newClass === name of class to be applied
        //do nothing if newClass already exists in the dom-node class list
        if(el.className.indexOf(newClass) !== -1 ){
            return;
        }
        //add a space before newClass if the dom-node class list isn't an empty string
        if(el.className !== ''){
            newClass = ' ' + newClass;
        }
        //set newClass as a class on the dom-node
        el.className += newClass;
    }
}

//for browser test
function addClass(el, newClass) {
    //el === a dom-node ; newClass === name of class to be applied
    //do nothing if newClass already exists in the dom-node class list
    if(el.className.indexOf(newClass) !== -1 ){
        return;
    }
    //add a space before newClass if the dom-node class list isn't an empty string
    if(el.className !== ''){
        newClass = ' ' + newClass;
    }
    //set newClass as a class on the dom-node
    el.className += newClass;
}
