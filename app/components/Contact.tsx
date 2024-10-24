import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="text-xl text-center text-secondary my-14 pb-48 font-sans"> 
      <h2 className="text-4xl font-black mb-4 font-serif text-primary">Contact Me</h2> 
      <p>Please contact me at:</p>
      <div className="flex justify-center space-x-10 mt-12">
        <a href="mailto:wkwarda.08@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className="h-10 w-10 fill-secondary" />
        </a>
        <a href="https://github.com/WardaWaseem2812" target="_blank" rel="noreferrer">
          <FaGithub className="h-10 w-10 fill-secondary" />
        </a>
        <a href="https://www.linkedin.com/in/warda-waseem-5b1634233" target="_blank" rel="noreferrer">
          <FaLinkedin className="h-10 w-10 fill-secondary" />
        </a>
        <a href="https://discordapp.com/users/993223049488904232" target="_blank" rel="noreferrer">
          <FaDiscord className="h-10 w-10 fill-secondary" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
