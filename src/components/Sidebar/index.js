import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SearchBox from './SearchBox'

const SidebarContainer = styled.div`
  width:  250px;

  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }

  ul {
    margin: 0 0 16px 0;
  }
`

const Sidebar = () => (
  <SidebarContainer>
    {process.env.GATSBY_DOCSEARCH_API_KEY && process.env.GATSBY_DOCSEARCH_INDEX && (
      <SearchBox />
    )}
    <header>Bruksmønster</header>
    <ul>
      <li><Link to="/lecturer">Foreleser: MAM-DLR-LMS</Link></li>
      <li><Link to="/kaltura-whiteboard">Kaltura whiteboard sesjon</Link></li> 
    </ul>
    <header>Komponenter</header>
    <ul>
      <li><Link to="/kaltura">Kaltura</Link></li>
    </ul>
  </SidebarContainer>
)

export default Sidebar