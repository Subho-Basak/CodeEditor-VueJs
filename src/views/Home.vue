<template>
<div>
    <header>
        <h1 class="banner-title"><span class="light-txt">Coddicted</span></h1>
    </header>
    <div class="hero-section">
        <span class="md-display-3">Welcome to coddicted</span>
        <span class="md-headline">Learn, implement and share</span>
        <div>
          <md-button class="md-raised md-primary" to="/login">login</md-button>
          <md-button class="md-raised" to="/signup">join now</md-button>
        </div>
    </div>
</div>
</template>
<style scoped>
header {
  position: fixed;
  top: 0;
  padding: 0 1rem;
}
</style>