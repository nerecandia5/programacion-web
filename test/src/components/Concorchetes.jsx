//armar una lista, pasarla por prop y en la pantalla
export function Concorchetes({lista, objeto }){
    
return(<>

    <h2>{objeto.nombre}</h2>
    {lista.map((value,index)=>(
        <div>
            {value}
        </div>
    ))}
</>)
}