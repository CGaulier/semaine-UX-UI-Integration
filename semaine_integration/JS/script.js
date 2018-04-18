

document.addEventListener('DOMContentLoaded', function(){

//Je repère mon bouton qui va afficher

    var light = document.querySelector('.conn');
    //je décris quelle action
        light.addEventListener("click", lightBox);
    
    function lightBox(){

        //je décris ce que je vais afficher
        var lighty = document.querySelector('#light');
        lighty.style.visibility="visible";
    }

//Quand je clique la lightbox de connexion disparait.
var lightoff = document.querySelector('#traitConn');
    lightoff.addEventListener("click", lightBoxOff);

    function lightBoxOff(){
        console.log('done');
        var lightyOff = document.querySelector('#light');
        lightyOff.style.visibility="hidden";
    }

//SCROOL SMOOTHLY BABE


    //JE CREER MES VARIABLES (je repère mes ancrages)
    var scrollBtn = document.querySelector('#fleche');
    var scrollBtn = document.querySelector('#btnfirst');
    var scrollBtns = document.querySelector('#btnsec');
    var scrollBtnt = document.querySelector('#btnthi');
    var scrollBtnf = document.querySelector('#btnfou');
    var scrollBtnfi = document.querySelector('#btnfiv');
    var scrollTop = document.querySelector('#top');
    var second = document.querySelector('.logo');
    var first = document.querySelector('.service');
    var thi = document.querySelector('.new');
    var fou = document.querySelector('.creation');
    var fiv = document.querySelector('.rsxsoc');

    //fonction qui attache le point A et le point B
    function scrollPage(myBtn, mySection){
        myBtn.onclick = function(){
            smoothScroll(mySection);
        }
    }
    scrollPage(fleche, first);
    scrollPage(scrollBtn, second);
    scrollPage(scrollBtns, first);
    scrollPage(scrollBtnt, thi);
    scrollPage(scrollBtnf, fou);
    scrollPage(scrollBtnfi, fiv);
    scrollPage(scrollTop, second);
})




document.addEventListener('DOMContentLoaded', function(){
    
               //slider

               setInterval(change2,9000);
               setTimeout(state5,3000);
               setTimeout(state6,6000);
               setTimeout(state4,9000);

                setInterval(change,9000);
                setTimeout(state2,3000);
                setTimeout(state3,6000);
                setTimeout(state1,9000);
                
           })
 
 
 /**
 * fonctions de changement des images du slider
 */
 function state1(){
    var hero = document.getElementById('firstimg');
    hero.style.backgroundImage = "url(img/image1.jpg)" ;

 }
 
 function state2(){
    var hero = document.getElementById('firstimg');
    hero.style.backgroundImage = "url(img/image.jpg)" ;
 }
 
 function state3(){
    var hero = document.getElementById('firstimg');
    hero.style.backgroundImage = "url(img/image1.jpg)" ;
 }
 






 function state4(){
    var hero = document.getElementById('secondimg');
    hero.style.backgroundImage = "url(img/image.jpg)" ;

 }
 
 function state5(){
    var hero = document.getElementById('secondimg');
    hero.style.backgroundImage = "url(img/image1.jpg)" ;
 }
 
 function state6(){
    var hero = document.getElementById('secondimg');
    hero.style.backgroundImage = "url(img/image.jpg)" ;
 }
 
 /**
 * fonction de lancement du slider
 */


 function change(){
    setTimeout(state2,3000);
    setTimeout(state3,6000);
    setTimeout(state1,9000);
 }

 function change2(){
     setTimeout(state5,3000);
     setTimeout(state6,6000);
     setTimeout(state4,9000);
 }


 //CREATION de lightbox

