import React from 'react'
import aboutus from '../assets/Aboutus.png'

const About = () => {
  return (
   <section id="about" className='container mx-auto pt-30'>
          {/*Section one*/} 
        <div className='text-center mb-10 px-06 mx-auto max-w-3xl '>
          <h2 className='text-gray-500'>About us</h2>
          <h2 className='text-3xl font-bold pb-2'>Who are we ?</h2>
          <p className='text-gray-500'>At Kdot, we are dedicated to providing innovative property management solutions. 
            Our mission is to simplify the process,helping property owners and managers enhance efficiency and maximize value.</p>
       </div>

       {/*Section two*/} 
      <section className='container mx-auto  flex flex-col md:flex-row'>

        {/*Paragraph Coloum*/}
        <div className='w-full mid:w-1/2 space-y-8  lg:px-8 py-19'>
        <div>
          <h1 className='font-bold text-2xl '>Exploring Stocklit</h1>
          <p  className='max-auto max-w-2xl text-justify text-gray-500'>
             We are a start-up company, focused on making Property Management easier 
             for any size landlords and estate agents. Having worked with UK Government for over 9 years, we hold valuable insights into how the social
             housing process works as well as every minute detail around managing rented, leased, and owned properties.Our software is a direct product of our experience in the property market.
          </p>
        </div>
        <div>
          <h1 className='font-bold text-2xl '>Why We’re Unique</h1>
           <p className='max-auto max-w-2xl text-justify text-gray-500'>
               Unlike other big platforms, we work closely with you to boost your business. Be it just hassle-free management 
               or a full-blown property management software we make sure we tweak our product to your needs
             </p>
        </div>   
         </div>

        {/*Image colomun*/}
        <div className='w-full mt-16 items-center  flex md:mt-0 pl-0 md:pl-16'>
             <div className="relative">
                     <img src={aboutus} alt="about us image" className="rounded-lg relative z-10 
                     hover:scale-[1.02] transition-transform duration-360  " ></img>
              </div>
        </div>
      </section>
    </section>
    
  )
}

export default About