import { IonCheckbox, IonItem, IonLabel, IonList } from "@ionic/react";

import React from "react";

const Checkbox = props => {
  return (
    <>
      <h1>Checkbox</h1>
      <IonList>
        {/*-- Default Checkbox --*/}
        <IonItem lines="none">
          <IonLabel>Sign up for marketing emails</IonLabel>
          <IonCheckbox />
        </IonItem>

        {/*-- Disabled Checkbox --*/}
        <IonItem lines="none">
          <IonLabel>Sign up for marketing emails</IonLabel>
          <IonCheckbox disabled={true} />
        </IonItem>
        {/* 
        <IonItem lines="none">
          <IonLabel>Sign up for marketing emails</IonLabel>
          <IonCheckbox color="primary" />
        </IonItem>

      <IonItem lines="none">
          <IonLabel>Sign up for marketing emails</IonLabel>
          <IonCheckbox color="secondary" />
        </IonItem>

        <IonItem lines="none">
          <IonLabel>Sign up for marketing emails</IonLabel>
          <IonCheckbox color="danger" />
        </IonItem>

        <IonItem lines="none">
          <IonLabel>Sign up for marketing emails</IonLabel>
          <IonCheckbox color="light" />
        </IonItem>

        <IonItem lines="none">
          <IonLabel>Sign up for marketing emails</IonLabel>
          <IonCheckbox color="dark" />
        </IonItem> */}
      </IonList>
    </>
  );
};

export default Checkbox;
