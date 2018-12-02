import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TheatersIcon from "@material-ui/icons/Theaters";
import HomeIcon from "@material-ui/icons/Home";

import ForumIcon from "@material-ui/icons/Forum";
import WorkIcon from "@material-ui/icons/Work";
import AccountIcon from "@material-ui/icons/AccountCircle";
import QueuePlayNextIcon from "@material-ui/icons/QueuePlayNext";
import HistoryIcon from "@material-ui/icons/History";
import EventIcon from "@material-ui/icons/Event";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

import { fade } from "@material-ui/core/styles/colorManipulator";
import Avatar from "@material-ui/core/Avatar";

import Icon from "@material-ui/core/Icon";
import moment from "moment";
import SearchIcon from "@material-ui/icons/Search";
// import firebase from "../firebase";
const FontAwesome = require("react-fontawesome");
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "right"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      login: null,
      searchStock: ""
    };
    // this.logOut = this.logOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   const self = this;
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       self.setState({ user });
  //     }
  //   });
  // }

  handleSubmit() {
    const self = this;

    self.setState({ searchSock: "" });
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    var days = Math.abs(moment().diff("2020-05-23", "days"));
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          style={{ background: "#26C6DA" }}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            {/* <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={event =>
                  this.setState({ searchStock: event.target.value })
                }
                value={this.state.searchStock}
              />
              <IconButton
                component={Link}
                to={{
                  pathname: "/Stock",
                  state: this.state.searchStock
                }}
              >
                <SearchIcon />
              </IconButton>
            </div> */}

            <div>
              <Typography
                style={{ flex: "center" }}
                variant="h2"
                color="inherit"
                noWrap
              >
                The Orphan Film Symposium
              </Typography>
            </div>
            <div lastChild={true} float="right">
              <Typography variant="display1" style={{ color: "#FDD835" }}>
                Next conference in : {days} days
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button key={"Home"} component={Link} to="/">
              <ListItemIcon>
                <HomeIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem
              button
              key={"my profile"}
              title="profile"
              component={Link}
              to="/allConferences"
            >
              <ListItemIcon>
                <QueuePlayNextIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Upcoming Conferences"} />
            </ListItem>
            <ListItem
              button
              key={"my profile"}
              title="profile"
              component={Link}
              to="/allConferences"
            >
              <ListItemIcon>
                <HistoryIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Past Conferences"} />
            </ListItem>
            <ListItem
              button
              key={"Transactions"}
              title="profile"
              component={Link}
              to="/transactions"
            >
              <ListItemIcon>
                <FontAwesome
                  className="super-crazy-colors"
                  name="trophy"
                  size="2x"
                />
              </ListItemIcon>
              <ListItemText primary={"Helen Hill Award"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key={"portfolio"}
              title="portfolio"
              component={Link}
              to="/portfolio"
            >
              <ListItemIcon>
                <FontAwesome
                  className="super-crazy-colors"
                  name="photo"
                  size="2x"
                />
              </ListItemIcon>
              <ListItemText primary={"Random Orphan Still"} />
            </ListItem>
            <ListItem
              button
              key={"portfolio"}
              title="photo"
              component={Link}
              to="/randomPhoto"
            >
              <ListItemIcon>
                <ForumIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Orphans Blog"} />
            </ListItem>
            <ListItem
              button
              key={"portfolio"}
              title="portfolio"
              component={Link}
              to="/portfolio"
            >
              <ListItemIcon>
                <EventIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Events"} />
              <Badge badgeContent={4} color="primary" />
            </ListItem>
            <ListItem
              button
              key={"Transactions"}
              title="profile"
              component={Link}
              to="/transactions"
            >
              <ListItemIcon>
                <RssFeedIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Social Media"} />
            </ListItem>
            <ListItem
              button
              key={"Transactions"}
              title="profile"
              component={Link}
              to="/transactions"
            >
              <ListItemIcon>
                <ThumbUpIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Social Media"} secondary={"option2"} />
            </ListItem>
            <ListItem
              button
              key={"Transactions"}
              title="profile"
              component={Link}
              to="/transactions"
            >
              <ListItemIcon>
                <AssignmentIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"CFPs"} />
              <Badge badgeContent={1} color="secondary" />
            </ListItem>
            <ListItem
              button
              key={"Transactions"}
              title="profile"
              component={Link}
              to="/transactions"
            >
              <ListItemIcon>
                <Badge badgeContent={1} color="secondary">
                  <DescriptionIcon style={{ fontSize: 30 }} />
                </Badge>
              </ListItemIcon>

              <ListItemText primary={"CFPs"} secondary={"option2"} />
            </ListItem>
            <ListItem
              button
              key={"portfolio"}
              title="portfolio"
              component={Link}
              to="/portfolio"
            >
              <ListItemIcon>
                <LocalMoviesIcon style={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary={"Orphans Database"} />
            </ListItem>

            {/* <ListItem
              button
              key={"my profile"}
              title="profile"
              component={Link}
              to="/popularStocks"
            >
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary={"Hotels 2018"} />
            </ListItem>

            <ListItem
              button
              key={"Transactions"}
              title="profile"
              component={Link}
              to="/transactions"
            >
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary={"Attendees 2016"} />
            </ListItem> */}

            {user.uid ? (
              <ListItem>
                <Link to="/" replace>
                  <Avatar
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "white",
                      color: "grey"
                    }}
                    onClick={this.logOut}
                  >
                    <Icon>logout</Icon>
                  </Avatar>
                </Link>
              </ListItem>
            ) : null}
          </List>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavDrawer);
