import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

export const RalatedDoctors = ({speciality,docId}) => {

    const {doctors} = useContext(AppContext)
    const[relDoc,setRelDoc]=useState([])
  const navigate = useNavigate()
    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsData=doctors.filter((doc)=>doc.speciality==speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    },[doctors,speciality,docId])
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors?.length === 0 ? (
          <p className="text-gray-600">No top doctors available at the moment.</p>
        ) : (
          relDoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
              key={index}
            >
              <img
                className="bg-blue-50"
                src={item.image}
                alt={`Doctor ${item.name}`}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-4 h-4 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  )
}
