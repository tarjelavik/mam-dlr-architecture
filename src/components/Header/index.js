import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  h1 {
    font-size: 22px;
    a {
      color: #333;
      text-decoration: none;
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <h1>
      <Link
        to="/"
      >
        Lagring og LOR
      </Link>
    </h1>
  </HeaderContainer>
)

export default Header