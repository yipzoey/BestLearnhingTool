var quesV,ansV;
function Reday (){
  quesV = document.getElementById('quesbox').value;
  ansV = document.getElementById('answerbox').value;
}

document.getElementById('update').onclick = function(){
  Ready();

  firebase.database().ref('deck/flashcards').set({
    Question:quesV,
    Answer:ansV,
  });
}


