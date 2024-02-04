import React from 'react' 
import Layout from '../components/Layout' 
import AboutInfo from '../components/About/AboutInfo'
import My_services from '../components/About/My_services'
function About() {
  return (
    <Layout> 
        <div className="main scroll_none ">
           <AboutInfo />
           <My_services /> 
        </div>
    </Layout>
  )
}

export default About