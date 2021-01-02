import React from "react";
import SingleProduct from "./singleproduct";
import { Grid } from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import ProductService from "../../services/Product";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    top: theme.spacing(10),
    right: theme.spacing(0),
  },
}));
const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(9);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const getData = () => {
    ProductService.getProducts(page, perPage)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, [page, perPage]);

  const handlenewproduct = () => {
    console.log(props);
    props.history.push("/products/new");
  };
  return (
    <div>
      {userService.isLoggedin() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handlenewproduct}
        >
          <AddIcon />
        </Fab>
      )}
      {products.length === 0 ? (
        <p>There are no products!</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
