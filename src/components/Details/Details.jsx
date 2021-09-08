import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";

import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card
      className={title === "Income" ? classes.income : classes.expense}
      style={{
        backgroundColor: "#f2f7fa",
        color: "#747d84",
        margin: "0, auto",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} style={{ marginTop: "20px" }} />
      </CardContent>
    </Card>
  );
};

export default Details;
