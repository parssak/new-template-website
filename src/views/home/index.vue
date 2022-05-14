<template>
  <Header />
  <Container class="bg-accent-lightest">
    <h2>Hello World</h2>
  </Container>
  <Split title="Hello World" />
  <router-link :to="{ name: 'about' }"> go to about </router-link>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import Header from "@/components/base/Header.vue";
</script>
