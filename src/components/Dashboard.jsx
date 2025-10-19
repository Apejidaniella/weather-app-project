import { Luggage } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
   <main className="flex-1 px-4 sm:px-6 lg:px-40 py-10">
        <div className="mx-auto max-w-4xl space-y-8">
            <div className="p-8 bg-stone-50 dark:bg-dark/50 rounded-xl border border-stone-200 dark:border-stone-800">
                <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Welcome back, Sarah</h2>
                <p className="mt-2 text-stone-600 dark:text-stone-400">
                    PackSmart is your personal AI packing assistant, designed to help you plan your trips efficiently. Get started by creating a new trip or view your upcoming travel plans.
                </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white px-2">Today's Weather</h3>
                <div className="p-6 bg-stone-50 dark:bg-dark/50 rounded-xl border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-stone-900 dark:text-white">Sunny with a high of 25°C</p>
                            <p className="text-sm text-stone-500 dark:text-stone-400">London, UK</p>
                        </div>
                        <img className="w-40 h-24 bg-center bg-no-repeat bg-cover rounded-lg" src='https://lh3.googleusercontent.com/aida-public/AB6AXuDoBAIPae-p8WbYT3CNCPafKFYIaMzDG7BhIaWcaaAFXaUGy-NslyVej209J61_TZ-AUenOlSFRbYbAS_5DnMs-lPm_ydmcmml2v7TloHi0FswJzKYyZNiHDUd3tkLL8J5qTL1vHWFir7sNFCoAxdfVkAc2Z8JUk7QHu43xqJ4-FkyFiwAG-QB_gf3nxBOhR54QK_Cnh0KHSEENBBEnCpI9ONJQ_mncxO-VmcEs7Vw03eb90JAo4-NMhujSPr911k1hI4tNXHXbp_HG' />
                    </div>
                </div>
            </div>
            <div>
                <Link to="/new-trip" className="inline-flex items-center justify-center gap-4 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105">
                  <Luggage />
                  Plan a Trip
                </Link>
            </div>
        </div>
    </main>
  )
}

export default Dashboard;