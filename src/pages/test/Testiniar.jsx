import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './testing.scss'


export default function Testiniar() {


    //obtain data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://x8ki-letl-twmt.n7.xano.io/api:IhioyNcV/beadominguez')
    .then((res) => {
        const sortedData = res.data
        .filter(item => item.publish === true)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      setData(sortedData);
      setLoading(false);
      
    })
    .catch((err) =>{
      setError(err);
        setLoading(false);
    });
  },[])

  useEffect(() => {
    console.log(data);
    
  }, [data])
  


  return (
    <>
        <section className='testing'>
        {data.map((item, i) => (
            <img key={i} src={item.url} alt={item.alt} />
            ))}
        </section>
    </>
  )
}
