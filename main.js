let img = document.querySelectorAll('.slider-container img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slideNumber = document.querySelector('#slide-number');
let i = 0 ;

let pagenation = document.createElement('ul');
pagenation.setAttribute('id','pagenation-ul');

for(let index = 1; index <= img.length ;  index++){
    let li = document.createElement('li');
    li.setAttribute('data-index',index);
    li.setAttribute('class','list');
    let text = document.createTextNode(index);
    li.appendChild(text) ;
    pagenation.appendChild(li);
}
document.querySelector('.indicator').appendChild(pagenation);
let li = document.querySelectorAll('ul li');
removeActive = function(){
    for(let l = 0 ; l< img.length;l++){
        img[l].classList.remove('active');
        li[l].classList.remove('active');
    }
}
removeActive();
addActive = function(){
    img[i].classList.add('active');
    li[i].classList.add('active');
    let slideNum = i + 1;
    document.getElementById('slide-number').innerText="slide number #"+slideNum;
    if (i=== 0){
        prev.classList.add('disabled');
    } else if(i===img.length-1){
        next.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
        next.classList.remove('disabled');
    }
}
addActive ();

prev.addEventListener('click',function(e){
    i--;
    if (i>-1){
    removeActive();
    addActive();
    }else {
        i = 0 ;
        return false;
    }
    
});
next.addEventListener('click',function(e){
    i++;
    if (i < img.length){
    removeActive();
    addActive();
    } else {
        i = img.length-1 ;
        return false;
    }

});

document.addEventListener('click',function(e){
    
    if (e.target.classList[0] === 'list'){
        removeActive();
        
        i =  e.target.dataset.index -1;
        addActive();
    }
});