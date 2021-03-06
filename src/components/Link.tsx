import { IonAnchor } from "@ionic/react";
import React from "react";

function LinkComponent() {
  return (
    <>
      <h1 className="pb7 border-bottom">Link</h1>
      <p>
        Links are{" "}
        <IonAnchor href="https://www.suntorybeverageandfood-europe.com/">
          blue and underlined.
        </IonAnchor>
      </p>
    </>
  );
}

export default LinkComponent;
