// import React from "react";
import { motion, scale, AnimatePresence } from "framer-motion";
// import { div } from "framer-motion/client";
import { useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiX, FiMenu } from "react-icons/fi";

const Header = () => {
  // Togglle Menu Di open atau tidak
  const [isBuka, setisBuka] = useState(false);
  const toggleMenu = () => setisBuka(!isBuka);
  //  Form
  const [isformBuka, setisformBuka] = useState(false);
  // pengkondisian buat Tombol Oncliknya
  const kondisiformBuka = () => setisformBuka(true);
  const kondisiformTutup = () => setisformBuka(false);

  return (
    <header className="absolute w-full z-50 transition-all transition-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3 ">
            Y
          </div>
          <span className="text-xl font-bold  bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Yosua Kurniawan
          </span>
        </motion.div>

        {/* DesktopNvigation */}

        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Project", "Expirience", "ContactUs"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-600 font-medium transition-colors duration-300 group "
                href="#"
              >
                {item}
                <span className="absolute bottom-0  left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* Sosial Media */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 
            dark:hover:text-violet-400 transition-colors duration-300 "
            href=""
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 
            dark:hover:text-violet-400 transition-colors duration-300 "
            href=""
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 
            dark:hover:text-violet-400 transition-colors duration-300 "
            href=""
          >
            <FiInstagram className="w-5 h-5" />
          </motion.a>

          <motion.button
            onClick={kondisiformBuka}
            initial={{ opacity: 0, x: 50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="ml-3 px-3 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 
        text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Responsif Di HP */}
        {/* Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.8 }}
            animate={{
              rotate: isBuka ? 90 : 0,
            }}
            onClick={toggleMenu}
            className="text-gray-400"
          >
            {isBuka ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isBuka ? 1 : 0, height: isBuka ? "auto" : 0 }}
        transition={{
          duration: 0.5,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 
      shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Project", "Expirience", "ContactUs"].map(
            (item, index) => (
              <a
                onClick={toggleMenu}
                className="text-gray-300 font-medium py-2"
                key={item}
                href="#"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Sosial Media  */}
        <div className="pt-4 border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiInstagram className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              kondisiformBuka();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r 
          from-violet-600 to-violet-400 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>
      {/* Contact  form  */}
      <AnimatePresence>
        {isformBuka && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0, y: -200, x: 500 }}
            transition={{ duration: 0.3 }}
            className=" fixed inset-0 bg-black/50 
        background-blur-sm z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white max-w-md dark:bg-gray-800  rounded-xl shadow-xl w-full max-w-md p-6 ">
              <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold ">Contact Me</h1>
                <button>
                  <FiX
                    onClick={kondisiformTutup}
                    className="w-6 h-6 text-gray-300 font-extrabold"
                  />
                </button>
              </div>
              {/* Input User */}
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="Nama"
                    placeholder="Nama"
                    className=" w-full text  rounded-lg px-4 py-2 
                  border-gray-600 focus:ring-2 focus:ring-violet-600 
                focus:border-violet-600 bg-gray-700"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    placeholder="Email"
                    className=" w-full text  rounded-lg px-4 py-2 
                  border-gray-600 focus:ring-2 focus:ring-violet-600 
                focus:border-violet-600 bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    id="Pesan"
                    placeholder="Pesan"
                    className=" w-full text  rounded-lg px-4 py-2 
                  border-gray-600 focus:ring-2 focus:ring-violet-600 
                focus:border-violet-600 bg-gray-700"
                  />
                </div>
                <div className="justify-self-center">
                  <button className="transition hover:scale-110 hover:-translate-y-2  rounded-lg px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-300 hover:to-indigo-500 duration-300 delay-100 ">
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
