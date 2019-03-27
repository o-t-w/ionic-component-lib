import { IonButton, IonToast } from "@ionic/react";
import React, { Fragment, useState } from "react";

const Toast = props => {
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  return (
    <>
      <IonButton onClick={() => setShowToast1(true)}>Make some toast</IonButton>
      <IonButton onClick={() => setShowToast2(true)}>Show more toast</IonButton>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Congrats, your settings have been saved!"
        duration={300}
      />

      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Click to close"
        closeButtonText="close"
        position="top"
        showCloseButton={true}
      />
    </>
  );
};

export default Toast;
