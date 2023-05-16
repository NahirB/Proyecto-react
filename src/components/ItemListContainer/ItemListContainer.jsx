import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im';
//import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer';
import {getFirestore} from '../../firebase/config';
import { stock } from '../../data/stock';



export const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()


  useEffect(() =>{
    setLoading(true)
    
    const db = getFirestore()

    const productos = categoryId

      ?db.collection('productos').where('category', '==', categoryId)
      : db.collection('productos')

      productos.get()
      .then((res) => {
              const newItem = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              });
              console.table(newItem);
              setItems(newItem);
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setLoading(false);
            });

  }, [categoryId])


  // useEffect(() =>{
  //   setLoading(true)

  //   const db =getFirestore();

  //   const productos = db.collection('productos')

  //   if(categoryId){
  //     const filtrado = productos.where("category", "==", categoryId)
  //     filtrado.get()
  //         .then((res) =>{
  //           const newItem = res.docs.map((doc) =>{
  //             return{id: doc.id, ...doc.data()}
  //           })
  //           setItems(newItem)
  //         })
  //         .catch((err) => console.log(err))
  //         .finally(() =>{
  //           setLoading(false)
  //         })

  //   }else{
  //     productos.get()
  //     .then((res) =>{
  //       const newItem = res.docs.map((doc) =>{
  //         return {id: doc.id, ...doc.data()}
  //       })
  //       console.table(newItem)
  //       setItems(newItem)
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() =>{
  //       setLoading(false)
  //     })
  //   }
  // }, [categoryId])




  return (
    <>
    {/* Nuestro componente arranca con el loading en "true" y cuando resulve, imprime en pantalla todo nuestro componente ItemList (donde mapeamos cada uno de los productos) */}
      {
        loading
        ?<div className='spinner'><ImSpinner3/></div>
        : <ItemList productos={items}/>
      }
    </>
  )}