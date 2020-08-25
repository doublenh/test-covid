import React, { useState, useEffect } from "react";
import fetch from "unfetch";
import useSWR from "swr";
import DataTable, { createTheme } from "react-data-table-component";

import columns from "../components/DataTableColumns";

import "./style.css";

const apiUrl = "https://api.covid19api.com/summary";
const countriesUrl = "https://api.covid19api.com/countries";

const fetcher = (url) => fetch(url).then((res) => res.json());

const conditionalRowStyles = [
  {
    when: (row) => row.TotalConfirmed === 0,
    style: {
      backgroundColor: "#90EE90",
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row) => row.TotalRecovered === 0,
    style: {
      backgroundColor: "#90EE90",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row) => row.TotalDeaths === 0,
    style: {
      backgroundColor: "#90EE90",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
];

createTheme("solarized", {
  text: {
    primary: "#000000",
    secondary: "#000000",
  },
  background: {
    default: "#FFFAFA",
  },
  context: {
    background: "#FFFAFA",
    text: "#000000",
  },
  divider: {
    default: "#073642",
  },
  action: {
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const CovidSummary = () => {
  const { data, error } = useSWR(apiUrl, fetcher);

  if (!data) {
    return <h4 className="my-4 text-center">Loading...</h4>;
  }

  if (error) {
    return <h4 className="my-4 text-center">Error...</h4>;
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={data.Countries}
        conditionalRowStyles={conditionalRowStyles}
        theme="solarized"
      />
    </div>
  );
};

export default CovidSummary;
