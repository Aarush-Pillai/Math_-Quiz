player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0;
player2_score = 0;

var answer_turn = "player2"
var question_turn = "player1"

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score + " :";
document.getElementById("player2_score").innerHTML = player2_score + " :";

document.getElementById("questionturn").innerHTML = "Question Turn - " + player1_name
document.getElementById("answerturn").innerHTML = "Answer Turn - " + player2_name


function send()
{
    var question = document.getElementById("wordinputs").value 
    getanswer = document.getElementById("answer").value
    question_word = "<h4 id='word_display'> Q. "+question+"</h4>"
    input_box = "<br>Answer : <input type= 'text' id= 'input_check_box'>"
    check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input_box + check_button
    document.getElementById("output").innerHTML = row;
    document.getElementById("wordinputs").value = "";
    document.getElementById("answer").value = "";

}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer .toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer == getanswer)
    {
        if(answer_turn == "player1")
        {

            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else
        {

            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score

        }
    }
        if(question_turn == "player1")
        {
            
            answer_turn = "player1"
            document.getElementById("answerturn").innerHTML = "Answer Turn -" + player1_name
            question_turn = "player2"
            document.getElementById("questionturn").innerHTML = "Question Turn -" + player2_name

        }
    
        else
        {

            answer_turn = "player1"
            document.getElementById("answerturn").innerHTML = "Answer Turn -" + player1_name
            question_turn = "player1"
            document.getElementById("questionturn").innerHTML = "Question Turn -" + player1_name

        }
    
                document.getElementById("output").innerHTML = "";
}

