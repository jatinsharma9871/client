<template>
  <div id="app">

    <carousel :slides="slides" :interval="3000" controls indicators></carousel>
  <router-view />
  </div>

  

</template>

<script>

// import Carousel from "./components/Carousel.vue";
export default {
  name: "App",
  // components: { Carousel },
  data: () => ({
    slides: [
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ],
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    // This defines what 1rem should be
    font-size: 62.5%;
}

body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: $color-gray;
    padding: 3rem;
    box-sizing: border-box;
}

</style>
