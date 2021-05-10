import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "../layouts/suspect.css";

function Suspects() {
  // Setting our component's initial state
  const [suspects, setSuspects] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all suspects and store them with setSuspects
  useEffect(() => {
    loadSuspects();
  }, []);

  // Loads all suspects and sets them to suspects
  function loadSuspects() {
    API.getSuspects()
      .then((res) => setSuspects(res.data))
      .catch((err) => console.log(err));
  }

  // function querySuspect(options)
  // {
  //   API.getSuspects()
  //   .then((res))
  // }

  // Deletes suspect from the database with a given id, then reloads suspect from the db
  function deleteSuspect(id) {
    API.deleteSuspect(id)
      .then((res) => loadSuspects())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveSuspect method to save the suspect data
  // Then reload suspect from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    console.log({formObject});

    if (formObject.id && formObject.image) {
      API.saveSuspect({
        id: formObject.id,
        image: formObject.image,
      })
        .then((res) => loadSuspects())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Welcome to the online suspects lineup</h1>
            <p>
              This new system has been designed to make it more safe and secure
              for witnesses to identify a suspect
            </p>
            <p>
              Please take your time to fill in as much searching criterias below
            </p>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="age"
              placeholder="Age *"
            />
            <label htmlFor="sex">Sex *</label>
            <select name="sex" id="sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
              onChange={handleInputChange}
            </select>
            <Input
              onChange={handleInputChange}
              name="height"
              placeholder="Height *(cms)"
            />
            <Input
              onChange={handleInputChange}
              name="weight"
              placeholder="Weight *(kgs)"
            />
            <div class="flex space-x-4 ..">
              <div>
                <label for="hairType">Hair type *:</label>
                <select name="hairType" id="hairType">
                  <option value="straight">Straight</option>
                  <option value="wavy">Wavy</option>
                  <option value="curly">Curly</option>
                  <option value="kinky">Kinky</option>
                  onChange={handleInputChange}
                </select>
              </div>
              <div>
                <label for="hairColour">Hair colour *</label>
                <select
                  name="hairColour"
                  id="hairColour"
                  onChange={handleInputChange}
                >
                  <option value="black">Black</option>
                  <option value="blonde">Blonde</option>
                  <option value="brown">Brown</option>
                  <option value="grey">grey</option>
                  <option value="white">White</option>
                  <option value="blondeblack">Blonde & black</option>
                </select>
              </div>
              <div>
                <label for="hairLength">Hair length *</label>
                <select name="hairLength" id="hairLength">
                  <option value="short">Short</option>
                  <option value="long">Long</option>
                  <option value="medium">Medium</option>
                  onChange={handleInputChange}
                </select>
              </div>
              <div>
                <label for="ponyTail">Pony tail:</label>
                <select name="ponyTail" id="ponyTail">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  onChange={handleInputChange}
                </select>
              </div>
            </div>
            <label for="eyesColour">Eyes colour</label>
            <select name="eyesColour" id="eyescolour">
              <option value="black">Black</option>
              <option value="amber">Amber</option>
              <option value="blue">Blue</option>
              <option value="brown">Brown</option>
              <option value="gray">Gray</option>
              <option value="green">Green</option>
              <option value="hazel">Hazel</option>
              <option value="red">Red</option>
              onChange={handleInputChange}
            </select>{" "}
            <label for="glasses">Glasses</label>
            <select name="glasses" id="glasses">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              onChange={handleInputChange}
            </select>
            <label for="complexion">Complexion *</label>
            <select name="complexion" id="complexion">
              <option value="extremelyfairskin">Extremely fair skin</option>
              <option value="fairskin">Fair skin</option>
              <option value="mediumskin">Medium skin</option>
              <option value="oliveskin">Olive skin</option>
              <option value="brownskin">Brown skin</option>
              <option value="blackskin">Black skin</option>
              onChange={handleInputChange}
            </select>
            <label for="scars">Scars</label>
            <select name="scars" id="scars">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              onChange={handleInputChange}
            </select>
            <label for="tattoos">Tattoos</label>
            <select name="tattoos" id="tattos">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              onChange={handleInputChange}
            </select>
            <label for="earshape">Ear shape</label>
            <select name="earshape" id="earshape">
              <option value="attachedlobe">Attached lobe</option>
              <option value="broadlobe">Broad lobe</option>
              <option value="narrowlobe">Narrow lobe</option>
              <option value="pointedear">Pointed ear</option>
              <option value="roundlobe">Round lobe</option>
              <option value="squarelobe">Square lobe</option>
              <option value="stickingout">Sticking out</option>onChange=
              {handleInputChange}
            </select>
            <label for="eyebrowsshape">Eyebrows shape</label>
            <select name="eyebrowseshape" id="eyebrowseshape">
              <option value="straight">Straight</option>
              <option value="curved">Curved</option>
              <option value="softarch">Soft arch</option>
              <option value="higharch">high arch</option>
              <option value="upward">Upward</option>
              {handleInputChange}
            </select>
            <label for="noseshape">Nose shape</label>
            <select name="noseshape" id="noseshape">
              <option value="droopy">Droppy</option>
              <option value="aquiline">Aquiline</option>
              <option value="roman">Roman</option>
              <option value="grecian">Grecian</option>
              <option value="button">Button</option>
              <option value="child">Child version</option>
              <option value="upturned">Upturned</option>
              <option value="snub">Snub</option>
              <option value="funnel">Funnel</option>
              {handleInputChange}
            </select>
            <label for="race">Race:</label>
            <select name="race" id="race">
              <option value="caucasian">Caucasian</option>
              <option value="asian">Asian</option>
              <option value="indian">Indian</option>
              <option value="latino">Latino</option>
              <option value="pacificislander">Pacific islander</option>
              onChange={handleInputChange}
            </select>
            <label for="teeth">Teeth missing:</label>
            <select name="teeth" id="teeth">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              {handleInputChange}
            </select>
            <label for="wrinkles">Wrinkles:</label>
            <select name="wrinkles" id="wrinkles">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              {handleInputChange}
            </select>
            <label for="faceshape">Face shape:</label>
            <select name="faceshape" id="faceshape">
              <option value="round">Round</option>
              <option value="oval">Oval</option>
              <option value="square">Square</option>
              <option value="rectangular">Rectangular</option>
              <option value="diamond">Diamond</option>
              <option value="heartshape">Heart shape</option>
              {handleInputChange}
            </select>
            <label for="neck">Neck:</label>
            <select name="neck" id="neck">
              <option value="short">Short</option>
              <option value="medum">Medium</option>
              <option value="long">Long</option>
              {handleInputChange}
            </select>
            <label for="moustache">Moustache:</label>
            <select name="moustache" id="moustache">
              <option value="Yes">Yes</option>
              <option value="no">No</option>
              {handleInputChange}
            </select>
            <label for="beard">Beard:</label>
            <select name="beard" id="beard">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              {handleInputChange}
            </select>
            <label for="goatee">Goatee:</label>
            <select name="goatee" id="goatee">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              {handleInputChange}
            </select>
            <label for="sideburns">Side burns:</label>
            <select name="sideburns" id="sideburns">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              {handleInputChange}
            </select>
            <FormBtn onClick={handleFormSubmit}>Search suspects</FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Suspects On My List</h1>
          </Jumbotron>
          {suspects.length ? (
            <List>
              {suspects.map((suspects, index) => (
                <ListItem key={suspects.image}>
                  <img key={index} src={suspects.image} />
                  {/* <Link to={"./client/public/img" + suspects.image}>
                    <strong>
                      {suspects.id} by {suspects.image}
                    </strong>
                  </Link> */}
                  <DeleteBtn onClick={() => deleteSuspect(suspects.image)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Suspects;
