import { IonButton, IonItem, IonLabel, IonTextarea } from "@ionic/react";

import React from "react";

const Textarea: React.SFC<{}> = () => (
  <>
    <h1>Textarea</h1>

    <IonItem>
      <IonLabel position="stacked">Description</IonLabel>
      <IonTextarea rows={2} />
    </IonItem>

    <h2>Example usage</h2>

    <form className="max500" action="">
      <IonItem>
        <IonLabel position="stacked">Provide extra information</IonLabel>
        <IonTextarea rows={2} />
      </IonItem>

      <IonItem class="mt10">
        <IonLabel position="stacked">Further information</IonLabel>
        <IonTextarea rows={2} />
      </IonItem>
      <IonButton class="mt10" expand="block">
        Submit
      </IonButton>
    </form>
  </>
);

export default Textarea;
