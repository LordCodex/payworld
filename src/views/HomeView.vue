<template>
  <div class="home">
  <div class="hero-bg">
<NavBar />
   <HeroSection />
  </div>
   

    

  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    
    NavBar,
    HeroSection
  }
}
</script>

<style >
  
</style>