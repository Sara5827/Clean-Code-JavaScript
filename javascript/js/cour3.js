function animerDiv()
{
    let madiv=document.getElementById('madiv')
    madiv.style.width='200px'
    madiv.style.height='200px'
    madiv.style.backgroundColor='red'
    madiv.style.position='absolute'
    madiv.style.top='0px'
    madiv.style.left='0px'
    let pas=0
    setInterval(function(){
        madiv.style.top=pas+'px'
        madiv.style.left=pas+'px'
        pas+=10
    },100)
}

let hx=document.getElementById('titre')
console.log(hx)
let divs=document.getElementsByTagName('div')
console.log(divs)
divs[0].style.backgroundColor='orange'
let divc=document.getElementsByClassName('divc')
console.log(divc)