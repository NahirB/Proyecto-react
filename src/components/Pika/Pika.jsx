import React, { useEffect, useState } from "react";
import './Pika.css'

export const Pika = () =>{

    const [pokemon, setPokemon] = useState("");

    const [id, setId] = useState(1);

    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json ())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nomre: data.name,
                    img: data.sprites.front_default,
            })
        })
    }, [id])



    const anterior = () => {
        id > 1 && setId (id-1)
    }

    const siguiente = ( ) => {
        setId(id+1)
    }

    const imputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        if(busqueda.length > 2)
        fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
    }



    return (
        <><>
            <div>
                <h3 className='pika'>{pokemon.numero}</h3>
                <h3 className='pika'>{pokemon.nombre}</h3>
                <img className='pika' src={pokemon.img} />
            </div>
            <div>
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </div>
        </><>
                <form>
                    <input type= "text"/>
                </form>
                
        </></>
    )
}