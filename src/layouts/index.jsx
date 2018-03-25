import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sidebar from '../components/sidebar/Sidebar'
import '../styles/main.module.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="BrentBrinkley.com"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <div>
      <Sidebar />
      <div>{children()}</div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
