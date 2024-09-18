import React from "react";
import backgroundImg from '../assets/wave.svg'


const expertise = () => {
    return(
        <>
        <div className="bg-slate-100 shadow-2xl">

        <h1 className="text-center text-5xl font-bold underline">My Expertise</h1>

        <div className="parent flex py-16">



        <div style={{
            backgroundImage:`url(${backgroundImg})`,
            backgroundSize: 'cover',
        }} className="hireme w-1/2 h-60 flex justify-center items-center px-6 mr-6">
        {/* hireme Text */}
        <div className="text-center space-y-2 text-white">

        <h1 className="text-3xl font-semibold">I love these technology</h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, recusandae dolorem nobis dignissimos nesciunt quia accusamus excepturi impedit esse beatae, eveniet omnis ratione quam quo ad ipsa aspernatur labore quis.
        </p>

        <div>
        <a href="/hireme">
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-lg h-10 w-24 p-2 mr-6 hover:bg-orange-600 hover:text-lime-300">Hire Me</button>
        </a>

        </div>
        

        </div>

        

        </div>


        <div className="language w-1/2 space-y-4">
        {/* languagePart */}

        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">Core Java</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">Next.js</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">Node.js</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">Redux</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">JavaScript</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">Python</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">Django</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">Rest API</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">HTML</button>
        <button className="text-1xl bg-orange-400 text-white font-semibold rounded-full h-10 w-24 p-2 ml-2 hover:bg-orange-600 hover:text-lime-300">React</button>


        </div>
        </div>
        </div>
        </>
    )
}

export default expertise;