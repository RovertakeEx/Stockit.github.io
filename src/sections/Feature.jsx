import React from "react";

const features = [
  {
    icon: "🔍",
    title: "Identify your needs.",
    description: "We understand your business model, inventory flow, and pain points — then tailor a solution",
    bgColor: "rgb(224 247 250 / 40%)",
  },
  {
    icon: "⚙️",
    title: "Plan the details",
    description: "From user roles to workflow automation, we help set up your system the right way.",
    bgColor: "rgb(224 247 250 / 60%)",
  },
  {
    icon: "🚀",
    title: "Fast Implementation",
    description: "Launch quickly with our guided onboarding and responsive support team.",
    bgColor: "rgb(224 247 250 / 80%)",
  },

  {
    icon: "🛡️",
    title: "Security & Compliance",
    description: "Your data is safe with industry-standard encryption and privacy practices.",
    bgColor: "rgb(224 247 250 / 100%)",
  },
];

const Feature = () => {
  return (
    <section id="feature" className="container mx-auto pt-30">
      {/*Heading text*/}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold  mb-4">
          How can we help your business?
        </h2>
        <p className="text-gray-600">
          When you resell bensik you build trust and increase
        </p>
      </div>

      {/* features section*/}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center p-6"
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{ backgroundColor: feature.bgColor }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-1xl font-bold mb-3 text-gray-700">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/*Button section*/}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative ">
          Become a Partner
          <div className="absolute-z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></div>
        </button>
      </div>
    </section>
  );
};

export default Feature;
