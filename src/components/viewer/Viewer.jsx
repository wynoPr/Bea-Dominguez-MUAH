import React, { useEffect, useState } from 'react'

import './viewer.scss'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Viewer({data}) {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const cleanedPath = location.pathname.replace(/\/\d+$/, '');

    
    const getPositionById = (array, id) => {
        return array.findIndex(item => item.id === id);
    };
    const objectPosition = getPositionById(data, id);


    console.log('objetPosition ' +objectPosition);

    //foto gallery

    const next = () => {
        navigate(`${cleanedPath}/${data[objectPosition+1].id}`);
    }

    const back = () => {
        navigate(`${cleanedPath}/${data[objectPosition-1].id}`);
    }

    //foto nav

    const [maxDx, setMaxDx] = useState(0)
    const [position, setPosition] = useState(0)
    

    useEffect(() => {
        setMaxDx(((45 * (data.length - 20)) + 60)/2)
        
        
    }, [data])
    useEffect(() => {
        console.log(-maxDx);
        console.log(maxDx);
    }, [maxDx])
    

        //origin
        
    const [hasRunEffect, setHasRunEffect] = useState(false); 

    useEffect(() => {
        const oPosition = Number(maxDx) - (45 * (Number(objectPosition) - 8.7));
            if(oPosition > maxDx){
                setPosition(maxDx)
            }else if(oPosition < -maxDx){
                setPosition(-maxDx)
            }else{
                setPosition(oPosition)
            }
            setHasRunEffect(true)

    }, [maxDx]);
     
        //advance & regress
    
    const advance = () =>{
        
        if(position > (-maxDx)){
            if(position === -maxDx){
                setPosition(maxDx)
            }else if((position - 240) < (-maxDx)){
                setPosition(-maxDx)
            }else{
                setPosition(position - 240)
            }
            
        }
    }

    const regress = () =>{
        
        if(position < (maxDx)){
            if(position === maxDx){
                setPosition(-maxDx)
            }else if((position + 240) > (maxDx)){
                setPosition(maxDx)
            }else{
                setPosition(position + 240)
            }
            
        }
    }

        //opacity

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(data.length > 5)
        }, 700); ;
    }, [data.length]);

    
    


  return (
    <section className='viewer'>
        <main className='viewer_main'>
            <Link className='close' to={`/${cleanedPath}`}>X</Link>
            <button className='back' onClick={back}>Back</button>
            <figure><img src={`https://picsum.photos/id/${id}/300/400`}/></figure>
            <button className='next'onClick={next}>Next</button>
        </main>
        <nav className='viewer_nav'>
            <button className='nav_back' onClick={regress}>Back</button>
            {data.map((item, i) => (
            <Link to={`${cleanedPath}/${item.id}`} style={{ left: `${position}px`, opacity: isVisible ? '1' : '0' }} className={item.id == id ? 'focus' : ''} key={i} ><img className='viewer_img' src={`https://picsum.photos/id/${item.id}/300/400`} key={i}/></Link>
            ))}
            <button className='nav_next' onClick={advance} >Next</button>
        </nav>
    </section>
  )
}
