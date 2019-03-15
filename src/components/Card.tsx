import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonToolbar
} from "@ionic/react";
import React, { Fragment, useState } from "react";

const Card = props => {
  const [colCount, setColCount] = useState(1);

  return (
    <Fragment>
      <h1 className="pb7 border-bottom mt0">Card</h1>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonIcon name="pin" slot="start" />
          <IonLabel>ion-item in a card, icon left, button right</IonLabel>
          <IonButton fill="outline" slot="end">
            View
          </IonButton>
        </IonItem>

        <IonCardContent>
          This is content, without any paragraph or header tags, within an
          ion-cardContent element.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonItem href="#" class="activated">
          <IonIcon name="wifi" slot="start" />
          <IonLabel>Card Link Item 1 .activated</IonLabel>
        </IonItem>

        <IonItem href="#">
          <IonIcon name="wine" slot="start" />
          <IonLabel>Card Link Item 2</IonLabel>
        </IonItem>

        <IonItem class="activated">
          <IonIcon name="warning" slot="start" />
          <IonLabel>Card Button Item 1 .activated</IonLabel>
        </IonItem>

        <IonItem>
          <IonIcon name="walk" slot="start" />
          <IonLabel>Card Button Item 2</IonLabel>
        </IonItem>
      </IonCard>

      <h2>Example usage</h2>

      <IonSegment
        class="ios"
        mode="ios"
        onIonChange={e => console.log("Segment selected", e.detail.value)}
      >
        <IonSegmentButton
          mode="ios"
          checked
          onClick={() => setColCount(1)}
          value="one"
        >
          <IonLabel>One</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton mode="ios" onClick={() => setColCount(2)} value="two">
          <IonLabel>Two</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          mode="ios"
          onClick={() => setColCount(3)}
          value="three"
        >
          <IonLabel>Three</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <div
        style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
        className="cols-2"
      >
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </div>
    </Fragment>
  );
};
export default Card;
