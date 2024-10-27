import React, { useEffect, useState } from 'react'

import './grids.scss'
import { Link, useLocation } from 'react-router-dom';

export default function Modules({data, type}) {

  // console.log(data);
  const location = useLocation();
  // console.log(location.pathname);
  
  

    const [vari, setVari] = useState([]);

    useEffect(() => {
        if (type === "a") {
            if (data.length <= 3) {setVari(1);}
            else if (data.length === 4) {setVari(2);}
            else if (data.length > 4 && data.length <= 7) {setVari(3);}
            else if (data.length > 7 && data.length <= 10) {setVari(4);}
        }else if (type === "b") {
            if (data.length <= 2) {setVari(1);}
            else if (data.length === 3) {setVari(2);}
            else if (data.length === 4) {setVari(3);}
            else if (data.length === 5) {setVari(4);}
            else if (data.length > 5 && data.length <= 7) {setVari(5);}
            else if (data.length > 7 && data.length <= 10) {setVari(6);}
        }else if (type === "c") {
            if (data.length <= 2) {setVari(1);}
            else if (data.length > 2 && data.length <= 4) {setVari(2);}
            else if (data.length === 5) {setVari(3);}
            else if (data.length > 5 && data.length <= 7) {setVari(4);}
            else if (data.length === 8) {setVari(5);}
            else if (data.length === 9) {setVari(6);}
            else if (data.length === 10) {setVari(7);}
            else if (data.length === 11) {setVari(8);}
        }else if (type === "d") {
            if (data.length <= 2) {setVari(1);}
            else if (data.length === 3) {setVari(2);}
            else if (data.length === 4) {setVari(3);}
            else if (data.length === 5) {setVari(4);}
            else if (data.length > 5 && data.length <= 8) {setVari(5);}
            else if (data.length === 9) {setVari(6);}
            else if (data.length === 10) {setVari(7);}
        }else if (type === "e") {
            if (data.length <= 2) {setVari(1);}
            else if (data.length === 3) {setVari(2);}
            else if (data.length === 4) {setVari(3);}
            else if (data.length > 4 && data.length <= 6) {setVari(4);}
            else if (data.length > 6 && data.length <= 8) {setVari(5);}
            else if (data.length === 9) {setVari(6);}
            else if (data.length > 9 && data.length <= 11) {setVari(7);}
        }
    }, [])  

  return (
    <section className={`grid_${type}${vari}`}>
        <span className='cell'/>
  {data.map((item, i) => (
    <Link to={location.pathname !== '/' ? `${location.pathname}/${Number(item.id)}` : `/${Number(item.id)}`} className={`cell_${type}_${i} image`} key={i} style={{ backgroundImage: `url(https://picsum.photos/id/${item.id}/300/400)` }}/>

  ))}
</section>
  )
}
