<template>
  <div class="NavBar">
    <div class="nav-section">
      <div class="logo">
        <h1>Payworld.</h1>
      </div>
      <div class="navlinks">
        <ul>
          <li>Service</li>
          <li>Payment</li>
          <li>Company</li>
          <li> News </li>
        </ul>
      </div>
      <div class="nav-buttons">
        <button class="navbut">Get Started</button>
      </div>
      <div class="hamburger">
        <fa icon="fas fa-bars" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
@import "../assets/css/header.css";
</style>
