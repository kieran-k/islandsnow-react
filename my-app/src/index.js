import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, GridColumn, Header, Icon, Image, Input, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-logo.png' size='medium' centered />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' columns={5} centered>
        <Menu borderless className="middlemenu">
              <Grid.Column centered>
                <Dropdown item text="MEN" icon="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>MEN</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid.Column>
              <Grid.Column>
                <Dropdown item text="WOMEN" icon="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>WOMEN</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </Grid.Column>
              <Grid.Column>
                <Dropdown item text="KIDS" icon="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>KIDS</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid.Column>
              <Grid.Column>
              <Dropdown item text="BRANDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>BRANDS</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              </Grid.Column>
          <GridColumn>
            <Dropdown item text="SALE" icon="none">
              <Dropdown.Menu>
                <Dropdown.Item>SALE</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </GridColumn>
        </Menu>
        </Grid>

    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src='http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-video-snapshot.png' fluid />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Header size="small">Navigation</Header>
              <List>
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Videos</List.Item>
                <List.Item as="a">Store Locations</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header size="small">Main Menu</Header>
              <List>
                <List.Item as="a">Men</List.Item>
                <List.Item as="a">Women</List.Item>
                <List.Item as="a">Kids</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header size="small">Connect</Header>
              <List>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item>
                  <Input label='JOIN' placeholder='Enter Email Address' />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
