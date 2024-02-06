import React from 'react'
import Layout from '../components/Layout/Layout' 
import Skills from '../components/Resume/Skills'
import My_Resume from '../components/Resume/My_Resume'

function Resume() {
  return (
    <Layout>
      <div className="  main scroll_none">
            <Skills />
            <My_Resume />
      </div>
    </Layout>
  )
}

export default Resume