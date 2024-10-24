import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center text-xl text-secondary px-2 font-sans min-h-screen pt-32">
      
      {/* Centered About Me Heading */}
      <h2 className="font-black text-4xl text-center mb-8 font-serif text-primary">About Me</h2>
      
      {/* Two-column layout for description and image with pl-2 padding */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-11/12 lg:space-x-4">
        
        {/* Left column: Description */}
        <div className="w-full lg:w-1/2 text-center lg:text-justify mb-8 lg:mb-0">
        <p className="my-4 text-center">Hi, I'm Warda Waseem, a Future Cloud Applied Gen-AI Engineer.</p>
          <p className="my-4">
            I'm currently pursuing a Master of Engineering (M.E.) in Biomedical at N.E.D. University of Engineering & Technology. 
            I completed my Bachelor of Engineering (B.E.) in Biomedical in 2023 with a CGPA of 3.462.
          </p>
          <p className="my-4">
            I have interned at Abbasi Shaheed Hospital and Dr. Ziauddin Hospital, where I gained hands-on experience with lab and hospital equipment, 
            as well as programming and problem-solving skills.
          </p>
          <p className="my-4">
            I'm passionate about learning new technologies like Next.js and TypeScript. I enjoy playing badminton, watching movies, 
            and improving my skills in full-stack development.
          </p>
        </div>

        {/* Right column: Image */}
        <div className="lg:w-1/2 w-full flex justify-center items-stretch">
  <img 
    className="border-2 border-secondary lg:w-1/2 w-full object-fit h-80" 
    src='./images/profile1.jpg' 
    alt="Warda Waseem" 
  />
</div>

      </div>
    </section>
  );
}

export default About;
