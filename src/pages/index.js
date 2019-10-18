import React, { Component } from 'react'
import mixpanel from 'mixpanel-browser' // import the mixpanel lib
import Link from 'gatsby-link'
import styled from 'styled-components'


const CardContainer = styled.div`
  display: flex;
  margin: 32px 0;
  justify-content: space-around;
`

const Card = styled(Link)`
  display: inline-block;
  border-radius: 4px;
  padding: 20px 40px;
  width: 250px;
  background-color: #aaa;
  color: #fff !important;
  text-align: center;
`

class IndexPage extends Component {

  // Init and send the Mixpanel event
  componentDidMount() {
    if (process.env.GATSBY_MIXPANEL_KEY) {
      mixpanel.init(process.env.GATSBY_MIXPANEL_KEY)
      mixpanel.track("docs.view:homepage")
    }
  }

  render() {
    return (
      <div>
        <h1>Lagring og LOR</h1>
        <p>Mens vi venter på Visio, bruker vi UML og gjør arkitektur arbeidet åpent. For mer informasjon om prosjektet, ligger det noe <a href="https://www.uib.no/l%C3%A6ringslab/122105/satsningsomr%C3%A5der-i-uib-l%C3%A6ringslab" alt="Presentasjon av prosjektene ved UiB Læringslaben">på Læringslabens sider</a>.</p>
        {/* <CardContainer>
          <Card to="/getting-started">
            Getting started
          </Card>
          <Card to="/about">
            About us
          </Card>
        </CardContainer> */}
      </div>
    )
  }
}

export default IndexPage
