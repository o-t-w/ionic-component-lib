import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel
} from "@ionic/react";
import React, { Fragment } from "react";

const Card = props => {
  return (
    <Fragment>
      <h1 className="pb7 border-bottom">Card</h1>
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
      <div className="cols-2">
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
