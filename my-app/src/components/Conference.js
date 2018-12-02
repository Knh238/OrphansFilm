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
import IconButton from "@material-ui/core/IconButton";
import TheatersIcon from "@material-ui/icons/Theaters";
import ChromeReaderIcon from "@material-ui/icons/ChromeReaderMode";
import FaceIcon from "@material-ui/icons/Face";
import CollectionsIcon from "@material-ui/icons/Collections";
import axios from "axios";

import moment from "moment";

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

class Conference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    console.log("----------this state", this.props.location.state);
    const event = this.props.location.state.conference;
    return (
      <div>
        <Typography
          variant="display3"
          style={{ backgroundColor: "#29B6F6" }}
          align="center"
        >
          Orphans {event.vol}: {event.title}
        </Typography>
        <Paper
          style={{
            marginLeft: "15%",
            backgroundColor: "white",
            width: "65%",
            height: "50%"
          }}
        >
          <Card style={{ backgroundColor: "#80DEEA" }}>
            <Typography variant="display3" align="center">
              {event.location}
            </Typography>
            <Typography variant="display2" align="center">
              {event.year}
            </Typography>
          </Card>
          <Card style={{ backgroundColor: "#E8EAF6" }}>
            <Typography
              variant="display2"
              style={{ color: "black" }}
              align="center"
            >
              {event.dates}
            </Typography>
          </Card>
          <Card>
            <CardMedia
              component="img"
              // height={600}
              //image="https://cdn163.picsart.com/223256630016202.jpg?c480x480"
              image={event.image}
              title="home"
              // width={400}
            />
          </Card>
          <Card style={{ backgroundColor: "#E8EAF6" }}>
            <Typography
              variant="display2"
              style={{ color: "grey" }}
              align="right"
            >
              events
            </Typography>
            <Card align="center">
              {/* <Link
                to={{
                  pathname: "/Buy",
                  state: {
                    name: this.state.quote.companyName,
                    cost: this.state.quote.latestPrice,
                    symbol: this.state.quote.symbol
                  }
                }}
              > */}
              <Button
                variant="text"
                label="buy"
                style={{
                  backgroundColor: "#3F51B5",
                  marginBottom: 10,
                  marginTop: 10,
                  width: "30%",
                  height: "20%",

                  alignSelf: "center"
                }}
                labelStyle={{ color: "pink", fontSize: 30 }}
              >
                program
              </Button>
              {/* </Link> */}
            </Card>
            <Card align="center">
              <IconButton>
                <TheatersIcon style={{ height: "30%", width: "30%" }} />
                <Typography
                  style={{ fontSize: 20, fontFamily: "Merriweather Sans" }}
                  align="center"
                  wrap
                >
                  Screenings
                </Typography>
              </IconButton>
              <Button
                variant="text"
                label="buy"
                style={{
                  backgroundColor: "#3F51B5",
                  marginBottom: 10,
                  marginTop: 10,
                  width: "30%",
                  height: "20%",

                  alignSelf: "center"
                }}
                labelStyle={{ color: "pink", fontSize: 30 }}
              >
                <FaceIcon style={{ height: "30%", width: "30%" }} />
                participants
              </Button>
            </Card>
            <Card align="center">
              <IconButton>
                <CollectionsIcon style={{ height: "30%", width: "30%" }} />
                <Typography
                  style={{ fontSize: 20, fontFamily: "Merriweather Sans" }}
                  align="center"
                  wrap
                >
                  photoalbum
                </Typography>
              </IconButton>
              <Button
                variant="text"
                label="buy"
                style={{
                  backgroundColor: "#3F51B5",
                  marginBottom: 10,
                  marginTop: 10,
                  width: "30%",
                  height: "20%",

                  alignSelf: "center"
                }}
                labelStyle={{ color: "pink", fontSize: 30 }}
              >
                <ChromeReaderIcon style={{ height: "30%", width: "30%" }} />
                program
              </Button>
            </Card>
          </Card>
        </Paper>
        ) : null}
      </div>
    );
  }
}

export default Conference;
