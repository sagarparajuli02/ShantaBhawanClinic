import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container, MenuItem } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import styleMedia from "./NavBar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Menu, MenuIcon } from "@material-ui/core";
import { Navbar, Nav } from "react-bootstrap";

function NavbarMenu() {
  return (
    <div>
      <div className={styleMedia.navBarContainer}>
        <Grid className={styleMedia.mainGrid} container spacing={3}>
          <Grid item className={styleMedia.gridItem} item xs={12} sm={4}>
            <h1>
              <span className={styleMedia.h1}>Shanta Bhawan</span>{" "}
              <span className={styleMedia.h2}> Clinic</span>
            </h1>
          </Grid>

          <Grid item className={styleMedia.mainGrid}>
            <LocationOnIcon className={styleMedia.navBarIcon} color="primary" />
          </Grid>

          <Grid item xs={12} sm={2} className={styleMedia.mainGrid}>
            <p>Address: ArabBank, Jorpati </p>
            <p> Kathmandu, Nepal</p>
          </Grid>

          <Grid item xs={12} sm={2} className={styleMedia.mainGrid}>
            <EmailIcon className={styleMedia.navBarIcon} color="primary" />
            <p> shantabhawanclinic@email.com </p>
          </Grid>

          <Grid xs={12} sm={2} item className={styleMedia.mainGrid}>
            <PhoneInTalkIcon
              className={styleMedia.navBarIcon}
              color="primary"
            />
            <p>Phone: +977 01402156</p>
          </Grid>
        </Grid>
      </div>
      <Navbar className={styleMedia.NavBarMain} variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styleMedia.NavBarMain}>
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/Services">SERVICES</Nav.Link>
              <Nav.Link href="#">DOCTORS</Nav.Link>
              <Nav.Link href="#">ABOUT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
