<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8">
        <router-link to="/">
          <img class="h-9 w-auto" src="@/assets/logo.svg" alt="Company Name" />
        </router-link>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">Navigation</h3>
            <div class="space-y-1">
              <router-link
                v-for="route in navigation"
                :key="route.label"
                class="
                  block
                  with-underline
                  w-max
                  transition
                  hover:text-accent
                  capitalize
                "
                :to="route.path"
                >{{ route.label }}</router-link
              >
            </div>
          </div>
          <div>
            <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">Contact Us</h3>
            <div class="space-y-4">
              <address class="not-italic">
                Street <br />
                City, Province POSTAL CODE
              </address>
              <a
                href="tel:+19056379255"
                class="block with-underline w-max hover:text-accent"
                >Phone: xxx-xxx-xxxx
              </a>
              <a
                href="mailto:info@teccweb.com"
                class="block with-underline w-max hover:text-accent"
                >Email: email@email.com</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          mt-8
          pt-8
          border-t border-gray-200
          md:flex md:items-center md:justify-between
        "
      >
        <p class="text-base text-gray-400">
          &copy; Copyright 2021 Company Name
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
