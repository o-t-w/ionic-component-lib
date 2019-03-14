import Button from "../../src/components/Button";
import { IonButton } from "@ionic/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

// export const task = {
//   id: "1",
//   title: "Test Task",
//   state: "TASK_INBOX",
//   updatedAt: new Date(2018, 0, 1, 9, 0)
// };

// export const actions = {
//   onPinTask: action("onPinTask"),
//   onArchiveTask: action("onArchiveTask")
// };

storiesOf("Button", module)
  .add("default", () => <IonButton>click</IonButton>)
  .add("full-width", () => <IonButton expand="full">click</IonButton>)
  .add("large", () => <IonButton size="large">click</IonButton>);
