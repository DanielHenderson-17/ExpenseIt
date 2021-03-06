import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { ExpenseTrackerContext } from "../../context/context";
import InfoCard from "../InfoCard";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card
      className={classes.root}
      style={{
        backgroundColor: "#f2f7fa",
        color: "#747d84",
        margin: "0, auto",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        src="https://i.ibb.co/Lg9WrhP/expenseitlogo.png"
        width="381"
        height="141"
        alt="Expense It! "
      />
      <CardHeader
        style={{ paddingTop: "0px" }}
        subheader="Powerd by Speechly"
      />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
