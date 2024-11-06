import React, { useEffect, useRef, useState } from 'react'

import './viewer.scss'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Viewer({data}) {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const cleanedPath = location.pathname.replace(/\/\d+$/, '');

    
    const getPositionById = (array, id) => {
        return array.findIndex(item => item.id == id);
    };
    const objectPosition = getPositionById(data, id);

    useEffect(() => {

    // console.log(data);
    console.log('objetPosition ' + objectPosition);

    }, [id])

    

    //foto gallery

    const next = () => {
        navigate(`${cleanedPath}/${data[objectPosition+1].id}`);
    }

    const back = () => {
        navigate(`${cleanedPath}/${data[objectPosition-1].id}`);
    }

    //foto nav

    const [maxDx, setMaxDx] = useState(0)
    const [navX, setNavX] = useState(0)
    const [position, setPosition] = useState(-30)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
      setNavX(data.length * 45 + 60)
    }, [data])
    

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      console.log(viewportWidth);
      setMaxDx(((45 * (data.length - ((viewportWidth * 0.8)/45))) + 60) + 30)
      
    }, [viewportWidth])
    
    

    useEffect(() => {
        setMaxDx(((45 * (data.length - ((viewportWidth * 0.8)/45))) + 60) + 30)
        
        
    }, [data])
    // useEffect(() => {
    //     console.log(-maxDx);
    //     console.log(maxDx);
    // }, [maxDx])
    

        //origin
        
    const [hasRunEffect, setHasRunEffect] = useState(false); 

    useEffect(() => {
        const oPosition = 45 * (Number(objectPosition) - ((viewportWidth * 0.8)/45/2)+1.3);
            if(oPosition > maxDx){
                setPosition(maxDx)
            }else if(oPosition < -30){
                setPosition(-30)
            }else{
                setPosition(oPosition)
            }
            setHasRunEffect(true)

    }, [maxDx]);
     
        //advance & regress
    
    const advance = () =>{
        // console.log('advance');
        // console.log(position);

        if(position < maxDx){
            if(position === maxDx){
                setPosition(maxDx)
            }else if((position + 240) > (maxDx)){
                setPosition(maxDx)
            }else{
                setPosition(position + 240)
            }
            
        }
    }

    const regress = () =>{
        
        if(position > 0){
            if(position === -30){
                setPosition(-30)
            }else if((position - 240) < -30){
                setPosition(-30)
            }else{
                setPosition(position - 240)
            }
            
        }
    }

        //opacity

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(data.length > 5)
        }, 500); ;
    }, [data.length]);

    
        //close viewer

        const elementRef = useRef(null);

        const goBack = () => {
            navigate(`/${cleanedPath}`);
        };
    
        useEffect(() => {
            const element = elementRef.current;
    
            if (element) {
                element.addEventListener('click', goBack);
                
                // Elimina el evento cuando el componente se desmonta
                return () => element.removeEventListener('click', goBack);
            }
        }, [cleanedPath, navigate]);


    
    


  return (
    <section className='viewer'>
        <main className='viewer_main'>
            <Link className='close' to={`/${cleanedPath}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px">
            <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>
            </svg>
            </Link>
            <button className='back' onClick={back}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"/></svg>
            </button>
            <figure>{objectPosition > -1 && <img src={data[objectPosition].url}/>}</figure>
            <button className='next'onClick={next}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"/></svg>
            </button>
        </main>
        <nav className='viewer_nav' id='viewer_nav'>
            <button className='nav_back back' onClick={regress}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"/></svg>
            </button>
            <div className='viewer_nav_div' style={navX > 0 ? { width: `${navX}px`, right: `${position}px` } : {}}>
                {data.map((item, i) => (
                <Link to={`${cleanedPath}/${item.id}`} 
                style={{ opacity: isVisible ? '1' : '0' }} 
                className={item.id == id ? 'focus' : ''} key={i} >
                    <img className='viewer_img' src={item.url} key={i}/>
                </Link>
                ))}
            </div>
            <button className='nav_next next' onClick={advance} >
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"/></svg>
            </button>
        </nav>
        <div className='viewer_back' ref={elementRef} />
    </section>
  )
}
