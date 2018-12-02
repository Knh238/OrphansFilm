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
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { colors } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import moment from "moment";
import firebase from "../firebase";

const styles = {
  card: {
    maxWidth: 345,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  media: {
    objectFit: "cover"
  }
};

class RandomPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentWillMount() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      // if (user) {
      // const currUser = user.uid;
      var ref = firebase.database().ref(`images/`);
      ref.on("value", function(snapshot) {
        let conferenceList = snapshot.val();
        const allListings = [];

        for (let key in conferenceList) {
          allListings.push(conferenceList[key]);
        }
        self.setState({
          conferences: allListings
        });
      });
      //}
    });
  }
  // async componentWillMount() {
  //   const symbol = this.props.location.state;
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=1`
  //     );
  //     console.log("data", data);
  //     this.setState(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  render() {
    console.log("----------this state", this.state);

    return (
      // <div>
      <div style={{ backgroundColor: "#e5a552" }}>
        <Typography
          variant="display4"
          style={{
            backgroundColor: "#5b7db1",
            fontFamily: "Merriweather Sans"
          }}
          align="center"
        >
          Past Conferences
        </Typography>
        <Paper
          style={{
            marginLeft: "15%",
            backgroundColor: "white",
            width: "65%",
            height: "50%"
          }}
        >
          {this.state.conferences
            ? this.state.conferences.map(item => (
                <Card style={{ backgroundColor: "#00BCD4" }}>
                  {/* <Card style={{ backgroundColor: "black" }}> */}
                  <Typography
                    variant="display3"
                    style={{ fontFamily: "Merriweather Sans" }}
                    align="center"
                  >
                    {item.year}
                  </Typography>
                  <Typography
                    variant="display2"
                    style={{ fontFamily: "Merriweather Sans" }}
                    align="center"
                  >
                    "{item.title}"
                  </Typography>
                  <CardMedia
                    component="img"
                    // height={600}
                    //image="https://cdn163.picsart.com/223256630016202.jpg?c480x480"
                    image={item.image}
                    title="home"
                    // width={400}
                  />
                  <Divider />
                </Card>
              ))
            : null}
        </Paper>
      </div>
    );
  }
}

export default RandomPhoto;
