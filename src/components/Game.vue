
<template>
  <div id="app">
    <div class="container-fluid">
        <div class="row">
           <div class="col"> 
          <h1>Higher &amp; Lower</h1><hr>
          <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
        </div>
            <div class="col">
               <button class="start-game-button" @click="startGame" v-on:click="game = !game">Start Game</button><br><br>
                <div v-show="game">
                <input v-model="userGuess" type="number" @keypress.enter = "userInput" :disabled="inputClosed"/>
                <button class="guess-button" @click="userInput" :disabled="inputBtnClosed">Guess</button>
                <div class="opp">
                  <p>Grinchen: {{opponent}}</p>
                  <p>Krampus: {{opponent2}}</p>
                </div>
                <br>
                </div>
            </div>
            <div class="col">
                <p>You have used {{numberOfGuess}} of 10 Guesses.</p>
                <div class="history" v-for="histor in history" :key="histor">{{ histor }}</div>
                <div id="watch-example">
                  <p></p>
                  <p>{{ answer }}</p>
                </div>
            </div>
            <router-link :to="{name:'home',params}"><button class="button_c">Home page</button></router-link>
        </div>
    </div> 
  </div>
</template>

<script>
export default {
   data() {
     return{
       question: '',
    answer: 'May the force be with you!',
  opponent: 10,
  opponent2: 10,
  game: false,
  inputClosed: false,
  inputBtnClosed: false,
  numberOfGuess: 0,
  number:0,
  userGuess:0,
  history: [],

     }
},

/*watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },*/

      methods: {
      startGame: function(){
          this.opponent= 0,
          this.opponent2= 0,
          this.game= false,
          this.inputClosed= false,
          this.inputBtnClosed= false,
          this.numberOfGuess= 0,
          this.number=0,
          this.userGuess =0,
          this.history= []
          this.number = Math.floor(Math.random() * 100)+1;
      },
      userInput: function() {

         if(this.userGuess < this.number && this.numberOfGuess < 10 ){
            if (this.opponent == this.number){
          this.answer = 'Grinchen is the winner! The correct answer is ' + this.number;
          this.inputClosed = true
          this.inputBtnClosed = true}
             else if(this.opponent2 == this.number){
                this.answer = 'Krampus is the winner! The correct answer is ' + this.number;
                this.inputClosed = true
                this.inputBtnClosed = true
        }
        else 
        this.answer = 'Wrong, guess higher!!'
          this.opponent = Math.floor(Math.random() * 100)+1;
          this.opponent2 = Math.floor(Math.random() * 100)+1;
          this.numberOfGuess++;
          this.history.push(this.userGuess)
          this.history.push(this.opponent)
          this.history.push(this.opponent2)
        }
        else if (this.userGuess > this.number && this.numberOfGuess < 10 ){
             if (this.opponent == this.number){
        this.answer = 'Grinchen is the winner! The correct answer is ' + this.number;
          this.inputClosed = true
          this.inputBtnClosed = true}
             else if(this.opponent2 == this.number){
                this.answer = 'Krampus is the winner! The correct answer is ' + this.number;
                this.inputClosed = true
                this.inputBtnClosed = true
        }
          else
          this.answer = 'Wrong guess lower'
          this.opponent -= 1;
          this.opponent2 += 11;
          this.numberOfGuess++;
          this.history.push(this.userGuess)
          this.history.push(this.opponent)
          this.history.push(this.opponent2)
        }
        else if (this.userGuess == this.number && this.numberOfGuess < 10 ){
             if (this.opponent == this.number){
          this.answer = 'Grinchen is the winner! The correct answer is ' + this.number;
          this.inputClosed = true
          this.inputBtnClosed = true}
             else if(this.opponent2 == this.number){
                this.answer = 'Krampus is the winner! The correct answer is ' + this.number;
                this.inputClosed = true
                this.inputBtnClosed = true
        }
          else
          this.answer = 'WINNER.... the correct answer is ' + this.number;
          this.numberOfGuess++;
          this.inputClosed = true
          this.inputBtnClosed = true
        }
        else if (this.numberOfGuess > 9){
          this.answer = 'GAME OVER'
          this.inputClosed = true
          this.inputBtnClosed = true
        }
      }
    }
}
</script>

<style scoped>
.history{
  background: linear-gradient(45deg,#C3A8EE,#F5C1EA);
  display: inline-block;
  padding: 0.5%;
  border: 1px solid #cccccc;
}
.col {
        
}
hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
.start-game-button{
  background: linear-gradient(45deg,#6FE594,#27A47C);
  color:#fff;
  border:none;
  position:relative;
  height:45px;
  font-size:1.3em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
}
.start-game-button:hover{
  background:linear-gradient(45deg,#92F1D5,#ABF6BD);
  color:#1AAB8A;
}
.start-game-button:before,button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
input {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.guess-button {
  color:white;
  background: linear-gradient(45deg,#FD5A49,#FDDC98);
  height: 40px;
  width:50px;
  border-radius: 4px;
}
.opp {
  font-size: 15px;
  color: grey;
}
.button_c {
  color: #494949 !important;
  text-transform: uppercase;
  background: linear-gradient(45deg,#DBFDEC,#FFC2D4);
  padding: 7px;
  border: 4px solid linear-gradient(45deg,#FB7140,#FB9951) !important;
  border-radius: 15px;
  display: inline-block;
}
.button_c:hover {
  color: #ffffff !important;
  background: linear-gradient(45deg,#DBFDEC,#FFC2D4);
  transition: all 0.4s ease 0s;
}
</style>
