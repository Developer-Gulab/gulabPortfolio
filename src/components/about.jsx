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

        <div className="mainBox flex flex-col md:flex-row lg:flex-row xl:flex-row">

        <div className="imageSection w-full flex justify-center mt-16 md:w-1/2 lg:w-1/2 xl:w-1/2">


                {/* imageSection */}

                <img className="w-full h-full object-cover"  src={data.image} alt="Gulab Khan" />            
           
            </div> 

            <div className="aboutSection w-full mt-16 ml-2">
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





// import React, { useState } from "react";
// import blobImage from '../assets/blobGulab.png';

// const About = () => {
//   const [data, setData] = useState({
//     image: blobImage,
//     title: "Frontend & Backend Developer",
//     para: "I am a",
//     paraOne: " JavaScript & React Developer",
//     content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur aliquid sint, distinctio veniam ea officiis perferendis illo ullam numquam nesciunt sed, soluta ad pariatur eum adipisci magnam harum rem non iure. Itaque mollitia nostrum sint est adipisci pariatur vel laborum labore. Tenetur aliquam fuga animi ratione tempore temporibus saepe est.",
//     btn1: {
//       title: "Read More...",
//       link: "/readmore",
//     },
//   });

//   return (
//     <>
//       <div className="mainContainer py-16 bg-slate-100 mt-4 md:py-20 lg:py-24 xl:py-28">
//         {/* mainContainer */}
//         <h1 className="font-bold text-5xl underline text-center md:text-6xl lg:text-7xl xl:text-8xl">About Me</h1>

//         <div className="mainBox flex flex-col md:flex-row lg:flex-row xl:flex-row">
//           <div className="imageSection w-full flex justify-center mt-16 md:w-1/2 lg:w-1/2 xl:w-1/2">
//             {/* imageSection */}
//             <img className="w-full h-full object-cover" src={data.image} alt="Gulab Khan" />
//           </div>

//           <div className="aboutSection w-full mt-16 md:w-1/2 lg:w-1/2 xl:w-1/2 md:pl-10 lg:pl-20 xl:pl-24">
//             {/* aboutSection */}
//             <div className="space-y-5 w-3/4 mt-6 md:w-2/3 lg:w-2/3 xl:w-2/3">
//               <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">{data.title}</h1>
//               <p className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">{data.para}<p className="text-2.5xl text-orange-600 inline">{data.paraOne}</p></p>
//               <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{data.content}</p>
//               <a href={data.btn1.link}>
//                 <button className="text-white bg-orange-400 px-3 py-2 rounded-lg shadow text-1.5xl font-semibold hover:bg-orange-600 hover:text-lime-300 md:text-2xl lg:text-3xl xl:text-4xl">{data.btn1.title}</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;