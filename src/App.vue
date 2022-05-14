<script setup>
import Header from "@/components/base/Header.vue";
import Nav from "./components/nav/Nav.vue";
import Footer from "./components/base/Footer.vue";
</script>

<template>
  <Nav />
  <div class="min-h-screen">
    <router-view />
  </div>
  <Footer />
</template>
