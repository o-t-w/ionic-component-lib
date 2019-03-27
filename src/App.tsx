import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import {
  IonButtons,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

import Badge from "./components/Badge";
import Button from "./components/Button";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";
import Chip from "./components/Chip";
import Input from "./components/Input";
import LinkComponent from "./components/Link";
import Popover from "./components/Popover";
import Radio from "./components/Radio";
import Search from "./components/Search";
import Select from "./components/Select";
import Spinner from "./components/Spinner";
import Textarea from "./components/Textarea";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <IonApp>
            <IonSplitPane contentId="main">
              {/*--  our side menu  --*/}
              <IonMenu contentId="main">
                <IonHeader no-border>
                  <IonToolbar>
                    <IonTitle>Components</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent>
                  <IonList>
                    <IonItem>
                      <Link to="/button">Button</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/card">Card</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/checkbox">Checkbox</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/chip">Chip</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/badge">Badge</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/input">Input</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/textarea">Textarea</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/radio">Radio</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/select">Select</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/link">Link</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/search">Search</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/spinner">Spinner</Link>
                    </IonItem>
                    <IonItem>
                      <Link to="/popover">Popover</Link>
                    </IonItem>
                  </IonList>
                </IonContent>
              </IonMenu>
              <IonPage id="main">
                {/* <IonHeader>
                  <IonToolbar color="primary">
                    <IonButtons slot="start"> */}

                <IonMenuButton class="right absolute m10 z2" />

                {/* </IonButtons>
                  </IonToolbar>
                </IonHeader> */}
                <IonContent class="ion-padding">
                  <Route
                    path="/"
                    exact
                    render={props => {
                      return <h1>Choose a component</h1>;
                    }}
                  />
                  <Route path="/button" component={Button} />
                  <Route path="/card" component={Card} />
                  <Route path="/checkbox" component={Checkbox} />
                  <Route path="/chip" component={Chip} />
                  <Route path="/select" component={Select} />
                  <Route path="/input" component={Input} />
                  <Route path="/radio" component={Radio} />
                  <Route path="/badge" component={Badge} />
                  <Route path="/textarea" component={Textarea} />
                  <Route path="/link" component={LinkComponent} />
                  <Route path="/search" component={Search} />
                  <Route path="/spinner" component={Spinner} />
                  <Route path="/popover" component={Popover} />
                </IonContent>
              </IonPage>
            </IonSplitPane>
          </IonApp>
        </div>
      </Router>
    );
  }
}

export default App;
