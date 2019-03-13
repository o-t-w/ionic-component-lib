import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup
} from "@ionic/react";

import React from "react";

const Radio: React.SFC<{}> = () => (
  <>
    <h1>Radio</h1>
    <IonList>
      <IonRadioGroup>
        <IonListHeader>
          <IonLabel>Name</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Biff</IonLabel>
          <IonRadio slot="start" value="biff" checked />
        </IonItem>

        <IonItem>
          <IonLabel>Griff</IonLabel>
          <IonRadio slot="start" value="griff" />
        </IonItem>

        <IonItem>
          <IonLabel>Buford</IonLabel>
          <IonRadio slot="start" value="buford" />
        </IonItem>
      </IonRadioGroup>
    </IonList>
  </>
);

export default Radio;
