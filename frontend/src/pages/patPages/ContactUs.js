import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ContactUs = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const history = useHistory();
  const home = () => {
    history.push("/");
  };
  const Features = () => {
    history.push("/Features");
  };
  const Abt = () => {
    history.push("/AboutUs");
  };
  const contact = () => {
    history.push("/Contact");
  };

  const handleSubmit = async () => {
    try {
      if (!name || !email || !msg) {
        toast({
          title: "Please fill all the details",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
      
     

      const sendRequest = await axios.post("/api/sendMail/", { name, email, msg },);
      if (sendRequest) {
        alert("Mail has been sent");
      }
    } catch (error) {
      alert("error:", error);
    }
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-4xl hover:cursor-pointer" onClick={home}>
              Medlinker
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={Features}>
              Features
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={Abt}>
              About Us
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={contact}>
              Contact Us
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Emergency</a>
          </nav>
        </div>
      </header>

      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?nature')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
        <div className="container relative px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 text-white">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach out to us for any inquiries or support.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-4 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-4 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-3 px-4 resize-none transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={handleSubmit}
                >
                  Send Mail
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center text-white">
                <a href="mailto:MedLinker@gmail.com" className="text-indigo-400 hover:underline">
                  MedLinker@gmail.com
                </a>
                <p className="leading-normal my-5">
                  Mahendra Singh
                  <br />
                  MNNIT Allahabad
                </p>
                <span className="inline-flex space-x-4">
                  <a className="text-gray-300 hover:text-indigo-400 transition duration-200" href="https://www.facebook.com/profile.php?id=100076181456548">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-gray-300 hover:text-indigo-400 transition duration-200" href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-gray-300 hover:text-indigo-400 transition duration-200" href="https://www.instagram.com/mahendra_singh2001/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="text-gray-300 hover:text-indigo-400 transition duration-200" href="https://github.com/0mahendra">
                    <i className="fab fa-github"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
