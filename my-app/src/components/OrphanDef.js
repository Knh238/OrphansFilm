import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
//import Grid item from "@material-ui/core/GridItem";

const styles = {
  card: {
    maxWidth: 345,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
};
const q = "What's an 'orphan film'?";
const def = "All manner of films outside the commercial mainstream:";
const typesOfFilm = [
  "amateur",
  "educational",
  "ethnographic",
  "industrial",
  "government",
  "experimental",
  "censored",
  "independent",
  "sponsored",
  "obsolescent",
  "small-gauge",
  "silent",
  "student",
  "medical",
  "unreleased",
  "underground films",
  "kinescopes",
  "home movies",
  "test reels",
  "newsreels",
  "outtakes",
  "fringe TV",
  "other ephemeral moving images"
];

class OrphanDef extends React.Component {
  render() {
    var days = Math.abs(moment().diff("2020-05-23", "days"));

    return (
      <div
        style={{
          backgroundColor: "#80DEEA"
        }}
      >
        >
        <div>
          <Typography variant="display4" align="center">
            Welcome!
          </Typography>
          <Typography variant="display2" align="center">
            Next conference in : {days} days
          </Typography>
          <Card>
            <Typography variant="display2" align="center">
              ORPHANS 12 May 23-26, 2020
            </Typography>
            <Typography variant="display2" align="center">
              EYE Netherlands Filmmuseum in Amsterdam.
            </Typography>
          </Card>
        </div>
        <div
          style={{
            backgroundColor: "#80DEEA",
            // display: "flex",
            direction: "row"
          }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            wrap
          >
            {typesOfFilm.map((film, index) => (
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  key={index}
                  title={film}
                  text={film}
                  style={{
                    marginLeft: "15%",
                    height: 200,
                    width: 200,
                    borderRadius: 160,
                    fontSize: 30,
                    backgroundColor: "#03A9F4"
                  }}
                  textStyle={{ color: "white" }}
                  //   component={Link}
                  // to={{
                  //   pathname: "/login"
                  // }}
                >
                  <Typography variant="display1" align="center">
                    {film}
                  </Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
        {/* <Card
          style={{
            width: "55%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10
          }}
        > */}
        {/* <CardMedia
            component="img"
            // height={600}
            //image="https://cdn163.picsart.com/223256630016202.jpg?c480x480"
            image="http://www.nyu.edu/orphanfilm/img/Radicals_postcard_2019_B.png"
            title="home"
            // width={400}
          />
        </Card> */}
      </div>
    );
  }
}

export default OrphanDef;
