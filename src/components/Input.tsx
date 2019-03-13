import { IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";

import React from "react";

const Input: React.SFC<{}> = () => (
  <>
    <h1 className="pb7 border-bottom">Input</h1>

    <form action="">
      <IonItem>
        <IonLabel position="stacked">Name</IonLabel>
        <IonInput />
      </IonItem>
    </form>

    <label className="label" htmlFor="name">
      Name
    </label>
    <input className="input" type="text" id="name" />

    <h2>Example usage</h2>

    <form className="max500" action="">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Phone Number</IonLabel>
          <IonInput type="tel" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Age</IonLabel>
          <IonInput type="number" />
        </IonItem>
      </IonList>
      <IonButton expand="block">Submit</IonButton>
    </form>
  </>
);

export default Input;
