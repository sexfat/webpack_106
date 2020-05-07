import $ from 'jquery';
import TweenMax  from 'gsap'


$('.box').css('background-color' ,"yellow");


TweenMax.to('.box' ,1 ,{x: 400,
y: 400}); 
// console.log('ok');
