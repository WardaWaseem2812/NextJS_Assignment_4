import React from 'react';

const Education = () => {
  return (
    <section id="education" className="text-xl text-secondary my-14 font-sans"> 
      <h2 className="text-4xl font-black mb-4 text-center font-serif text-primary">Education</h2> 
      <div className="p-4">
        <h3 className="text-2xl font-bold pl-10">Master of Engineering (M.E.) - Biomedical</h3>
        <ul className="list-disc list-inside">
        <li className="pl-24">N.E.D. University of Engineering & Technology (2023 - In Progress)</li>
        </ul>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold pl-10">Bachelor of Engineering (B.E.) - Biomedical</h3>
        <ul className="list-disc list-inside ">
        <li className="pl-24">N.E.D. University of Engineering & Technology (2019 - 2023)</li>
        <li className="pl-24">CGPA: 3.462</li>
        </ ul>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold pl-10">Intermediate – Pre-Engineering</h3>
        <ul className="list-disc list-inside">
        <li className="pl-24">B.A.M.M. PECHS Govt Girls College (2019)</li>
        <li className="pl-24">Grade: A</li>
        </ul>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold pl-10">Matriculation – Science</h3>
        <ul className="list-disc list-inside">
        <li className="pl-24">Falconhouse Grammer School (2017)</li>
        <li className="pl-24">Grade: A+</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
