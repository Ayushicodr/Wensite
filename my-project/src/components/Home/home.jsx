import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl py-20 bg-black" >
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-7xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-3 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hi there! I'm
                            <span className="hidden sm:block text-7xl">Ayushi Verma</span>
                        </h2>

                         <p className="mt-6 text-white align-left text-lg sm:text-xl">
                        “I create beautiful, function, and user-centered digital experiences. With 2+ years of experiences in web Development, 
                        I bring ideas to life through clean code and thoughtful design.”
                        </p>

                        <div className='flex flex-row gap-4 align-right justify-end mt-6'>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            &nbsp; View my work
                        </Link>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-black outline rounded-lg hover:opacity-75"
                            to="/"
                        >
                            &nbsp; Contact me
                        </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-6 text-gray-800'>
                    <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                        <h1 className="text-3xl sm:text-3xl text-gray-900 font-extrabold tracking-tight">
                            UI/UX Design 
                        </h1>
                        <p className="text-normal text-lg text-left sm:text-lg font-medium text-gray-800 mt-2">
                            Creating intuitive, user-centered, and visually engaging digital experiences using modern design principles.
                        </p>

                            {/* <div className="flex items-center mt-8 text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div> */}
                    </div>

                    <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                        <h1 className="text-3xl sm:text-3xl text-gray-900 font-extrabold tracking-tight">
                            Frontend Development
                        </h1>
                        <p className="text-normal text-lg text-left sm:text-lg font-medium text-gray-800 mt-2">
                            Building responsive and interactive web applications using React, JavaScript, Tailwind CSS, and modern web technologies.
                        </p>

                            {/* <div className="flex items-center mt-8 text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div> */}
                    </div>
                    <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                        <h1 className="text-3xl sm:text-3xl text-gray-900 font-extrabold tracking-tight">
                           Problem Solving & Learning 
                        </h1>
                        <p className="text-normal text-lg text-left sm:text-lg font-medium text-gray-800 mt-2">
                            Passionate about exploring new technologies, solving real-world problems, and continuously learning fields like Machine Learning and product design.
                        </p>

                            {/* <div className="flex items-center mt-8 text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div> */}
                    </div>
                            
        
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-80 " src="src/assets/cool3.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center">
                <img className="sm:w-96 w-48 h-150" src="src/assets/cool1.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-white text-2xl sm:text-5xl font-bold">My Hobbies</h1>
            <p className="mt-6 text-white text-justify text-lg sm:text-lg px-40 ">
            I enjoy spending my time exploring activities that help me grow both creatively and personally. 
            Playing badminton keeps me active, focused, and teaches me the importance of discipline and teamwork. 
            Traveling is something I deeply enjoy because it allows me to experience new cultures, meet different people, and gain fresh perspectives from the world around me.
             I also love vlogging and journaling my experiences, as they help me capture memories, express my thoughts, and improve my storytelling and creativity.
         </p>
            </div>
    );
}