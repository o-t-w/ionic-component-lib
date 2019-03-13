import { IonItem, IonLabel, IonTextarea } from "@ionic/react";

import React from "react";

const Textarea: React.SFC<{}> = () => (
  <>
    <h1>Textarea</h1>
    {/*-- Default textarea --*/}
    <IonTextarea />

    {/*-- Textarea in an item with a placeholder --*/}
    <IonItem>
      <IonTextarea placeholder="Enter more information here..." />
    </IonItem>

    {/*-- Textarea in an item with a floating label --*/}
    <IonItem>
      <IonLabel position="floating">Description</IonLabel>
      <IonTextarea />
    </IonItem>

    {/*-- Disabled and readonly textarea in an item with a stacked label --*/}
    <IonItem>
      <IonLabel position="stacked">Summary</IonLabel>
      <IonTextarea
        disabled
        readonly
        value="Ionic enables developers to build performant, high-quality mobile apps."
      />
    </IonItem>

    {/*-- Textarea that clears the value on edit --*/}
    <IonItem>
      <IonLabel>Comment</IonLabel>
      <IonTextarea clearOnEdit={true} />
    </IonItem>

    {/*-- Textarea with custom number of rows and cols --*/}
    <IonItem>
      <IonLabel>Notes</IonLabel>
      <IonTextarea rows={6} cols={20} placeholder="Enter any notes here..." />
    </IonItem>
  </>
);

export default Textarea;
