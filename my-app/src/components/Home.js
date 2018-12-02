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
import firebase from "../firebase";

const FontAwesome = require("react-fontawesome");

const styles = {
  card: {
    maxWidth: 345,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
};

class Home extends React.Component {
  render() {
    //var days = Math.abs(moment().diff("2020-05-23", "days"));

    return (
      // <div style={{ backgroundColor: "#B3E5FC" }}>
      <div style={{ backgroundColor: "#e5a552" }}>
        <div style={{ backgroundColor: "#5b7db1" }}>
          <Typography variant="display4" align="center">
            Welcome!
          </Typography>
          <Button
            variant="contained"
            style={{
              marginLeft: "30%",
              height: "15%",
              width: "30%",
              borderRadius: 100,
              fontSize: 30,
              backgroundColor: "#00BCD4",
              color: "white"
            }}
            component={Link}
            to={"/def"}
            title="definition"
          >
            <FontAwesome
              className="super-crazy-colors"
              // name="rocket"
              name="film"
              size="2x"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />
            <Typography
              variant="display1"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              What is an Orphan Film
            </Typography>
            <FontAwesome
              className="super-crazy-colors"
              name="question"
              size="2x"
              spin
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />
          </Button>
        </div>
        <div>
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
              //image="https://cdn163.picsart.com/223256630016202.jpg?c480x480"
              image="http://www.nyu.edu/orphanfilm/img/Radicals_postcard_2019_B.png"
              title="home"
              // width={400}
            />
          </Card>

          <Card align="left" style={{ backgroundColor: "#d78368" }}>
            <Typography
              variant="display2"
              align="center"
              style={{ fontFamily: "Permanent Marker", color: "white" }}
            >
              Next Orphans Film Symposium :
            </Typography>
            <Typography
              variant="display2"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              ORPHANS 12
            </Typography>
            <Typography
              variant="display2"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              EYE Netherlands Filmmuseum in Amsterdam.
            </Typography>
            <Typography
              variant="display2"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              May 23-26, 2020
            </Typography>
          </Card>
          <Card align="right" style={{ backgroundColor: "#e3b75c" }}>
            <Typography
              variant="display2"
              align="center"
              style={{ fontFamily: "Permanent Marker", color: "white" }}
            >
              Next Orphans Event:
            </Typography>
            <Typography
              variant="display2"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              The Austrian Film Museum in Vienna hosts
            </Typography>
            <Typography
              variant="display2"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              "Radicals," a two-day edition of the NYU Orphan Film Symposium.
            </Typography>
            <Typography
              variant="display2"
              style={{ fontFamily: "Merriweather Sans" }}
              align="center"
            >
              June 7 & 8, 2019,
            </Typography>
          </Card>
        </div>
        {/* <Card
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

//export default connect()(Home);
export default Home;
