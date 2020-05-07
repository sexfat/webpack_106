import hello from './hello';
import  world from './world';
import $ from 'jquery';
import TweenMax  from 'gsap'


$('.box').css('background-color' ,"blue");


TweenMax.to('.box' ,1 ,{x: 300}); 
// console.log('ok');






console.log(hello +  world);