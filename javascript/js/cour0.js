let btn=document.querySelector('button')
btn.addEventListener('click',chagerdom)


function chagerdom()
{
    let h1=document.querySelector('h1')
    let txt=document.createTextNode="Ceci est un texte"
    h1.style.backgroundColor='red'
    h1.append(txt)
    let photo=document.createElement('img')
    photo.setAttribute('src','img/back.png')
    photo.setAttribute('width','250')
    document.body.appendChild(photo)
}

const xhr=new XMLHttpRequest()
xhr.onload=function(){
    let txt=document.createTextNode(this.responseText)
    let h1=document.querySelector('h1')
    h1.appendChild(txt)
}

xhr.open('GET','contenu.txt')
xhr.send()