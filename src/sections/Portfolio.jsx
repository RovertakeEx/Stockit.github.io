import React from 'react'
import Gall from "../assets/Gallery.jpg";
import UA from "../assets/access-control.png";
import booking from "../assets/booking.png";
import property from "../assets/property.png";
import maintain from "../assets/Maintainance.png";


const Portfolio = () => {
  return (
    <section id="portfolio" className="container mx-auto pt-30">
     {/*Portfollio into*/}
      <div className="text-center mb-8">
        <h6 className="text-gray-600">Gallery</h6>
        <h2 className="font-bold text-3xl pb-2">Explore our portfolio</h2>
        <p className="mx-auto lg:max-w-4xl md:max-w-2xl  sm:max-w-xl text-gray-500">
          Discover our diverse portfolio of properties, showcasing the range and
          quality of our management services. Explore our projects and see how
          we deliver exceptional results for every property.
        </p>
      </div>

      {/*Portfollio options*/}
      <section className="grid grid-cols-1 items-center text-center pb-5 lg:grid-cols-3">
        {/*Portfollio option left side */}

        <section className=" mx-auto  grid grid-cols-1 gap-4 md:px-8 md:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:gap-9 ">
          <div
            className="border-blue-100 border rounded-2xl py-3 px-2 hover:shadow-blue-200 shadow-lg hover:border-blue-400 hover:scale-110 
          transition-transform  transition-border duration-500 ease-in-out mb-8  h-full"
          >
            <img src={UA} className="w-15 pb-2 mx-auto mx-w-xl"></img>
            <h1 className="text-2xl">User Access & Authentication</h1>
            <p className=" text-gray-600 pt-2 pb-8 px-3">
              Seamlessly log in, register, or recover your password with a
              secure and user-friendly interface. Effortless authentication
              ensures quick access to manage properties, bookings, and more.
            </p>
          </div>

          <div
            className="border-blue-100 border rounded-2xl py-3 px-2  hover:shadow-blue-200 shadow-lg hover:border-blue-400 hover:scale-110 
          transition-transform  transition-border duration-500 ease-in-out overflow-hidden h-full "
          >
            <img
              src={property}
              className="mx-auto mx-w-xl mb-4 h-16 w-16 "
            ></img>
            <h1 className="text-2xl">Property Listings & Details</h1>
            <p className="text-gray-600 pt-2 pb-8">
              Find the perfect property with advanced search filters and
              detailed property pages. Each listing includes high-quality
              images, key features, and availability status for informed
              decision-making.
            </p>
          </div>
        </section>

        {/*Portfollio image section */}
        <section>
          <div className="">
            <img src={Gall} className='lg:px-0 md:px-8 '></img>
          </div>
        </section>

        {/*Portfollio option right side */}
        <section className="mx-auto grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-1 md:gap-5 lg:gap-9  gap-4 ">
          <div
            className="border-blue-100 border rounded-2xl py-3 px-2   hover:shadow-blue-200 shadow-lg hover:border-blue-500 hover:scale-110 
          transition-transform  transition-border duration-500 ease-in-out mb-8 h-full "
          >
            <img src={booking} className="mx-auto max-w-xl w-15 pb-2"></img>
            <h1 className="text-2xl">Bookings & Reservations</h1>
            <p className="pb-8 text-gray-600 pt-2 px-3">
              Manage property bookings with ease. View upcoming reservations,
              check availability, and create new bookings—all in an intuitive
              and organized system designed for efficiency.
            </p>
          </div>

          <div
            className="border-blue-100 border rounded-2xl py-3 px-2  hover:shadow-blue-200 shadow-lg hover:border-blue-500 hover:scale-110 
          transition-transform  transition-border duration-500 ease-in-out h-full"
          >
            <img
              src={maintain}
              alt="Maintainance"
              className="mx-auto mx-w-xl w-15 pb-2 pt-2 "
            ></img>
            <h1 className="text-2xl">Maintenance & Inspections</h1>
            <p className="text-gray-600 pt-2 pb-8 px-3">
              Stay on top of property maintenance with detailed defect tracking
              and inspection reports. Keep properties in top condition by
              logging issues, scheduling inspections, and ensuring timely
              resolutions.
            </p>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Portfolio