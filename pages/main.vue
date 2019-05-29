<template>
  <div>
    <section class="hero main-bg-image"></section>
    <img class="bg-image" src="~assets/kv.png" />
    <!--
    <Header />
    -->
    <section class="hero">
      <h2 class="kv-title">Page Title</h2>
    </section>
    <section class="hero main">
      <div class="columns">
        <div class="column column-left">
          <h3 class="column-left-title">Profile</h3>
        </div>
        <div class="column column-right">
          <h3>Nana</h3>
        </div>
      </div>
      <div class="columns">
        <div class="column column-left">First column</div>
        <div class="column column-right">Second column</div>
      </div>
      <div class="columns">
        <div class="column column-left">First column</div>
        <div class="column column-right">Second column</div>
      </div>
      <div class="columns">
        <div class="column column-left">First column</div>
        <div class="column column-right">Second column</div>
      </div>
      <div class="columns">
        <div class="column column-left">First column</div>
        <div class="column column-right">Second column</div>
      </div>
    </section>
  </div>
</template>

<script>
//import Header from '../components/Header.vue'
export default {
  components: {
    //Header
  },
  mounted: () => {}
}
</script>

<style lang="scss">
.main-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('~assets/kv.png');
  background-size: 500px;
  background-position: bottom center;
  min-height: 1920px;
  width: 100%;
  background-repeat: no-repeat;
  z-index: 1;
  background-color: #e4e1b0;
}

.bg-image {
  box-shadow: 10px 10px 22px -13px rgba(0, 0, 0, 0.8);
  width: 200px;
  height: 200px;
  z-index: 100;
}

.hero {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  //text-align: center;
  &.main {
    margin-top: 1000px;
    padding: 3% 0;
    z-index: 15;
  }

  & .columns {
    z-index: 15;
    & .column {
      height: 300px;
    }

    & .column-left {
      font-size: 50px;
      color: #62ac74;
      height: 100vh;
      //background-color: #fff59d;
      position: relative;
      &-title {
        position: absolute;
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
      }
    }
    & .column-right {
      height: 100vh;
      background-color: #ffffff;
      opacity: 0.8;
    }
  }
}
.kv {
  &-title {
    font-size: 30px;
    color: #62ac74;
    z-index: 10;
    text-align: center;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
