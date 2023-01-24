<script setup lang="ts">
</script>

<template>
  <div class="container">
    <v-menu
        :distance="-900"
        :auto-hide="false"
    >
      <div class="submenu">
        open dropdown
      </div>

        <template #popper>
          <div class="dropdown">
            <p>idk</p>
            <p>idk 2</p>
          </div>
        </template>
    </v-menu>

    <a href="https://google.com">
      google
    </a>
  </div>
</template>

<style>

html {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-direction: column;
}

.submenu {
  width: 200px;
  height: 40px;
  outline: 2px solid red;
}
.dropdown {
  width: 200px;
  height: 60px;
  outline: 2px solid green;
}

a {
  outline: 2px solid blue;
  padding: 12px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}


</style>

