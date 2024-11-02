
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const AboutUs = () => {
  const history = useHistory();
  
  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <>
      {/* <Infonavbar/> */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" onClick={() => navigateTo('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-4xl hover:cursor-pointer">Medlinker</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Features</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={() => navigateTo('/AboutUs')}>About Us</a>
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
            <a className="mr-5 hover:text-gray-900">Emergency</a>
          </nav>
        </div>
      </header>

      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {/* Mahendra Singh Card */}
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden inline-flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img alt="content" className="rounded-full h-56 w-56 object-cover" src="https://res.cloudinary.com/dojpukez0/image/upload/v1710455242/mahendra_kohsti.jpg" />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Mahendra Singh (MERN  Developer)</h2>
              <p className="leading-relaxed text-base text-gray-700 mb-4">Hello, I'm Mahendra Singh, currently in my third year of B.Tech, pursuing Electrical Engineering from MNNIT Allahabad. I have a keen interest in backend development and am quite efficient in MongoDB, Express.js, and Node.js.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <a href="https://www.linkedin.com/in/mahendra-singh-995063249/">LinkedIn</a>
              </button>
            </div>

            {/* Anuj Kumar Card */}
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden inline-flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img alt="content" className="rounded-full h-56 w-56 object-cover" src="https://res.cloudinary.com/dojpukez0/image/upload/v1710492570/1710492345074_tn8ilb.jpg" />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Anuj Kumar</h2>
              <p className="leading-relaxed text-base text-gray-700 mb-4">Hello, I'm Anuj Kumar, currently in my third year of B.Tech, pursuing Electrical Engineering from MNNIT Allahabad. I'm a frontend developer who is passionate about website designing.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <a href="https://www.linkedin.com/in/mahendra-singh-995063249/">LinkedIn</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
