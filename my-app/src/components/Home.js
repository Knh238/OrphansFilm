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
    var days = Math.abs(moment().diff("2020-05-23", "days"));

    return (
      <div style={{ backgroundColor: "#80DEEA" }}>
        <div style={{ backgroundColor: "#80DEEA" }}>
          <Typography variant="display4" align="center">
            Welcome!
          </Typography>
          <Button
            variant="contained"
            style={{
              marginLeft: "30%",
              height: 200,
              width: 200,
              borderRadius: 160,
              fontSize: 30,
              backgroundColor: "#00BCD4",
              color: "white"
            }}
            component={Link}
            to={"/def"}
            title="definition"
          >
            <Typography variant="display1" align="center">
              What is an Orphan Film?
            </Typography>
          </Button>
        </div>
        <div>
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
          <Card>
            <Typography variant="display2" align="center">
              June 7 & 8, 2019,
            </Typography>
            <Typography variant="display2" align="center">
              the Austrian Film Museum in Vienna hosts
            </Typography>
            <Typography variant="display2" align="center">
              "Radicals," a two-day edition of the NYU Orphan Film Symposium.
            </Typography>
          </Card>
        </div>
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
      </div>
    );
  }
}

//export default connect()(Home);
export default Home;
