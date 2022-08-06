import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
import {getDatabase, ref, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];

function initializeFirebase(){
      var firebaseConfig = {
       apiKey: "AIzaSyCeKhOrLs_dVKovYBSd7gy3CIYk_obYGpI",
       authDomain: "best-learning-tool-a5972.firebaseapp.com",
       databaseURL: "https://best-learning-tool-a5972-default-rtdb.firebaseio.com",
       projectId: "best-learning-tool-a5972",
       storageBucket: "best-learning-tool-a5972.appspot.com",
       messagingSenderId: "709817333674",
       appId: "1:709817333674:web:dac6b10928ea7ced5d5dd3",
       measurementId: "G-6V9GXY2H48"
     };

     firebase.initializeApp(firebaseConfig);
     firebase.analytics();
   }

   function answerInput(name, email, answers) {
     firebase.database().ref('users/' + name).set({
       username: name,
       email:email,
       answers : answers
     });
     let dbLocation = firebase.database().ref('deck/flashcards')
     adLocation.set(myFlashcards)

   }
