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


<div className="banner flex 2xl:flex-row lgg:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row smm:flex-col ssm:flex-col 2sm:flex-col 3sm:flex-col ss:flex-col  items-center mt-16">

<div style = {{
    backgroundImage: `url(${bannerBackground})`,
    backgroundSize: 'cover',
}} className="h-96 w-full flex justify-center items-center">
    
    {/* introSection */}

    <div className="w-2/1 space-y-2 ms-4 text-white 2xl:space-y-2 lgg:space-y-2 xl:space-y-2 lg:space-y-2 md:space-y-2 sm:space-y-2 smm:space-y-2 ssm:space-y-2 2sm:space-y-0 3sm:space-y-0 ss:space-y-0">

    <h3 className="text-2xl font-semibold 2xl:text-2xl lgg:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl smm:text-2xl ssm:text-2xl 2sm:text-lg 3sm:text-lg ss:text-sm">Hello, I Am</h3>
    <h1 className="text-5xl font-bold text-orange-800 2xl:text-8xl lgg:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl smm:text-3xl ssm:text-2xl 2sm:text-3xl 3sm:text-2xl ss:text-sm">Gulab Khan</h1>
    <h2 className="text-2xl font-semibold 2xl:text-xl lgg:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl smm:text-xl ssm:text-xl 2sm:text-xl 3sm:text-lg ss:text-sm">I am a <span ref={el} className="text-orange-800 text-8xl 2xl:text-xl lgg:text-xl xl:text-2xl lg:text-4xl md:text-xl sm:text-xl smm:text-xl ssm:text-xl 2sm:text-xl 3sm:text-lg ss:text-sm"></span></h2>
    <p className="text-1xl 2xl:text-lg lgg:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg smm:text-lg ssm:text-lg 2sm:text-sm 3sm:text-sm ss:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet excepturi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam incidunt tenetur ab fugiat ipsam dolores saepe atque, quidem libero?</p>

    <div className="icons space-x-5 py-2 2xl:space-x-5 lgg:space-x-5 xl:space-x-5 lg:space-x-5 md:space-x-4 sm:space-x-4 smm:space-x-4 ssm:space-x-4 2sm:space-x-4 3sm:space-x-4 ss:space-x-2">
        {/* icons */}

        <a href=""><i class="2xl:text-3xl lgg:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl smm:text-3xl ssm:text-2xl 2sm:text-xl 3sm:text-sm ss:text-sm text-3xl fa-brands fa-facebook hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="2xl:text-3xl lgg:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl smm:text-3xl ssm:text-2xl 2sm:text-xl 3sm:text-sm ss:text-sm text-3xl fa-brands fa-instagram hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="2xl:text-3xl lgg:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl smm:text-3xl ssm:text-2xl 2sm:text-xl 3sm:text-sm ss:text-sm text-3xl fa-brands fa-twitter hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="2xl:text-3xl lgg:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl smm:text-3xl ssm:text-2xl 2sm:text-xl 3sm:text-sm ss:text-sm text-3xl fa-brands fa-linkedin hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="2xl:text-3xl lgg:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl smm:text-3xl ssm:text-2xl 2sm:text-xl 3sm:text-sm ss:text-sm text-3xl fa-brands fa-github hover:text-black cursor-pointer"></i></a>
        <a href=""><i class="2xl:text-3xl lgg:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl smm:text-3xl ssm:text-2xl 2sm:text-xl 3sm:text-sm ss:text-sm text-3xl fa-brands fa-youtube hover:text-black cursor-pointer"></i></a>
        

    </div>

    <div className="pt-2">
    <a href="" className='text-white bg-orange-400 px-3 py-2 rounded-full shadow-lg text-1xl font-semibold hover:bg-orange-600 hover:text-lime-300'><button className="3sm:mb-8">Contact Me</button></a>
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