let messages ={
  text1:"",
  text2:"",
  responses:{
    correct:"Correct: You found that !!!",
    incorrectOutofrange:"Incorrect: Your index is out of the range. Index must be less than ",
    incorrectEmpty:"Incorrect: Empty, write indexes",
    incorrect:"Incorrect: Try again ",
  }
}


let dim = 10;
let x = getRandomInt(0,dim);
let y = getRandomInt(0,dim);

let matrix  = matrixColors;
let matrixPlace = document.getElementById("matrix");

matrixPlace.innerHTML = printMatrixText(matrix,y,x);


$("#check").click(function(){
  let tryY = $("#y").val()
  let tryX = $("#x").val()
  if(x==tryX && y==tryY){
    $("#corectness").html(messages.responses.correct)
    $("#corectness").prop({class:"alert alert-success"})
    
  }
  else{
    if(tryX=="" || tryY==""){
      $("#corectness").html(messages.responses.incorrectEmpty)
    }
    else if(tryX>dim-1 || tryY > dim-1){
      $("#corectness").html(messages.responses.incorrectOutofrange + dim)
    }
    else{
      $("#corectness").html(messages.responses.incorrect)
    }

    $("#corectness").prop({class:"alert alert-danger"})
    $("#"+tryY+"_"+tryX).css({"color":"red"})
    $("#y").focus()
  }
})


$(".changeMatrix").click(function(){
  let matrixName = $(this).text();
  x = getRandomInt(0,dim);
  y = getRandomInt(0,dim);
  $(".changeMatrix").removeClass("active")
  $(this).addClass("active")

  switch (matrixName) {
    case "Color Strings":
      matrix  = matrixColors;
      matrixPlace.innerHTML = printMatrixText(matrix,y,x);
      break;
    case "Strings":
      matrix  = matrixStrings;
      matrixPlace.innerHTML = printMatrixText(matrix,y,x);
      break;
    case "Booleans":
      matrix  = matrixBooleans;
      matrixPlace.innerHTML = printMatrixText(matrix,y,x,false);
      break;
    case "Numbers":
      matrix  = matrixNumbers;
      matrixPlace.innerHTML = printMatrixText(matrix,y,x,false);
      break;
    default:
      break;
  }
})