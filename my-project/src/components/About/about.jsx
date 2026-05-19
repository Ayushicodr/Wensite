import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-800 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                            className="w-100"
                          src="src\assets\me.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-black font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-800">
                          Hi, I’m Ayushi — a passionate UX/UI designer and frontend enthusiast who loves creating digital experiences that are simple, meaningful, and user-focused. I enjoy transforming ideas into visually appealing and functional interfaces that not only look good but also solve real problems for users.
                        </p>

                      <p className="mt-4 text-gray-800">
                          Alongside design, I’m also exploring frontend technologies like React, Tailwind CSS, JavaScript, and Vite to better understand how products are built and how design decisions translate into real interactions. This helps me bridge the gap between design and development while creating responsive and interactive user interfaces.
                      </p>
                      <p className="mt-4 text-gray-800">
                         I believe great design is not just about aesthetics — it’s about understanding users, simplifying complexity, and creating experiences that feel effortless. I’m constantly learning, experimenting, and improving my skills through hands-on projects, case studies, and continuous exploration of modern design trends and technologies.
                      </p>
                        <p className="mt-4 text-gray-800">
                      My goal is to grow as a product-focused designer who can combine creativity, UX thinking, and frontend skills to build impactful digital products that people genuinely enjoy using.
  
                        </p>
                  </div>
              </div>
          </div>
      </div>
  );
}