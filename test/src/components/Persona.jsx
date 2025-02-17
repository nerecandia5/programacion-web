export function Persona({escuela}){
    const lista = 	
    [{name: "Federico", imageUrl: "https://media.minutouno.com/adjuntos/150/imagenes/028/651/0028651152.jpg" }, 
        {name: "Nicolas", imageUrl: "https://media.minutouno.com/adjuntos/150/imagenes/028/651/0028651152.jpg" }]

    return(
        <>
        <h2>Escuela {escuela}</h2>
        {lista.map((value, index)=> (
            <div key={index}>
                <p>{value.name}</p>
                <img src={value.imageUrl} alt={value.name} />
            </div>

        ))}

        </>
    )
}