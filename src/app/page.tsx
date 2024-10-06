import StudentCard from '@/components/StudentCard';
import Image from 'next/image';
import mypic from "../image/myPic.jpg"
import has from "../image/has.jpg"
import NAB from "../image/nab.jpg"



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-10 flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-extrabold text-white mb-12 drop-shadow-lg">Student ID Cards</h1>

      {/* Student 1 */}
      <StudentCard 
        name="Shehroz Hanif" 
        age={25} 
        rollNumber="S12345" 
        studentClass="GIAIC 2nd Quarter" 
        imageUrl={mypic}  // Add path to image
      />

      {/* Student 2 */}
      <StudentCard 
        name="Hasnain Ali" 
        age={18} 
        rollNumber="S12346" 
        studentClass="GIAIC 2nd Quarter" 
        imageUrl={has}  // Add path to image
      />

      {/* Student 3 */}
      <StudentCard 
        name="Nabeel Javed" 
        age={18} 
        rollNumber="S12347" 
        studentClass="GIAIC 2nd Quarter" 
        imageUrl={NAB}  // Add path to image
      />
    </div>
  );
}


