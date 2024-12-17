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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam minus mollitia consequuntur magnam reiciendis ullam, quos aliquam quasi consectetur quis illum suscipit error, provident ducimus ad veritatis repudiandae, inventore laboriosam ut corrupti laudantium enim necessitatibus adipisci. Aliquid cum est laborum. Sed, unde culpa esse ullam soluta fugiat tempora! Minus!
            </p>

            <br/>


            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, pariatur nisi incidunt animi ex ipsam error exercitationem eligendi quisquam nihil laborum aut quas, hic sunt voluptate iure beatae vel saepe repellat! Quidem sit rerum facilis, harum voluptatibus aliquid fugiat maxime eum magnam eius exercitationem eaque atque esse! Magni, voluptatibus accusantium?

            </p>
        </div>
    </div>
  )
}

export default About;