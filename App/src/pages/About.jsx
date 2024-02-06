import React from 'react' 
import AboutInfo from '../components/About/AboutInfo'
import My_services from '../components/About/My_services'
import Reviews from '../components/About/Reviews'
import Layout from '../components/Layout/Layout'

function About() {
  return (
    <Layout>
      <div className="main scroll_none ">
        <AboutInfo />
        <My_services />
        <Reviews />
      </div>
    </Layout>
  )
}

export default About