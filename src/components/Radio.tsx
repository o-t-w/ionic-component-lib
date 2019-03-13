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
    <h1 className="pb7 border-bottom">Radio</h1>
    <IonList>
      <IonRadioGroup>
        <IonListHeader>
          <IonLabel>Name</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Ribena</IonLabel>
          <IonRadio slot="start" value="ribena" checked />
        </IonItem>

        <IonItem>
          <IonLabel>Lucozade</IonLabel>
          <IonRadio slot="start" value="lucozade" />
        </IonItem>

        <IonItem>
          <IonLabel>Orangina</IonLabel>
          <IonRadio slot="start" value="orangina" />
        </IonItem>
      </IonRadioGroup>
    </IonList>
  </>
);

export default Radio;
