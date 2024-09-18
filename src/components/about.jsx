import React, { useState } from "react";
import blobImage from '../assets/blobGulab.png';



const about = () => {

    const [data, setData] =  useState({
        image: blobImage,
        title: "Frontend & Backend Developer",
        para : "I am a",
        paraOne: " JavaScript & React Developer",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur aliquid sint, distinctio veniam ea officiis perferendis illo ullam numquam nesciunt sed, soluta ad pariatur eum adipisci magnam harum rem non iure. Itaque mollitia nostrum sint est adipisci pariatur vel laborum labore. Tenetur aliquam fuga animi ratione tempore temporibus saepe est.",
        // btn : "Read More...",
        btn1 : {
            title: "Read More...",
            link: "/readmore",
        },
    })


    return (
        <>
        
        

        <div className="mainContainer py-16 bg-slate-100 mt-4">
            {/* mainContainer */}
            <h1 className="font-bold text-5xl underline text-center">About Me</h1>

        <div className="mainBox flex">

        <div className="imageSection w-full flex justify-center mt-16">
                {/* imageSection */}

                <img className=""  src={data.image} alt="Gulab Khan" />            
           
            </div> 

            <div className="aboutSection w-full mt-16">
                {/* aboutSection */}

                <div className="space-y-5 w-3/4 mt-6">
                <h1 className="text-5xl font-bold">{data.title}</h1>
                <p className="text-2xl font-semibold">{data.para}<p className="text-2.5xl text-orange-600 inline">{data.paraOne}</p></p>
                <p>{data.content}</p>
                <a href={data.btn1.link}>
                <button className="text-white bg-orange-400 px-3 py-2 rounded-lg shadow text-1.5xl font-semibold hover:bg-orange-600 hover:text-lime-300">{data.btn1.title}</button>
                </a>
                </div>

            </div>

        </div>

        </div>
        
        
        </>
    )
}
export default about;