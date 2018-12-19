<template>
  <div class="game">
     <div class="container-fluid">
        <div class="row">
            <div class="col"> 
              <div>
                <img class="leaf" alt="leaf" src="../assets/red.png">
              </div>
            </div>
            <div class="col">   
                <Game />
                <button class="button_L" @click="logout">Log Out</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Game from '@/components/Game.vue'
import firebase from 'firebase'


export default {
  name: 'game',
  components: {
    Game
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }

  }
}
</script>
<style scoped>
.col {
    
}

.leaf {
  width: 100%;
  z-index: -1;
  margin-top: -60px;
}
.button_L {
  color: #494949 !important;
  text-transform: uppercase;
  background: linear-gradient(45deg,#DBFDEC,#FFC2D4);
  padding: 7px;
  border: 4px solid linear-gradient(45deg,#FB7140,#FB9951) !important;
  border-radius: 15px;
  display: inline-block;
  margin-top: 0px;
}
.button_L:hover {
  color: #ffffff !important;
  background: linear-gradient(45deg,#DBFDEC,#FFC2D4);
  transition: all 0.2s ease 0s;
}
</style>
