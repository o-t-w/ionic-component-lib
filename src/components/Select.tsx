import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption
} from "@ionic/react";

import React from "react";

const customAlertOptions = {
  header: "Pizza Toppings",
  subHeader: "Select your toppings",
  message: "$1.00 per topping",
  translucent: true
};

const customPopoverOptions = {
  header: "Hair Color",
  subHeader: "Select your hair color",
  message: "Only select your dominant hair color"
};

const customActionSheetOptions = {
  header: "Colors",
  subHeader: "Select your favorite color"
};

const objectOptions = [
  {
    id: 1,
    first: "Alice",
    last: "Smith"
  },
  {
    id: 2,
    first: "Bob",
    last: "Davis"
  },
  {
    id: 3,
    first: "Charlie",
    last: "Rosenburg"
  }
];

const Select: React.SFC<{}> = () => (
  <>
    <h1>Select</h1>
    <IonList>
      <IonListHeader>Single Selection</IonListHeader>

      <IonItem>
        <IonLabel>Select flavour</IonLabel>
        <IonSelect value="orange" okText="Okay" cancelText="Dismiss">
          <IonSelectOption value="punch">Fruit Punch</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
          <IonSelectOption value="raspberry">Raspberry</IonSelectOption>
          <IonSelectOption value="caribbean">Caribbean Burst</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>

    <IonList>
      <IonListHeader>Multiple Selection</IonListHeader>

      <IonItem>
        <IonLabel>Select flavours</IonLabel>
        <IonSelect multiple={true} okText="Okay" cancelText="Dismiss">
          <IonSelectOption value="punch">Fruit Punch</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
          <IonSelectOption value="raspberry">Raspberry</IonSelectOption>
          <IonSelectOption value="caribbean">Caribbean Burst</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>

    <IonList>
      <IonListHeader>Interface Options</IonListHeader>

      <IonItem>
        <IonLabel>Alert</IonLabel>
        <IonSelect
          interfaceOptions={customAlertOptions}
          interface="alert"
          multiple={true}
          placeholder="Select One"
        >
          <IonSelectOption value="bacon">Bacon</IonSelectOption>
          <IonSelectOption value="olives">Black Olives</IonSelectOption>
          <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
          <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
          <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
          <IonSelectOption value="onions">Onions</IonSelectOption>
          <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
          <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
          <IonSelectOption value="sausage">Sausage</IonSelectOption>
          <IonSelectOption value="Spinach">Spinach</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>Popover</IonLabel>
        <IonSelect
          interfaceOptions={customPopoverOptions}
          interface="popover"
          placeholder="Select One"
        >
          <IonSelectOption value="brown">Brown</IonSelectOption>
          <IonSelectOption value="blonde">Blonde</IonSelectOption>
          <IonSelectOption value="black">Black</IonSelectOption>
          <IonSelectOption value="red">Red</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>Action Sheet</IonLabel>
        <IonSelect
          interfaceOptions={customActionSheetOptions}
          interface="action-sheet"
          placeholder="Select One"
        >
          <IonSelectOption value="red">Red</IonSelectOption>
          <IonSelectOption value="purple">Purple</IonSelectOption>
          <IonSelectOption value="yellow">Yellow</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
          <IonSelectOption value="green">Green</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  </>
);

export default Select;
