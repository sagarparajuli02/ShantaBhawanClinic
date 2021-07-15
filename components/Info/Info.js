import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container, Paper } from "@material-ui/core";
import infoStyle from "./Info.module.css";
import { FaUserNurse } from "react-icons/Fa";
import {
  FcBusinessman,
  FcCalendar,
  FcPortraitMode,
  FcPlus,
} from "react-icons/Fc";

function Info() {
  return (
    <>
      <Container className={infoStyle.container}>
        <Grid className={infoStyle.Gridcontainer} container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div>
              <img
                className={infoStyle.image}
                src="https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              ></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid className={infoStyle.Gridcontainer} container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Paper className={infoStyle.paper}>
                  <FcCalendar size={50} className={infoStyle.gridIcons} />
                  <h1>30</h1>
                  <p>Years of Experienced</p>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Paper className={infoStyle.paper}>
                  <FcPortraitMode size={50} className={infoStyle.gridIcons} />
                  <h1>10,000</h1>
                  <p>Happy Patients</p>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Paper className={infoStyle.paper}>
                  <FaUserNurse size={50} className={infoStyle.gridIcons} />
                  <h1>10</h1>
                  <p>Number of Doctors</p>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Paper className={infoStyle.paper}>
                  <FcBusinessman size={50} className={infoStyle.gridIcons} />
                  <h1>30</h1>
                  <p>Number of Staffs</p>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Info;
