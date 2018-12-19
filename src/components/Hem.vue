<template>
  <div class="about">
      <img class="krans" src="../assets/girlang.jpg" alt="Julgirlang">
      <h1>Hello and welcome to One Game!</h1>
      <p class="instruction-text" >Here you can play a game against Grinchen and Krampus, I will ask you a question that has a numerical answer, 
      try to guess it right! pst…I’m going to help you by telling you to go higher or lower after your guess!
      You have maximun 10 guesses! Enjoy!</p>
      <router-link :to="{name:'game',params}"><button>Start</button></router-link> <hr>
      <p>Your enemies: The Grinch and Krampus</p>
      <div class="container">
        <img src="../assets/grinch.png" alt="Grinch" class="g-image">
        <div class="overlay">
          <div class="text">Hi there!<br>My name is Grinchen. I hate Christmas.</div>
        </div>
      </div>
      <div class="container">
        <img src="../assets/krampus.png" alt="Krampus" class="k-image">
        <div class="overlay">
          <div class="text">Hello!<br>My name is Krampus. I hate everyone.</div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    
}

</script>
<style scoped>
button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background: linear-gradient(45deg,#6FE594,#27A47C);
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #6a6a6a;
  margin-bottom: 18px;
}
button:active {
  background-color: linear-gradient(45deg,#6FE594,#27A47C);
  box-shadow: 0 5px green;
  transform: translateY(4px);
}
.col {
    
}
.krans {
  margin-top: -65px; 
  width: 100%;
}
.instruction-text {
  margin: 25px; 
}
h1 {
  font-size: 200%;
  margin: -5px;
}
hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
.container {
  position: relative;
  width: 49%;
  float: left; 
}
.row::after {
  content: "";
  clear: both;
  display: table;
}

.g-image {
  display: block;
  width: 39%;
  float: right;
}
.k-image {
  display: block;
  width: 43%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: linear-gradient(45deg,#5CF0F8,#ECDDFE);
}

.container:hover .overlay {
  opacity: 1;
}
.text {
  color: white;
  font-size: 130%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
