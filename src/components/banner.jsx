import React from "react";
import { useState } from "react";
import bannerImage from '../assets/gulabHalf.png.png'
import bannerBackground from '../assets/wave.svg'
import Typed from 'typed.js';
import { useRef } from "react";
import { useEffect } from "react";


const banner = () => {

    // we can animate the text with the help of typed.js 

    const el = useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer','Backend Developer','Mern Stack Developer'],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    },[])

return( 


<div className="banner flex items-center mt-16">

<div style = {{
    backgroundImage: `url(${bannerBackground})`,
    backgroundSize: 'cover',
}} className="h-96 w-full flex justify-center items-center">
    
    {/* introSection */}

    <div className="w-2/1 space-y-2 ms-10 text-white">

    <h3 className="text-2xl font-semibold">Hello, I Am</h3>
    <h1 className="text-5xl font-bold text-orange-800">Gulab Khan</h1>
    <h2 className="text-2xl font-semibold">I am a <span ref={el} className="text-orange-800"></span></h2>
    <p className="text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet excepturi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam incidunt tenetur ab fugiat ipsam dolores saepe atque, quidem libero?</p>

    <div className="icons space-x-5 py-2">
        {/* icons */}

        <a href=""><i class="text-3xl fa-brands fa-facebook hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="text-3xl fa-brands fa-instagram hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="text-3xl fa-brands fa-twitter hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="text-3xl fa-brands fa-linkedin hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="text-3xl fa-brands fa-github hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="text-3xl fa-brands fa-youtube hover:text-black cursor-pointer"></i></a>
        

    </div>

    <div className="pt-2">
    <a href="" className='text-white bg-orange-400 px-3 py-2 rounded-full shadow-lg text-1xl font-semibold hover:bg-orange-600 hover:text-lime-300'><button>Contact Me</button></a>
    </div>

    

    </div>

</div>

<div className="w-full flex justify-center">
    {/* profileImageSection */}
    <img className="rounded-full w-fit shadow-lg" src={bannerImage} alt="" />


</div>

</div>


)
}
export default banner;