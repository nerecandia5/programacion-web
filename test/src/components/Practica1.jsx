export function P(){
    const lista = 	
    [{productName: "Laptop", price: 1200, imageUrl: "https://mashable.com/article/the-best-windows-laptop-2024-so-far" }, 
        {productName: "Smartphone",  price: 800, imageUrl:"https://radiokable.net/blog/diferencias-entre-iphone-y-smartphone/" }]

    return(
        <>
        {lista.map((value, index)=> (
            <div key={index}>
                <p>{value.productName}</p>
                <img src={value.imageUrl} alt={value.productName} />
            </div>

        ))}

        </>
    )
}
    