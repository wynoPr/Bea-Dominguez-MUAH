import React from 'react'

import './legal.scss'

export default function Legal() {
  return (
    <section className='legal'>
        <h1 className='h3'>1. INFORMACIÓN CORPORATIVA</h1>
        <p className='p'>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, <strong>[NOMBRE DE LA MAQUILLADORA]</strong> le informa que es titular del sitio web: <a href="[www.tusitioweb.com]">www.tusitioweb.com</a>. De acuerdo con lo exigido por el artículo 10 de la mencionada Ley, se notifican los siguientes datos:</p>
        <ul>
            <li className='p'><strong>Titular:</strong> [NOMBRE DE LA MAQUILLADORA]</li>
            <li className='p'><strong>Número de Identificación Fiscal (NIF):</strong> [__________]</li>
            <li className='p'><strong>Domicilio social:</strong> [DIRECCIÓN COMPLETA, CÓDIGO POSTAL, LOCALIDAD, PROVINCIA]</li>
            <li className='p'><strong>Correo electrónico de contacto:</strong> <a href="mailto:[correo@tusitioweb.com]">[correo@tusitioweb.com]</a></li>
        </ul>

        <h1 className='h3'>2. USUARIO Y RÉGIMEN DE RESPONSABILIDADES</h1>
        <p className='p'>La navegación y el uso de este sitio web, así como de todos los subdominios y directorios incluidos, otorgan la condición de Usuario, por lo que se aceptan todas las condiciones de uso aquí establecidas. Si no está de acuerdo con estas condiciones, le rogamos no haga uso del portal.</p>
        <p className='p'>El sitio web proporciona una variedad de información, servicios y datos. El usuario asume la responsabilidad en el uso correcto del sitio. Esta responsabilidad se extiende a la veracidad y licitud de la información que aporte en los formularios de contacto.</p>

        <h1 className='h3'>3. POLÍTICA DE PRIVACIDAD</h1>
        <p className='p'>[NOMBRE DE LA MAQUILLADORA] se compromete a proteger la privacidad de sus usuarios y a garantizar que sus datos personales sean tratados de acuerdo con la normativa vigente en materia de protección de datos. No se recabarán datos personales sin el consentimiento del usuario.</p>
        <p className='p'>Los datos personales proporcionados por los usuarios serán almacenados en un archivo bajo la responsabilidad de [NOMBRE DE LA MAQUILLADORA], con la finalidad de poder facilitar la relación comercial.</p>

        <h1 className='h3'>4. PROPIEDAD INTELECTUAL</h1>
        <p className='p'>Todos los contenidos del sitio web, incluyendo textos, imágenes y diseño gráfico, son propiedad de [NOMBRE DE LA MAQUILLADORA] o de terceros que han autorizado su uso. Se prohíbe la reproducción, distribución o utilización de los contenidos sin autorización previa.</p>

        <h1 className='h3'>5. ENLACES A TERCEROS</h1>
        <p className='p'>Este sitio web puede contener enlaces a otros sitios. [NOMBRE DE LA MAQUILLADORA] no se hace responsable del contenido de estas páginas externas y no garantiza la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sus contenidos.</p>

        <h1 className='h3'>6. MODIFICACIONES</h1>
        <p className='p'>[NOMBRE DE LA MAQUILLADORA] se reserva el derecho a realizar modificaciones en el contenido del sitio web, así como en sus condiciones de uso, sin necesidad de previo aviso. Estas modificaciones serán efectivas desde su publicación en la web.</p>

        <h1 className='h3'>7. JURISDICCIÓN</h1>
        <p className='p'>La relación entre el usuario y [NOMBRE DE LA MAQUILLADORA] se regirá por la normativa española vigente. Para cualquier controversia que pueda surgir, serán competentes los juzgados de la localidad de [LOCALIDAD].</p>
    </section>
  )
}
