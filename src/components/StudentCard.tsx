
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import { StaticImageData } from 'next/image'

import { FaUserGraduate, FaCalendarAlt, FaIdBadge } from 'react-icons/fa';

interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
  imageUrl: StaticImageData; // The path to the student's image
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, studentClass, imageUrl }) => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 shadow-xl rounded-xl overflow-hidden border-4 border-transparent transition-all duration-500 ease-in-out hover:border-yellow-500 hover:scale-105 hover:rotate-[2deg] mt-8 perspective-1000">
      <div className="md:flex items-center">
        {/* Left side content */}
        <div className="md:w-2/3 p-6 text-white">
          <h2 className="font-extrabold text-3xl mb-3">{name}</h2>

          <div className="flex items-center mb-2">
            <FaCalendarAlt className="mr-2" />
            <p className="text-lg"><strong>Age:</strong> {age}</p>
          </div>

          <div className="flex items-center mb-2">
            <FaIdBadge className="mr-2" />
            <p className="text-lg"><strong>Roll Number:</strong> {rollNumber}</p>
          </div>

          <div className="flex items-center mb-2">
            <FaUserGraduate className="mr-2" />
            <p className="text-lg"><strong>Class:</strong> {studentClass}</p>
          </div>
        </div>

        {/* Right side image */}
        <div className="md:w-1/3 bg-gradient-to-r from-green-300 to-purple-400 flex justify-center items-center">
          <Image
            src={imageUrl} // Use the Next.js Image component
            alt={`${name}'s profile`}
            className="rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-300 hover:scale-110"
            width={100} // Add appropriate width
            height={100} // Add appropriate height
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

