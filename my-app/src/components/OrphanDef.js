import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import MovieIcon from "@material-ui/icons/Movie";
import TheatersIcon from "@material-ui/icons/Theaters";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
const FontAwesome = require("react-fontawesome");
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
        <Card
          style={{
            width: "55%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10
          }}
        >
          <CardMedia
            component="img"
            // height={600}
            image="http://www.sc.edu/filmsymposium/archive/images/amateurs.jpeg"
            //image="http://www.nyu.edu/orphanfilm/img/Radicals_postcard_2019_B.png"
            title="home"
            // width={400}
          />
        </Card>
        >
        <div>
          <Card>
            <Typography
              variant="display2"
              align="center"
              style={{ fontFamily: "Merriweather Sans" }}
            >
              Click for examples of Orphan films By type
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
          <GridList
            cellHeight={160}
            style={{ marginLeft: 10, width: "90%", height: "90%" }}
            cols={5}
          >
            <GridListTile>
              <IconButton
              // component={Link}
              // to={{
              //   pathname: "/Stock",
              //   state: this.state.searchStock
              // }}
              >
                <MovieIcon style={{ height: "30%", width: "30%" }} />
                <Typography
                  style={{ fontSize: 20, fontFamily: "Merriweather Sans" }}
                  align="center"
                  wrap
                >
                  another option:A
                </Typography>
              </IconButton>
            </GridListTile>
            <GridListTile>
              <IconButton
              // component={Link}
              // to={{
              //   pathname: "/Stock",
              //   state: this.state.searchStock
              // }}
              >
                <TheatersIcon style={{ height: "30%", width: "30%" }} />
                <Typography
                  style={{ fontSize: 20, fontFamily: "Merriweather Sans" }}
                  align="center"
                  wrap
                >
                  another option: B
                </Typography>
              </IconButton>
            </GridListTile>

            {typesOfFilm.map((film, index) => (
              <GridListTile
                style={{ marginTop: 10, marginBottom: 10, height: "25%" }}
              >
                <Button
                  variant="contained"
                  key={index}
                  title={film}
                  text={film}
                  style={{
                    // marginLeft: "15%",
                    height: 170,
                    width: 170,
                    borderRadius: 160,

                    backgroundColor: "#03A9F4"
                  }}
                  textStyle={{ color: "white" }}
                  wrap
                  //   component={Link}
                  // to={{
                  //   pathname: "/login"
                  // }}
                >
                  <Typography
                    style={{ fontSize: 20, fontFamily: "Merriweather Sans" }}
                    align="center"
                    wrap
                  >
                    {film}
                  </Typography>
                </Button>
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div>
          <Card>
            <Typography
              variant="display2"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              Still confused?
            </Typography>
            <Button
              variant="contained"
              key={6}
              title={"learnMore"}
              style={{
                marginLeft: "28%",
                height: "30%",
                width: "30%",
                // borderRadius: 160,
                backgroundColor: "#03A9F4"
              }}
              textStyle={{ color: "white" }}
              //   component={Link}
              // to={{
              //   pathname: "/login"
              // }}
            >
              <FontAwesome
                // name="plus-circle"
                align="left"
                name="plus-square"
                size="3x"
                pulse
                style={{
                  color: "white",
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  alignContent: "left"
                }}
              />
              <Typography
                style={{
                  fontSize: 28,
                  fontFamily: "Merriweather Sans",
                  marginLeft: 4
                }}
                // align="center"
              >
                A more classic definition
              </Typography>
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default OrphanDef;
