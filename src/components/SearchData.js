import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

//import "bootstrap/dist/css/bootstrap.min.css";

const SearchData = () => {
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    axios
      .all([axios.get("https://disease.sh/v3/covid-19/countries")])
      .then((response) => {
        setResults(response[0].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries)
      : item;
  });

  const countries = filterCountries.map((data) => {
    return (
      <Card
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
        key={data.country}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Case {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  const onClick = () => setShowData(true);

  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            type="text"
            placeholder="Enter country"
            onChange={(e) => setSearchCountries(e.target.value)}
            onClick={onClick}
          />
        </Form.Group>
      </Form>

      {showData ? countries : null}
    </div>
  );
};

export default SearchData;
