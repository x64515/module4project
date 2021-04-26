let playerName = window.prompt("What is your name?");
let startButton = document.getElementById("startButton");
let timer = setinterval(timeRemaining,1000);
countDown = getElementById("count-down");
countDown.innerHtml(timer);
const timeRemainging= (time=100)=>time-1;

questions =[{
    question: "Array's in Javascript can be used to store",
    answer:{
        wrong:[" Arrays","numbers","objects"],
        correct:"all of the above"
        }
},{
    question:""
}]
<div class= question>
<h3>
  Arrays in Javascript can be used to store
</h3>     
 <div class="form-group">
  <button class="btn" id="option1" type="submit">arrays</button>
  <button class="btn" id="option2" type="submit">objects</button>
  <button class="btn" id="option3" type="submit">strings</button>
<button class="btn" id="option4" type="submit">All of the above</button>
</div>