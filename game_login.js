
function addUser(){
  number1_name = document.getElementById("number1").value;
number2_name= document.getElementById("number2").value;

    //Set "player1_name" using localStorage.setItem() function
    localStorage.setItem("number1",number1_name);
	  //Set "player2_name" using localStorage.setItem() function
    localStorage.setItem("number2",number2_name);

    window.location = "game_page.html";
}

