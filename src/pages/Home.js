import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CompletionsInfo } from "../redux/actions/completions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import MoreIcon from "@material-ui/icons/MoreVert";
import LogoImage from ".././img/logo.png";
import TestImage from ".././img/test.png";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    color: "#016AE9",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "#016AE9",
  },
  logo: {
    height: "48px",
    paddingRight: 15,
  },

  appBar: {
    backgroundColor: "#FFFFFF",
  },
  headLine: {
    fontFamily: "Poppins",
    marginTop: "40px",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
  },
  headSuggestion: {
    marginTop: "20px",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
  },
  upgrade: {
    background: "rgba(3, 35, 251, 0.05)",
    display: "flex",
    padding: "15px",
    alignItems: "center",
  },
  upgradeText: {
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    margin: "auto",
  },
  question: {
    background: "#F7F7F7",
    display: "flex",
    padding: "15px",
    alignItems: "center",
  },
  empty: {
    height: "200px",
  },
  questionText: {
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
  },
  test: {
    marginTop: "30px",
    background: "#016AE9",
    color: "white",
    padding: "20px 50px",
    position: "relative",
  },
  testImage: {
    height: "240px",
    position: "absolute",
    right: 0,
    bottom: 0,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  testCount: {
    marginTop: "20px",
    fontWeight: "700",
    fontFamily: "Poppins",
    fontSize: "24px",
    lineHeight: "36px",
  },
  testText: {
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
  },
  testButton: {
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: "900",
    backgroundColor: "white",
    fontFamily: "Poppins",
    color: "#016AE9",
    margin: "20px 0 20px 0",
    "&:hover": {
      background: "#d1d6ea",
    },
    textTransform: "none",
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#016AE9 !important",
  },
  searchFont: {
    fontSize: "24px",
    fontFamily: "Poppins",
  },
  searchButton: {
    height: "100%",
    fontSize: "24px",
    fontWeight: "700",
    backgroundColor: "#016AE9",
    fontFamily: "Poppins",
    textTransform: "none",
  },
  upgradeButton: {
    fontSize: "15px",
    backgroundColor: "#016AE9",
    fontFamily: "Poppins",
    marginLeft: "10px",
    textTransform: "none",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { completionsInfo } = props;
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [count, setCount] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  useEffect(() => {
    // props.CompletionsInfo(searchText);
  }, []);

  useEffect(() => {
    // console.log(completionsInfo.data);
  }, [completionsInfo]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    props.CompletionsInfo(searchText);
    setSuggestion(searchText);
  };

  const handleSelectedClick = (e) => {
    if (e.target.checked === true) setCount(count + 1);
    else setCount(count - 1);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={11}
            color="secondary"
          >
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={LogoImage} className={clsx(classes.logo)} alt="Main Logo" />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 3 new notifications" color="inherit">
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={3}
                color="secondary"
              >
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography varient="caption" className={classes.headLine}>
              Headline
            </Typography>
          </Grid>
          <Grid item sm={8} xs={12}>
            <TextField
              onChange={handleSearchText}
              value={searchText}
              className={classes.searchText}
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.searchFont,
                },
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <Button
              onClick={handleSearchClick}
              fullWidth
              className={classes.searchButton}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography varient="caption" className={classes.headSuggestion}>
              Headline suggestions for <strong>“{completionsInfo.length !==0 && suggestion}”</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.upgrade}>
              <Typography varient="caption" className={classes.upgradeText}>
                You're using a <strong>free version</strong> of this tool |{" "}
                <strong>2</strong> out of <strong>3</strong> free daily searches
                available <span></span>
                <Button
                  className={classes.upgradeButton}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Upgrade
                </Button>
              </Typography>
            </Paper>
          </Grid>
          {typeof completionsInfo != "undefined" &&
            completionsInfo.map((row, i) => (
              <Grid item xs={12} key={i}>
                <Paper elevation={0} className={classes.question}>
                  <Checkbox
                    style={{
                      color: "#016AE9",
                    }}
                    onClick={handleSelectedClick}
                    inputProps={{ "aria-label": "secondary checkbox" }}

                  />
                  <Typography
                    varient="caption"
                    className={classes.questionText}
                  >
                    {row}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          {completionsInfo.length === 0 && (
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.empty}></Paper>
            </Grid>
          )}
          {completionsInfo.length !== 0 && (
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.test}>
                <Typography varient="caption" className={classes.testCount}>
                  {count} headlines are selected.
                </Typography>
                <Typography varient="caption" className={classes.testText}>
                  Test these headlines by launching a Google Ad Headline Test
                </Typography>
                <Button
                  className={classes.testButton}
                  variant="contained"
                  color="primary"
                >
                  Create a test
                </Button>
                <img src={TestImage} className={classes.testImage} alt="Test" />
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

Home.propTypes = {};

const mapStateToProps = (state) => ({
    completionsInfo: state.completions.completionsInfo,
});

const mapDispatchToProps = {
    CompletionsInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
