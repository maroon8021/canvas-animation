<template>
  <div>
    <section class="hero main-bg-image"></section>
    <Header />
    <section class="hero main">
      <div class="columns">
        <div class="column column-left">First column</div>
        <div class="column column-right">Second column</div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {
    Header
  },
  mounted: () => {}
}
</script>

<style lang="scss">
.main-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('~assets/kv.jpg');
  background-size: 100%;
  min-height: 1920px;
  width: 100%;
  background-repeat: no-repeat;
  z-index: 1;
}

.hero {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  &.main {
    margin-top: 1000px;
    padding: 3%;
    z-index: 15;
  }

  & .columns {
    z-index: 15;
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
