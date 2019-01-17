import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDSTULB64nNo5gFRkHFqFLv1xfkj-g4cQY",
            authDomain: "oc-mon-blog.firebaseapp.com",
            databaseURL: "https://oc-mon-blog.firebaseio.com",
            projectId: "oc-mon-blog",
            storageBucket: "oc-mon-blog.appspot.com",
            messagingSenderId: "609236312686"
        };
        firebase.initializeApp(config);
    }

}
