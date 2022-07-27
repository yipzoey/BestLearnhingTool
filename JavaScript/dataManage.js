//References
      var quesbox = document.getElementById("quesbox");
      var answerbox = document.getElementById("answerbox");

      var add = document.getElementById("add");
      var dele = document.getElementById("delete");

      function AddData (){
        set(ref(database, 'deck/flashcards').{
          Question:quesbox.value,
          Answer:answerbox.value,
        })
        .then(() => {
          alert("data added")
        });
      }
      add.addEventListener("click",AddData);
