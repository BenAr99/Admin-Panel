import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {collection, collectionData} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'reverse-place-admin-panel-web';
  firestore: Firestore = inject(Firestore);

  constructor() {
    const aCollection = collection(this.firestore, 'device');

    collectionData(aCollection).subscribe((v) => {
      console.log(v);
    });
  }
}
