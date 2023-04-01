// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am a teacher.');
}

// passing function as an argument
greet('Wyatt', callMe);