<template>
  <div
    id="app"
    class="app"
  >
    <div class="app__nav">
      <router-link
        class="app__link"
        to="/"
      >
        Home
      </router-link> |
      <router-link
        class="app__link"
        to="/about"
      >
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" src="./app.scss" />
