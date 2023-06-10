
let total=0;

const notas =[6,8,9,2,5,10]


const promedio = genera_promedio(notas)

function genera_sumar(notas){

    for(let i=0;i < notas.length;i++)
    {
       total+=notas[i];
    }
    return total;
}
function genera_promedio(notas){
    
    return  genera_sumar(notas) / notas.length;
}

console.log(promedio);
document.getElementById("promedio").innerHTML = "El promedio es : " + promedio;
    

