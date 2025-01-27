import React from 'react'
import { Header } from '../components/Header'
import { Speciality } from '../components/Speciality'
import { TopDoctors } from '../components/TopDoctors'
import { Banner } from '../components/Banner'
export const Home = () => {
  return (
    <div>
        <Header/>
        <Speciality/>
        <TopDoctors/>
        <Banner/>
    </div>
  )
}
