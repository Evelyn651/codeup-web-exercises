"use strict";

//$(document).ready(function(){
 //   alert("The pase is ready");
//});

//Exercise using id selectors

$(document).ready(function(){
    $('h1').click(function(){
        $('h1').css('background-color', 'teal')
    });
    $('p').dblclick(function(){
        $('p').css('font-size', '18px')
    });
    var onList = function(){
        $('li').css('background-color', 'grey')
    };
    var offList = function(){
        $('li').css('background-color', 'white')
    };
    $('li').hover(onList, offList);
});