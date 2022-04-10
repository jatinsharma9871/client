<template>
    <div>
      <h1>Image Slider</h1>
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" alt="Images" />
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "Slider",
    data() {
      return {
        images: [
          "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
          "https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          "https://images.unsplash.com/photo-1586600822178-26dec0f653a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80",
        ],
        currentIndex: 0,
      };
    },
    methods: {
      next: function () {
        this.currentIndex += 1;
      },
  
      prev: function () {
        this.currentIndex -= 1;
      },
    },
    computed: {
      currentImg: function () {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
    background: cover;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.8s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width: 100%;
    opacity: 1;
  }
  
  .fade-enter,
  .fade-leave-to {
    visibility: hidden;
    width: 100%;
    opacity: 0;
  }
  
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
    border-radius: 5px;
  }
  
  .next {
    right: 0;
  }
  
  .prev {
    left: 0;
  }
  
  .prev:hover,
  .next:hover {
    background-color: rgba(88, 88, 88, 0.6);
  }
  </style>