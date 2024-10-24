import React, { useEffect, useState } from 'react'

import './work.scss'
import axios from 'axios';
import Modules from '../../../components/modules/Modules';
import { useLocation, useParams } from 'react-router-dom';

export default function Work() {

  const { id } = useParams();

  const order = ['a', 'b', 'c', 'd', 'e', 'c', 'd', 'b', 'c', 'e', 'd', 'b', 'c', 'd', 'e', 'a', 
    'b', 'e', 'c', 'b', 'd', 'c', 'a', 'd', 'b', 'c', 'a', 'e', 'd', 'c', 'a', 'b', 
    'c', 'e', 'b', 'a', 'c', 'd', 'b', 'c', 'e', 'b', 'c', 'd', 'a', 'c', 'b', 'e', 
    'd', 'a', 'e', 'd', 'c', 'a', 'e', 'c', 'd', 'e', 'a', 'd', 'c', 'e', 'a', 'b', 
    'c', 'd', 'e', 'b', 'd', 'e', 'a', 'd', 'b', 'a', 'e', 'd', 'c', 'e', 'b', 'a', 
    'd', 'e', 'b', 'a', 'e', 'b', 'a', 'd', 'b', 'e', 'c', 'b', 'e', 'c', 'a', 'e', 
    'c', 'a', 'd', 'e', 
  'a', 'b', 'c', 'd', 'e', 'c', 'd', 'b', 'c', 'e', 'd', 'b', 'c', 'd', 'e', 'a', 
    'b', 'e', 'c', 'b', 'd', 'c', 'a', 'd', 'b', 'c', 'a', 'e', 'd', 'c', 'a', 'b', 
    'c', 'e', 'b', 'a', 'c', 'd', 'b', 'c', 'e', 'b', 'c', 'd', 'a', 'c', 'b', 'e', 
    'd', 'a', 'e', 'd', 'c', 'a', 'e', 'c', 'd', 'e', 'a', 'd', 'c', 'e', 'a', 'b', 
    'c', 'd', 'e', 'b', 'd', 'e', 'a', 'd', 'b', 'a', 'e', 'd', 'c', 'e', 'b', 'a', 
    'd', 'e', 'b', 'a', 'e', 'b', 'a', 'd', 'b', 'e', 'c', 'b', 'e', 'c', 'a', 'e', 
    'c', 'a', 'd', 'e']
   

  //obtain data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    .then((res) => {
      setData(res.data);
      setLoading(false);
      
    })
    .catch((err) =>{
      setError(err);
        setLoading(false);
    })
  },[])

  //slice data

  const [sliced, setSliced] = useState([])
  useEffect(() => {
    console.log('slicing');
    
    if (data.length > 0) {
      let grupos = [];
  
      // Divide el array en grupos de 12
      for (let i = 0; i < data.length; i += 12) {
        grupos.push(data.slice(i, i + 12));
      }
  
      // Actualiza el estado con los grupos creados
      setSliced(grupos);
      console.log(sliced);
      
    }
  }, [data]);

  //filter data

  const [filtered, setFiltered] = useState([])

    const location = useLocation();

   useEffect(() => {
    if (location.pathname === "/Grooming"){
      
    }
   
     return () => {
       setFiltered(null)
     }
   }, [])
   
  

  return (
    <section className='work'>
      {(!filtered.length && sliced.length > 0) ? 
        sliced.map((item, i) => (
          <Modules key={i} data={item} type={order[i]} />
        )) : 
        filtered.length > 0 ? 
        filtered.map((item, i) => (
          <Modules key={i} data={item} type={order[i]} />
        )) : 
        <p>No hay resultados</p>
      }
    </section>
  )
}
