import { IonButton, IonPopover } from "@ionic/react";
import React, { Fragment, useState } from "react";

function Popover(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>show popup</IonButton>
      <IonPopover isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
        <div className="pl10 pr10">
          <h2>This is a placeholder title</h2>
          <p>This is some content</p>
        </div>
      </IonPopover>
    </>
  );
}

export default Popover;
