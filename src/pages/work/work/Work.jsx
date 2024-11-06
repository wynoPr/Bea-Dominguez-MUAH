import React, { useEffect, useState } from 'react'

import './work.scss'
import axios from 'axios';
import Modules from '../../../components/modules/Modules';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Viewer from '../../../components/viewer/Viewer';

export default function Work() {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && isNaN(Number(id))) {
      console.log('id not a number');
      
        navigate('/'); 
    }
}, [id]); 
   


  const location = useLocation();

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
   
  //visibility

  const initObserver = () => {
    const images = document.querySelectorAll('.image');
    const options = {
      root: null, // Usar el viewport
      threshold: 0.1 // 10% visible
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    images.forEach(image => {
      observer.observe(image);
    });
  };
  useEffect(() => {
    
    setTimeout(() => {
      
      initObserver();
    }, 100);
  }, [location])
  

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
    })
    setTimeout(() => {
      
      initObserver();
    }, 500);
  },[])

  //slice data

  const [sliced, setSliced] = useState([])
  useEffect(() => {
    // console.log('slicing');
    // console.log(data);
    
    
    if (data.length > 0) {
      let grupos = [];
  
      // Divide el array en grupos de 12
      for (let i = 0; i < data.length; i += 12) {
        grupos.push(data.slice(i, i + 12));
      }
  
      // Actualiza el estado con los grupos creados
      setSliced(grupos);
      // console.log(sliced);
      
    }
  }, [data]);

  //filter data

  const [filtered, setFiltered] = useState([])

   useEffect(() => {
    if (location.pathname == "/Grooming"){
      setFiltered(data.filter(item => item.tags.includes('Grooming')))
    }
    else if (location.pathname == "/Women"){
      setFiltered(data.filter(item => item.tags.includes('Woman')))
    }
    else if (location.pathname == "/Advertising"){
      setFiltered(data.filter(item => item.tags.includes('Advertisement')))
    }
    else if (location.pathname == "/Kids"){
      setFiltered(data.filter(item => item.tags.includes('Kids')))
    }
    else if (location.pathname == "/Celeb" ){
      setFiltered(data.filter(item => item.tags.includes('Celebs')))
    }

    // if (filtered == 0 && (location.pathname !== '/' && !/\/\d+$/.test(location.pathname)) ) {
    //   console.log('lorito');
      
    //   navigate('/');
    // }
   
     return () => {
       setFiltered([])
     }
   }, [location])

   //slice filtered

  const [slicedF, setSlicedF] = useState([])
  useEffect(() => {
    // console.log('slicing filtered');
    // console.log(data);
    
    
    if (filtered.length > 0) {
      let grupos = [];
  
      // Divide el array en grupos de 12
      for (let i = 0; i < filtered.length; i += 12) {
        grupos.push(filtered.slice(i, i + 12));
      }
  
      // Actualiza el estado con los grupos creados
      setSlicedF(grupos);
      // console.log(sliced);
      
    }
  }, [filtered]);

  //  useEffect(() => {
  //    console.log(filtered);
     
  //  }, [filtered])
   

  return (
    <>
    {id && filtered < 1 && <Viewer data={data}/> }
    {id && filtered > 0 && <Viewer data={filtered}/> }
        
      
    <section className='work'>
      {(location.pathname === '/' || /^\d+$/.test(location.pathname.substring(1))) ?
        sliced.map((item, i) => (
          <Modules key={i} data={item} type={order[i]} />
        )) :
        slicedF.length !== 0 ?
          slicedF.map((item, i) => (
            <Modules key={i} data={item} type={order[i]} />
          )) :
          <p className='h4'>No hay resultados</p>
      }
      
    </section>
    </>
  )
}
