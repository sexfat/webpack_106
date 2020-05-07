import hello from './hello';
import content from './content';
import $  from 'jquery';
import TweenMax  from 'gsap'


$('.box').css('background-color' ,"#000");


TweenMax.to('.box' ,1 ,{x: 100}); 






console.log(hello + content);