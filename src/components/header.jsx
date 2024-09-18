import React from 'react';
import { useState } from 'react';

const header = () => {

    const [brandName, setbrandName] = useState('Gulab Khan')

    const [menuLinks, setMenuLinks] = useState([
        {
            title: 'Home',
            link: '/home',
            id: 1,
        },
        {
            title: 'About',
            link: '/about',
            id: 2,
        },
        {
            title: 'Skills',
            link: '/skills',
            id: 3,
        },
        {
            title: 'Portfolio',
            link: '/portfolio',
            id: 4,
        },
        {
            title: 'Contact',
            link: '/contact',
            id: 5,
        }
    ])

    const [actionButton,setActionbutton] = useState(
        {
            title: 'Download CV',
            link: '/downloadcv',
        }
    )


  return (
    <>    

        <div className='h-20 flex justify-between items-center px-4 bg-slate-200 border-b-2 border-slate-300 shadow-xl'>
            {/* header section */}
            <div>
                {/* logoBrand */}

                <h1 className='text-3xl font-bold'>{brandName}</h1>

            </div>

            <div className='space-x-6'>
                {/* menuList */}

                {
                    menuLinks.map((link) => (

                        <a key={link.id} href={link.link} className='hover:text-orange-600 font-semibold shadow-4'>{link.title}</a>

                    ))
                }



                {/* <a href="/about" className='hover:text-orange-600 font-semibold shadow-4'>About</a>
                <a href="/skills" className='hover:text-orange-600 font-semibold shadow-4'>Skills</a>
                <a href="/portfolio" className='hover:text-orange-600 font-semibold shadow-4'>Portfolio</a>
                <a href="/contact" className='hover:text-orange-600 font-semibold shadow-4'>Contact</a> */}

            </div>

            <div className='rounded-lg'>
                {/* button */}

                <a href={actionButton.link} className='text-white bg-orange-400 px-3 py-2 rounded-lg shadow text-1.5xl font-semibold hover:bg-orange-600 hover:text-lime-300'>{actionButton.title}</a>

            </div> 
        </div>

    </>
  )
}

export default header;