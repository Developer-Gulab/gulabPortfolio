import React from "react";


const services = () => {

    return (
        <>
        
        <div className="main-container py-16">

            <h1 className="font-bold text-5xl underline text-center">My Services</h1>

            <div className="service-container flex mt-12 space-x-5 px-10">

                <div className="dabba1 space-y-4 shadow-lg rounded-r-xl bg-slate-300 p-5 text-center">

                    <i class="text-5xl hover:text-orange-600 cursor-pointer fa-solid fa-sitemap"></i>

                    <h1 className="text-2xl font-bold">Web Development</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ipsa quae esse minus, velit obcaecati! Aperiam doloremque vitae, architecto amet sunt provident cumque iure. Laborum possimus doloribus eum fugit quae.
                    </p>

                    <button className='text-white bg-orange-400 px-3 py-2 rounded-lg shadow text-1.5xl font-semibold hover:bg-orange-600 hover:text-lime-300'>Explore Now</button>

                </div>

                <div className="dabba2 space-y-4 shadow-lg rounded-r-xl bg-slate-300 p-5 text-center">

                <i class="text-5xl hover:text-orange-600 cursor-pointer fa-brands fa-react"></i>

                <h1 className="text-2xl font-bold">Frontend Development</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ipsa quae esse minus, velit obcaecati! Aperiam doloremque vitae, architecto amet sunt provident cumque iure. Laborum possimus doloribus eum fugit quae.
                    </p>

                    <button className='text-white bg-orange-400 px-3 py-2 rounded-lg shadow text-1.5xl font-semibold hover:bg-orange-600 hover:text-lime-300'>Explore Now</button>

                </div>

                <div className="dabba3 space-y-4 shadow-lg rounded-r-xl bg-slate-300 p-5 text-center">

                <i class="text-5xl hover:text-orange-600 cursor-pointer fa-brands fa-node"></i>

                <h1 className="text-2xl font-bold">Backend Development</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ipsa quae esse minus, velit obcaecati! Aperiam doloremque vitae, architecto amet sunt provident cumque iure. Laborum possimus doloribus eum fugit quae.
                    </p>

                    <button className='text-white bg-orange-400 px-3 py-2 rounded-lg shadow text-1.5xl font-semibold hover:bg-orange-600 hover:text-lime-300'>Explore Now</button>

                </div>

            </div>




        </div>
        
        </>
    )
}
export default services;