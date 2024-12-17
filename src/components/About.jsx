import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            👋 Hello! I’m Arsal Ali Khan, a passionate Full Stack Developer currently pursuing the Software Development Program at the Southern Alberta Institute of Technology (SAIT). Since my early years, I’ve been captivated by how technology bridges gaps, solves complex problems, and brings innovative ideas to life. This curiosity sparked my journey into programming, where I discovered a true passion for crafting interactive, efficient, and user-friendly applications that make a tangible impact.

With expertise in both frontend and backend development, I have the ability to transform ideas into fully functional products, taking projects seamlessly from concept to completion. My approach combines precision, creativity, and a commitment to delivering clean, optimized solutions.
            </p>

            <br/>


            <p className="text-xl">Beyond coding, I thrive in collaborative environments, where teamwork and shared ideas drive innovation. Whether I’m brainstorming with peers, contributing to open-source projects, or solving complex challenges, I bring enthusiasm, adaptability, and a problem-solving mindset to every task.

As an aspiring full-stack developer, my mission is to build impactful applications that prioritize performance, scalability, and exceptional user experiences. I am continually exploring cutting-edge technologies to enhance my skill set and stay at the forefront of the ever-evolving tech landscape.




            </p>
        </div>
    </div>
  )
}

export default About;