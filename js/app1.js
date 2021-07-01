"use strict";

function first() {
    //do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`i teach: ${lang}`);
    callback();
}

function done() {
    console.log('i teach this lesson!')
}

learnJS('JavaScript', done);