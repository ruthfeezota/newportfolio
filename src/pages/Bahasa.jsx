import React from 'react'
import LongList from '../assets/BahasaMain.png'
import Navbar from "../components/Navbar"


function Bahasa() {
  return (
        <section>
        <Navbar/>
            <div className="max-w-screen-1xl mx-auto px-4 py-24 gap-12 md:px-8 bg-tertiary questrial-regular">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold mx-auto md:text-4xl uppercase">
                    Bahasa - Realtime Translation Website
                    </h1>

                    <p className="max-w-2xl mx-auto">
                    This project involves building a user-friendly website to promote a mobile app for Bahasa Indonesia translation. Developed with React and Tailwind CSS, the website showcases the app, provides language learning resources, and encourages downloads.
                    </p>

                </div>
                <div className="mt-10 p-14">
                    <img src={LongList} className="w-full shadow-lg border" alt="" />
                </div>
            </div>
        </section>

  )
}

export default Bahasa