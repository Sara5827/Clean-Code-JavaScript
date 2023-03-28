
function mafonction1()
{
   console.log(arguments)

    let somme=0
    for(let i=0;i<arguments.length;i++)
    {
            somme+=arguments[i]
    }
    return somme
  
   
}

console.log(mafonction1(30))
console.log(mafonction1(12,20))
console.log(mafonction1(12,10,25,40))
let mafonction2=function ()
{
   
   // let a=prompt('donner a')
   // let b=prompt('donner b')
  //  return a*b 
}
console.log(mafonction2())


function Personne()
{
        this.age=18
        console.log(this.age)
        let x=1
        setInterval(()=>{
                this.age++
                console.log(x)
                console.log(this.age)
        },1000)

}


let p=new Personne()
