import React from "react";


const footer = () => {
    return(
        <>
        
        <div className="footerMain flex justify-evenly font-semibold h-14 items-center bg-slate-400">


        <div className="footerOne">
        {/* terms */}

        <p>@2024 Gulab Khan. <span>All Rights Reserved</span></p>

        </div>

        <div className="footerTwo space-x-6">
        {/* links */}

        <a href="/about" className="hover:underline hover:text-lime-200">About</a>
        <a href="/privacyPolicy" className="hover:underline hover:text-lime-200">Privacy Policy</a>
        <a href="/licensing" className="hover:underline hover:text-lime-200">Licensing</a>
        <a href="/contact" className="hover:underline hover:text-lime-200">Contact</a>

        </div>




        </div>
        
        
        </>
    )
}

export default footer;