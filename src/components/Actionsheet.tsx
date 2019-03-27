import { IonActionSheet, IonButton } from "@ionic/react";
import React, { useState } from "react";

const Actionsheet = props => {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <IonButton onClick={() => setShowing(true)}>show actionsheet</IonButton>
      <IonActionSheet
        isOpen={showing}
        onDidDismiss={() => setShowing(false)}
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            icon: "trash",
            handler: () => {
              console.log("Delete clicked");
            }
          },
          {
            text: "Share",
            icon: "share",
            handler: () => {
              console.log("Share clicked");
            }
          },
          {
            text: "Favorite",
            icon: "heart",
            handler: () => {
              console.log("Favorite clicked");
            }
          },
          {
            text: "Cancel",
            icon: "close",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          }
        ]}
      >
        testing
      </IonActionSheet>
    </>
  );
};

export default Actionsheet;
