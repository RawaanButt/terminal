import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardDeck, CardColumns } from "react-bootstrap";
import React from "react";
import {} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import $ from "jquery";
//import "../index.css";
const LandingPage = () => {
  $(document).ready(function () {
    $("#stars li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10);
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover");
            } else {
              $(this).removeClass("hover");
            }
          });
      })
      .on("mouseout", function () {
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            $(this).removeClass("hover");
          });
      });

    $("#stars li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10);
      var stars = $(this).parent().children("li.star");

      for (var i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
      }

      for (var i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }

      var ratingValue = parseInt(
        $("#stars li.selected").last().data("value"),
        10
      );
      var msg = "";
      if (ratingValue > 0) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
      }

      responseMessage(msg);
    });
  });

  function responseMessage(msg) {
    $(".success-box").fadeIn(200);
    $(".success-box div.text-message").html("<span>" + msg + "</span>");
  }

  return (
    <div>
      <Grid contained>
        <Grid
          contained
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            backgroundColor: "white",
          }}
        >
          <h1
            style={{ textAlign: "center", color: "black", marginTop: "30px" }}
          >
            <b>SELLERS</b>
          </h1>
          <hr />
          <Navbar bg="dark" variant="dark" color="white">
            <Nav className="mx-auto">
              <Nav.Link href="/" style={{ color: "black" }}>
                T-Shirts
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "black" }}>
                Hoodies
              </Nav.Link>
              <Nav.Link href="/products" style={{ color: "black" }}>
                Products
              </Nav.Link>
            </Nav>
          </Navbar>
        </Grid>
      </Grid>
      <Grid contained style={{ marginTop: "10px" }}>
        <Grid contained>
          <CardDeck className="card">
            <CardColumns>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/c9/4b/4b/c94b4ba2a7546cfd492615f0cf83534d.jpg  "
                />
                <Card.Body>
                  <h2>Long Coat</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 5999</p>

                  <Button variant="success" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/4d/09/35/4d0935865e2448fae310efc6d9cd6926.jpg"
                />
                <Card.Body>
                  <h2>Denim Shirt</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 2799</p>

                  <Button variant="success" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                />
                <Card.Body>
                  <h2>Red Jacket</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 7999</p>

                  <Button variant="success" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </CardColumns>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://i1.wp.com/finditonline.pk/wp-content/uploads/2020/09/t-shirt.jpeg?fit=500%2C750&ssl=1"
              />
              <Card.Body>
                <h2>T-Shirt</h2>
                <section class="rating-widget">
                  <div class="rating-stars text-center">
                    <ul id="stars">
                      <li class="star" title="Poor" data-value="1">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="star" title="Fair" data-value="2">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Good" data-value="3">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Excellent" data-value="4">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="WOW!!!" data-value="5">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="success-box">
                    <div class="clearfix"></div>
                    <img
                      alt="tick image"
                      width="32"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <div class="text-message"></div>
                    <div class="clearfix"></div>
                  </div>
                </section>
                <p>RS : 1299</p>

                <Button variant="success" className="cardButton">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <h2>Hoodie</h2>
                <section class="rating-widget">
                  <div class="rating-stars text-center">
                    <ul id="stars">
                      <li class="star" title="Poor" data-value="1">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="star" title="Fair" data-value="2">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Good" data-value="3">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Excellent" data-value="4">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="WOW!!!" data-value="5">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="success-box">
                    <div class="clearfix"></div>
                    <img
                      alt="tick image"
                      width="32"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <div class="text-message"></div>
                    <div class="clearfix"></div>
                  </div>
                </section>
                <p>RS : 2499</p>

                <Button variant="success" className="cardButton">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/18/26/51/182651f59d71237176fd6b643e5ea7f9.jpg"
              />
              <Card.Body>
                <h2>Ripped Jeans</h2>
                <section class="rating-widget">
                  <div class="rating-stars text-center">
                    <ul id="stars">
                      <li class="star" title="Poor" data-value="1">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="star" title="Fair" data-value="2">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Good" data-value="3">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Excellent" data-value="4">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="WOW!!!" data-value="5">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="success-box">
                    <div class="clearfix"></div>
                    <img
                      alt="tick image"
                      width="32"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <div class="text-message"></div>
                    <div class="clearfix"></div>
                  </div>
                </section>
                <p>RS : 2999</p>

                <Button variant="success" className="cardButton">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
