//References
      var quesbox = document.getElementById("quesbox");
      var answerbox = document.getElementById("answerbox");

      var add = document.getElementById("add");
      var delete = document.getElementById("delete");

      function AddData (){
        set(ref(database, 'deck/flashcards').{
          Question:quesbox.value,
          Answer:answerbox.value,
        })
        .then(() => {
          alert("data added")
        });
      }
      insBtn.addEventListener("click",AddData);
