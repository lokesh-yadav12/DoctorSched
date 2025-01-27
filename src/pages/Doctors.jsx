import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Doctors = () => {
  const { speciality } = useParams(); // Get the speciality from the URL
  const navigate = useNavigate(); // Initialize the navigate function
  const [filterDoc, setFilterDoc] = useState([]); // Store filtered doctors
  const { doctors } = useContext(AppContext); // Context to get the doctors list

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  // Filter doctors whenever the `speciality` or `doctors` change
  useEffect(() => {
    if (doctors && doctors.length > 0) {
      if (speciality) {
        const filtered = doctors.filter(
          (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
        );
        setFilterDoc(filtered);
      } else {
        setFilterDoc(doctors); // Show all doctors if no specialty is selected
      }
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctor's specialties.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Sidebar for Specialty Filter */}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          {specialties.map((specialty) => (
            <p
              key={specialty}
              onClick={() => {
                if (speciality === specialty.toLowerCase()) {
                  navigate("/doctors"); // Navigate back to all doctors
                } else {
                  navigate(`/doctors/${specialty.toLowerCase()}`); // Navigate to filtered doctors
                }
              }}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer hover:bg-primary ${
                speciality === specialty.toLowerCase()
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              {specialty}
            </p>
          ))}
        </div>

        {/* Doctors List */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
                  window.scrollTo(0, 0); // Scroll to the top on click
                }}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
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
          ) : (
            <p className="text-gray-600">
              No doctors found for the selected specialty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
