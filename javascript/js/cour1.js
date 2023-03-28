//les variables
let nom='mohamed'
let age=30
let taille=1.75
let etat=true
let etudiant=['aaaa','bbbbb','ccccc']
let h1=document.querySelector('h1')

//la concatination
/*alert(`mon nom est ${nom} et mon age est ${age}`)
let reponse=confirm('voulez vous vraiment télécharger')
console.log(reponse)
reponse=prompt('Saisir votre login')
console.log(reponse)
document.title=`mon nom est ${nom} et mon age est ${age}`
document.write(`<b>mon nom est ${nom} et mon age est ${age}</b>`)
let madiv=document.getElementsByTagName('div')
madiv[0].innerHTML=`<b>mon nom est ${nom} et mon age est ${age}</b>`
*/
//les conditions
/*let val1=prompt('donner val1')
let val2=prompt('donner val2')

// > < >= <= == === != !== && || ! 
if(val1>val2)
{
    alert('je suis dans if')
}
else if(val1==val2)
{
    alert('je suis dans else if')
}
else
{
    alert('je suis dans else')
}

switch(val1)
{
    case 1:
        console.log('aaaa')
        break;
     case 2:
        console.log('bbbb')
        break
    default: 
        console.log('xxxxxx')
        break   
}

let message= val1>val2 ? 'Bonjour': 'Bonsoir'
console.log(message)
*/
// les boucles
let etudiants=[{a:0},{b:1},{c:2},{d:3}]
// i++ i=i+1 i+=1

for(let i=0;i<etudiants.length;i+=2)
{
console.log(etudiants[i])
}
for(etud in etudiants)
{
    console.log(etudiants[etud])
}
etudiants.map(function(etud){
    console.log(etud)
})

let login=prompt('donner votre login')

while(login!='taratata')
{
    alert('erreur !!!!!')
    login=prompt('donner votre login')
}
let login1=""
do{
     login1=prompt('donner votre login')
}
while(login1!='taratata')

