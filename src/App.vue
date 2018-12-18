<template>
  <div id="app">
    <div id="nav">
     </div>
     <transition name="fade"><router-view/></transition>
  </div>
</template>

<style>

   body { 

     overflow: scroll;
       background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAHhJREFUGBlj0C00T2OAAt0C8/+6eebGMP4DMbH/YDZIEUgSJgFSBJNkAgv+Z5jJwMiQDlOwecX9M74RiiYQ3cg6gSbBdIIkQSYxMfxjgKgECmxeen+mb7Qi3CQGJoYzEFOQ7ATrRHIT2A0odoJUILsJ3U4U3wBNAgAnUTCd+9M9SgAAAABJRU5ErkJggg==);
       }
    
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
 transition-property: opacity;
 transition-duration: .25s;
}

.fade-enter-active {
 transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
 opacity: 0
}



</style>
