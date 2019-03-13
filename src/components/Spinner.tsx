import { IonSpinner } from "@ionic/react";
import React from "react";

const Spinner: React.SFC<{}> = () => (
  <>
    {/*-- Dots --*/}
    <IonSpinner color="primary" name="dots" />

    {/*-- Crescent --*/}
    <IonSpinner color="primary" name="crescent" />
  </>
);

export default Spinner;
