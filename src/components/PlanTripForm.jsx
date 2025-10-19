import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 


const validationSchema = Yup.object({
  location: Yup.string().required('Required')
    .min(3, 'Must be at least 3 characters'),
  
  startDate: Yup.string().required('Required')
    .min(3, 'Must be at least 3 characters'),
  
  endDate: Yup.string().required('Required')
    .min(3, 'Must be at least 3 characters'),

  tripType: Yup.string().required('Required'),
});


function PlanTripForm() {
  const initialValues = {
    location: '',
    startDate: '',
    endDate: '',
    tripType: '',
  };

 
  const onSubmit = (values, { setSubmitting, resetForm }) => {
   
    console.log('Formik Form Data Submitted:', values);
    
   
    resetForm(); 
  };

  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Plan Your Perfect Trip</h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="bg-white dark:bg-dark shadow-sm rounded-xl p-8 space-y-6 border border-gray-200/50 dark:border-gray-700/50">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="location">LOCATION</label>
              <Field 
                id='location' 
                type="text" 
                name='location'
                placeholder="e.g., Paris, France" 
                className="w-full bg-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary block rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" 
              />
              <ErrorMessage 
                name="location" 
                component="div" 
                className='text-red-500 text-sm' 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="start-date">START DATE</label>
               <Field 
                  id='startDate' 
                  type="date" 
                  name='startDate'
                  className="w-full bg-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary block rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" 
                />
                <ErrorMessage 
                  name="startDate" 
                  component="div" 
                  className='text-red-500 text-sm' 
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="end-date">END DATE</label>
                 <Field 
                  id='endDate' 
                  type="date" 
                  name='endDate'
                  className="w-full bg-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary block rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" 
                />
                <ErrorMessage 
                  name="endDate" 
                  component="div" 
                  className='text-red-500 text-sm' 
                />
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">(MAX 5 DAYS)</p>
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">TRIP TYPE</label>
              <div className="flex items-center justify-center p-1 rounded-lg bg-light dark:bg-gray-800">
                <label className="relative w-1/2 flex items-center justify-center cursor-pointer">
                  <Field 
                    id='trip-type-vacation' 
                    type="radio" 
                    name='tripType'
                    value="vacation"
                    className="sr-only peer"
                  />
                  <span className="w-full text-center py-2 px-4 rounded-md text-gray-500 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-dark peer-checked:text-primary peer-checked:font-bold peer-checked:shadow-sm transition-all duration-200">Vacation</span>
                </label>
                <label className="relative w-1/2 flex items-center justify-center cursor-pointer">
                   <Field 
                    id='trip-type-business' 
                    type="radio" 
                    name='tripType'
                    value="business"
                    className="sr-only peer"
                  />
                  <span className="w-full text-center py-2 px-4 rounded-md text-gray-500 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-dark peer-checked:text-primary peer-checked:font-bold peer-checked:shadow-sm transition-all duration-200">Business</span>
                </label>
              </div>
              <ErrorMessage 
                name="tripType" 
                component="div" 
                className='text-red-500 text-sm' 
              />
            </div>
            <div>
              <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
                GET PACKING LIST
              </button>
            </div>
          </Form>
        </Formik>
      </div>
  </main>
  )
}

export default PlanTripForm;