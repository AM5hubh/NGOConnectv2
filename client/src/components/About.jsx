import React from "react";
import { ArrowRight, Heart, Globe, Users,Calendar } from "lucide-react";
import Link from "next/link";

function About() {
  return (
    <div className=" mx-auto py-2" id = "about">
      <h1 className="text-4xl font-bold text-center mb-8">About NGOConnect</h1>
       <section className="py-16 bg-gray-200 rounded-lg mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <p className="text-gray-600">Discover and participate in meaningful events organized by NGOs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Make Donations</h3>
              <p className="text-gray-600">Support causes you care about with secure online donations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="text-gray-600">Find volunteering opportunities that match your skills and interests.</p>
            </div>
          </div>
        </div>
      </section>

      <div className=" mx-auto">
        <p className="text-lg mb-6">
          NGOConnect is a revolutionary platform designed to bridge the gap
          between non-governmental organizations (NGOs) and donors. Our mission
          is to create a seamless connection that empowers both parties to make
          a lasting impact on the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-black">
          <div className="bg-red-500 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Globe className="mr-2" /> Our Vision
            </h2>
            <p>
              A world where every NGO has the resources they need to create
              positive change, and every donor can easily support causes they're
              passionate about.
            </p>
          </div>

          <div className="bg-green-500 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="mr-2" /> Our Mission
            </h2>
            <p>
              To create a transparent, efficient, and user-friendly platform
              that connects NGOs with donors, facilitating meaningful
              partnerships and maximizing social impact.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">How We Bridge the Gap</h2>
        <ul className="list-none space-y-4 mb-8">
          <li className="flex items-start">
            <ArrowRight className="mr-2 mt-1 text-blue-500" />
            <span>
              Providing a centralized platform for NGOs to showcase their
              projects and impact
            </span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="mr-2 mt-1 text-blue-500" />
            <span>
              Offering tools for donors to discover and support causes aligned
              with their values
            </span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="mr-2 mt-1 text-blue-500" />
            <span>
              Ensuring transparency in fund allocation and project progress
            </span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="mr-2 mt-1 text-blue-500" />
            <span>Facilitating communication between NGOs and donors</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
