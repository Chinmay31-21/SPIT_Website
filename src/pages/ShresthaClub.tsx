import React from "react";

const ShresthaClub: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e0e7ef] dark:from-[#181c24] dark:to-[#232946] py-10 px-4">
    <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#002642] to-[#150578] dark:from-[#0E0E52] dark:to-[#232946] rounded-2xl shadow-xl p-8">
      <h1 className="text-4xl font-bold text-[#00A6FB] dark:text-[#FFD700] mb-6">
        Shrestha Club
      </h1>
      <nav className="flex space-x-6 mb-8">
        <a href="#about" className="text-[#90F1EF] font-semibold hover:underline">About Us</a>
        <a href="#brochure" className="text-[#90F1EF] font-semibold hover:underline">Brochure</a>
        <a href="#contact" className="text-[#90F1EF] font-semibold hover:underline">Contact Us</a>
      </nav>
      <section id="about" className="mb-8">
        <h2 className="text-2xl font-semibold text-[#85C7DE] dark:text-[#FFD700] mb-2">About Us</h2>
        <p className="text-[#CFE8EF] dark:text-gray-200 mb-2">
          Founded in 2011 by Mr. Sharad Oza, BE Computers from SPIT ‘15 and later worked as a Software Developer at JP Morgan Chase.
        </p>
        <p className="text-[#CFE8EF] dark:text-gray-200">
          Our club consists of many successful individuals from IIT’s/NIT’s currently working in giant multinational companies.
        </p>
      </section>
      <section id="brochure" className="mb-8">
        <h2 className="text-2xl font-semibold text-[#85C7DE] dark:text-[#FFD700] mb-2">Brochure</h2>
        <a
          href="/files/Shrestha_Club_Brochure_SPIT.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#CFE8EF] font-bold underline hover:text-[#FFD700] transition-colors"
        >
          Shrestha Club Brochure_SPIT
        </a>
      </section>
      <section id="contact">
        <h2 className="text-2xl font-semibold text-[#85C7DE] dark:text-[#FFD700] mb-2">Contact Us</h2>
        <p className="text-[#CFE8EF] dark:text-gray-200 mb-2">For any enquiries:</p>
        <p className="text-[#CFE8EF] dark:text-gray-200">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:shresthaclub.spc@gmail.com"
            className="text-[#CFE8EF] underline hover:text-[#FFD700] transition-colors"
          >
            shresthaclub.spc@gmail.com
          </a>
        </p>
        <p className="text-[#CFE8EF] dark:text-gray-200 mt-2">
          <span className="font-semibold">Mobile:</span>{" "}
          <span className="font-bold">7045046628</span>
        </p>
      </section>
    </div>
  </div>
);

export default ShresthaClub;