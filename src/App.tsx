import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import {
  IonButton,
  IonCard,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
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
              <IonMenu>
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
                  </IonList>
                </IonContent>
              </IonMenu>
              <IonPage id="main">
                <div className="@large:margin-left components-container">
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
                </div>
              </IonPage>
            </IonSplitPane>
          </IonApp>
        </div>
      </Router>
    );
  }
}

export default App;
