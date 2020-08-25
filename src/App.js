import React from "react";
import CovidSummary from "./components/CovidSummary";
import SearchData from "./components/SearchData";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  return (
    <div className="container">
      <h2 className="my-4 text-center">Covid-19 Summary Data</h2>
      <Row>
        <Col sm={3}>
          <h4 className="my-4 text-center">Search Data</h4>
          <SearchData />
        </Col>
        <Col sm={9}>
          <CovidSummary />
        </Col>
      </Row>
    </div>
  );
}

export default App;
