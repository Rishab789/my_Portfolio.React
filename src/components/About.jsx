import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className=" pb-56 md:pb-0 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8"> 
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-20 ">
             I am in my initial growth, seeking for any opportunities to start with. I have experience in HTML, CSS and JavaScript, and I'm also familiar with popular framework such as React.js. I have a passion for crafting beautiful and intuitive user interfaces and strive to create delightful experience for my users. I pay close attention to details when creating my applications.
            </p>
            <br/>

            <p className="text-xl ">
               I have some hands on experience on servicenow modules, mainly in ITSM module. I have worked with Agile methodology in the servicenow and created Business Rules, Client Scripts, Catalog Items, Script Includes, Flow Designing, ACLs and Rest API Integration.
            </p>
        </div>



    </div>
  )
}

export default About