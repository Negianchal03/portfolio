import React, { useState } from 'react';
import TextChanger from '../TextChanger';

function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4 text-justify">
          I am a passionate Frontend Developer who loves building modern, responsive, and user-friendly web interfaces using React, JavaScript, and Tailwind CSS.<br /><br />
          I enjoy turning creative ideas into real-world projects, focusing on clean code, smooth UI interactions, and great user experience. I am always eager to learn new technologies and improve my skills.
        </p>

        
        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => setShowForm(true)}
        >
          Contact Me
        </button>

        
        {showForm && (
          <div className="mt-6 p-6 bg-[#1f2937] rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted! (Replace with actual submit logic.)');
                setShowForm(false);
              }}
            >
              
              <label className="block mb-4">
                Name:
                <input
                  type="text"
                  required
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-500 focus:border-blue-500 outline-none"
                  placeholder="Your Name"
                />
              </label>

              
              <label className="block mb-4">
                Email:
                <input
                  type="email"
                  required
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-500 focus:border-blue-500 outline-none"
                  placeholder="abc@gmail.com"
                />
              </label>

              
              <label className="block mb-4">
                Message:
                <textarea
                  required
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-500 focus:border-blue-500 outline-none"
                  rows="4"
                  placeholder="Write your message here..."
                />
              </label>

              
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-[#465697] px-5 py-2 rounded-lg text-white font-semibold hover:opacity-90 duration-300"
                >
                  Send
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
