import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Chrome from '../components/Chrome'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <Chrome header={<Header />}>
    <Helmet
      title="Lagring og LOR"
      meta={[
        { name: 'description', content: 'Prosjekt ved UiB for innføring av MAM og LOR.' },
        { name: 'keywords', content: 'MAM, LOR' },
      ]}
    />
    {children()}
  </Chrome>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper