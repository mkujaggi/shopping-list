import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBDBr_Oh6000w6rPIbPWgLchkLs0Ru59k4',
      authDomain: 'ng-recipe-book-3d7d0.firebaseapp.com'
    });
  }
}
