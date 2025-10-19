import React from 'react'
import { Link } from 'react-router-dom';


function PastTrip() {
  return (
  <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Past Trips</h1>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase text-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-4 font-semibold" scope="col">Destination</th>
              <th className="px-6 py-4 font-semibold" scope="col">Dates</th>
              <th className="px-6 py-4 font-semibold" scope="col">Trip Type</th>
              <th className="px-6 py-4 font-semibold text-right" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light dark:bg-dark border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Paris, France</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">May 15 - May 20, 2024</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Business</td>
              <td className="px-6 py-4 text-right">
                <Link className="font-medium text-primary hover:underline" to="/packing-plans">View Details</Link>
              </td>
            </tr>
            <tr className="bg-light dark:bg-dark border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Tokyo, Japan</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">April 10 - April 15, 2024</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Leisure</td>
              <td className="px-6 py-4 text-right">
                 <Link className="font-medium text-primary hover:underline" to="/packing-plans">View Details</Link>
              </td>
            </tr>
            <tr className="bg-light dark:bg-dark border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">New York, USA</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">March 5 - March 10, 2024</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Business</td>
              <td className="px-6 py-4 text-right">
                 <Link className="font-medium text-primary hover:underline" to="/packing-plans">View Details</Link>
              </td>
            </tr>
            <tr className="bg-light dark:bg-dark border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">London, UK</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">February 1 - February 5, 2024</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Leisure</td>
              <td className="px-6 py-4 text-right">
                 <Link className="font-medium text-primary hover:underline" to="/packing-plans">View Details</Link>
              </td>
            </tr>
            <tr className="bg-light dark:bg-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Rome, Italy</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">January 15 - January 20, 2024</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Business</td>
              <td className="px-6 py-4 text-right">
                 <Link className="font-medium text-primary hover:underline" to="/packing-plans">View Details</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</main>
  )
}

export default PastTrip;