<template>
  <div class="wrapper">
    <router-view />

    <div class="next" v-if="nextPage">
      <section>
        Next Project:
        <span class="next_project">
          <router-link :to="{ name: nextPage.name }">{{
            nextPage.meta.title
          }}</router-link>
        </span>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/styles/project_style.css';
</style>
