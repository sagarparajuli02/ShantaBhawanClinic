import React from "react";
import homeStyle from "./Home.module.css";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { GiNurseMale } from "react-icons/gi";
import { FaAmbulance, FaCheckCircle } from "react-icons/Fa";
import { ImLab } from "react-icons/im";

import { Typography } from "@material-ui/core";
function HomePage() {
  return (
    <>
      <div className={homeStyle.homePageContainer}>
        <Container className={homeStyle.homePageContainer1}>
          <h1 className={homeStyle.head1}>We Care </h1>
          <h1 className={homeStyle.head2}>About your Health.</h1>
          <p>
            Your Health is Our Top Priority with Best and Affordable medical
            service.
          </p>
          <Button
            className={homeStyle.button}
            variant="contained"
            color="primary"
          >
            Check Our Services
          </Button>{" "}
        </Container>
      </div>
      <Container className={homeStyle.gridContainer}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3}>
            <div className={homeStyle.gridItems}>
              <span>
                <GiNurseMale size={70} className={homeStyle.gridIcons} />
              </span>
              <h4>Qualified Doctors</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={homeStyle.gridItems1}>
              <span>
                <FaAmbulance size={10} className={homeStyle.gridIcons} />
              </span>
              <h4>Emergency Services</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={homeStyle.gridItems}>
              <span>
                <FaCheckCircle size={70} className={homeStyle.gridIcons} />
              </span>
              <h4>Outdoor Checkup</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={homeStyle.gridItems1}>
              <span>
                <ImLab size={70} className={homeStyle.gridIcons} />
              </span>
              <h4>Lab Facilities</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
