import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [suspect, setSuspect] = useState({});

  // When this component mounts, grab the suspect with the _id of props.match.params.id
  // e.g. localhost:3000/suspects/599dcb67f0f16317844583fc
  const { _id } = useParams();
  useEffect(() => {
    API.getSuspect(_id)
      .then((res) => setSuspect(res.data))
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {suspect.name} by {suspect.image}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Suspects</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
