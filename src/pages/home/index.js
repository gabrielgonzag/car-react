import React from "react";
import { cars } from "../../script";

export default function Home (){
    return(
        <>
        {cars.map(item => {
            return(
                <>
                <img src={item.foto}/>
                <h1>{item.nome}</h1>
                <h2>{item.preco}</h2>
                <h3>{item.ano}</h3>
                </>
            )
        })}
            
    </>
    )

}