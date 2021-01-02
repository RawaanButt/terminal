import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import userService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({}));
const TopMenu = () => {
  const classes = useStyles();
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mx-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Typography</Nav.Link>
        <Nav.Link href="/">Contact Us</Nav.Link>
        {!userService.isLoggedin() ? (
          <>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            Log Out {userService.getLoggedinUser().name}
          </Button>
        )}
      </Nav>
    </Navbar>
  );
};

export default TopMenu;
