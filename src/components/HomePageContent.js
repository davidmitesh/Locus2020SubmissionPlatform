import PropTypes from 'prop-types'
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Locus-2020 Project Submission Platform'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Got a project?'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Link to='/addproject'>
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
    </Link>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
export default HomepageHeading
