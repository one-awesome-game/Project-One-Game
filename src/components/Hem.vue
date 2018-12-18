<template>
<div class="grid-container">

  <div class="item1">
  <ul id="light">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul> 
      <h3 id="font" class="snow-bg">Hello and welcome to <strong> ONE GAME </strong> !</h3>
  </div> 
<div class="item2"><div class="txt">
         <h2>Rules of the Game!</h2>
      <p>Here you can play game against <strong>Grinchen</strong>  and <strong>Krampus</strong> <br> I will ask you a question that has a numerical answer, 
      try to guess it right! <br> psst…I’m going to help you by telling you to go higher or lower after each guess! <br>
      You have maximun 10 guesses! 
      <br> Enjoy!</p></div></div>
     
    <div class="item3">
      <div class="txt">
<h2>Settings and stuff</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
   Nihil unde sint exercitationem porro obcaecati praesentium pariatur velit,
    commodi blanditiis voluptate eos, quae officia? Repellendus quam 
    consequatur corrupti nesciunt iste excepturi!</p>
      <router-link :to="{name:'game',params}"><button>To the epic Game</button></router-link>
      </div>

    
  
  </div>
  <div class="item4">
    <div class="txt" >
      <h2>High Score!</h2>
      <p>Here are the 3 best player in the unvivers!</p>
    <ol>
      <li>Lorem 3 Points</li>
      <li>Ipsum 2 Points</li>
      <li>Dolor 1 Points</li>
    </ol>
      <button>More High Score...</button>
      </div>
</div>
   <div class="item5"></div> -->
  </div>

</template>

<script>
// @ is an alias to /src

export default {
    
}

</script>
<style scoped>

* {
    box-sizing: border-box;
}
.grid-container {
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  grid-gap: 10px;
}
.item1{
grid-column: 1 / 5;
}

#font {
  color: #fff;
  text-align: center;
  font-size: 2em;
  font-family: 'Mountains of Christmas';
  text-shadow: 0px 2px 8px rgba (255,65,185,1);
}
#light {
  text-align: center;
  white-space: nowrap;
  position: absolute;
  padding: 0%;
  width:100%;
  top:-80px;
  border-bottom: 3px solid #222;
  height: 100px;
}
 
#light li {
  position: relative;
  list-style: none;
  margin: 0% 15px;
  padding: 0%;
  display: inline-block;
  width: 15px;
  height: 30px;
  border-radius: 50%;
  top: 102px;
  animation-name: even-light;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
#light li:nth-child(odd){
  animation-name: odd-light;
}
#light li:before{
  content: '';
  position: absolute;
  width: 14px;
  height: 10px;
  border-radius: 4px;
  top:-7px;
  left: 0px;
  background-color: #222;
}
 /* @keyframes even-light {
  0%, 100% {
    background-color: rgba(255, 230, 65, 1);
    box-shadow: 0px 2px 20px 4px rgba(255, 230, 65, 1);
  }
 50% {
   background-color: rgba(255, 230, 65, 0.5);
    box-shadow: 0px 2px 20px 4px rgba(255, 230, 65, 0.3);
 }
} */
@keyframes even-light {
  0%, 100% {
    background-color: rgba(16, 168, 67, 1);
    box-shadow: 0px 2px 20px 4px rgba(25, 114, 14, 1);
  }
 50% {
   background-color:  rgba(16, 168, 67, 0.8);
    box-shadow: 0px 2px 20px 4px rgba(25, 114, 14, 0.5)
 }
}

/* @keyframes odd-light {
  50% {
    background-color: rgba(255, 65, 185, 1);
    box-shadow: 0px 2px 15px 3px rgba(255, 65, 185, 1);
  }
 0%, 100%{
   background-color: rgba(255, 65, 185, 0.5);
    box-shadow: 0px 2px 15px 3px rgba(255, 65, 185, 0.2);
 }
} */
@keyframes odd-light {
  50% {
   background-color: rgba(245, 0, 0, 1);
    box-shadow: 0px 2px 15px 3px rgba(173, 1, 24, 1);
  }
 0%, 100%{
   background-color: rgba(245, 0, 0, 0.5);
    box-shadow: 0px 2px 15px 3px rgba(173, 1, 24, 0.2);
 }
}


h3{
 color: white;
 background-color: grey;
 padding: 10px;
 border-radius: 5px;
}
button{
  margin: 25px;
  color: white;
  background-color: grey;
  padding: 5px 10px;
  border-radius: 5px;

}
.txt {
 color: grey;
 background-color: white;
 border-radius: 5px;
padding:20px;
border: 2px solid black;
}
.col {
    
}

.snow-bg {
   position: relative;
}

.snow-bg:after {
   content: '';
   display: block;
   position: absolute;
   z-index: 2;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   pointer-events: none;
   background-image: url('https://library.elementor.com/resources/christmas-snow-effect/s1.png'), url('https://library.elementor.com/resources/christmas-snow-effect/s2.png'), url('https://library.elementor.com/resources/christmas-snow-effect/s3.png');
    animation: snow 10s linear infinite;
}

@keyframes snow {
 0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
 50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
 100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}
@media (max-width: 721px){
  .item1, .item2, .item3, .item4, .item5
  {
grid-column: 1/5;
  }

}

</style>
