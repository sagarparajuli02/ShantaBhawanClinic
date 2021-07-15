import React from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { ImLab } from "react-icons/im";
import { BiBody } from "react-icons/bi";
import { GrTest } from "react-icons/gr";
import { GiHypodermicTest } from "react-icons/gi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { RiHandCoinLine } from "react-icons/ri";
import { MdLocalHospital } from "react-icons/md";
import {
  FcReddit,
  FcVideoCall,
  FcPhotoReel,
  FcBusinesswoman,
} from "react-icons/fc";
import { FaOpera, FaPhotoVideo } from "react-icons/fa";
import serviceStyle from "./Service.module.css";

function serviceComponent() {
  return (
    <div className={serviceStyle.serviceContainer}>
      <h1> Here are the list of all the services we provide at our clinic</h1>
      <Container className={serviceStyle.gridContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                {" "}
                <RiHandCoinLine
                  size={60}
                  className={serviceStyle.gridIcons}
                />{" "}
              </span>
              <h4>Primary Care</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <BiBody size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>Whole Body Check Up</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <GrTest size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>Lab Test</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <CgSmileMouthOpen
                  size={60}
                  className={serviceStyle.gridIcons}
                />
              </span>
              <h4>Dental Service</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <ImLab size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>Dermatolology</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <FcBusinesswoman size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>Gyanocologist</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <FcReddit size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>Pedraticcian</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <GiHypodermicTest
                  size={60}
                  className={serviceStyle.gridIcons}
                />
              </span>
              <h4>Immunization</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <FcPhotoReel size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>X Ray</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <FaOpera size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>Minor Operation</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <FcVideoCall size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>USG/ Video X ray</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={serviceStyle.gridItems}>
              <span>
                <MdLocalHospital size={60} className={serviceStyle.gridIcons} />
              </span>
              <h4>Pharmacy </h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default serviceComponent;
