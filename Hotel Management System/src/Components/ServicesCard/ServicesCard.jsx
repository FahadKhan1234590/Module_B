import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServicesCard = (props) => {
  let navigate = useNavigate()
  return (
    <div  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img src={props.img} className='mb-3' alt="" />
 <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Service : {props.service}</h5>
 <p class="font-normal text-xl text-gray-700 dark:text-gray-400">Pricing : {props.pricing}</p>
 <button onClick={()=>navigate('/dashboard/servicesScreen/RequestService')} type="button" class="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Request
</button>
 
 </div>
 
  )
}

export default ServicesCard
