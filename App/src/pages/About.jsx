import React from 'react' 
import AboutInfo from '../components/About/AboutInfo'
import My_services from '../components/About/My_services'
import Reviews from '../components/About/Reviews'
import Layout from '../components/Layout/Layout'

function About() {
  return (
    <Layout> 
        <AboutInfo />
        <My_services />
        <Reviews /> 
    </Layout>
  )
}

export default About