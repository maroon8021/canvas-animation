<template>
  <section class="container">
    <div class="header-part">
      <h1 class="title">
        canvas-animation
      </h1>
      <div class="canvas-field">
        <canvas id="canvas"></canvas>
      </div>
    </div>
  </section>
</template>

<script>
import Util from '../components/animation/util'
import Gradation from '../components/animation/gradation'
import leef01 from '~/assets/leef/leef_01.png'
import leef02 from '~/assets/leef/leef_02.png'
import leef03 from '~/assets/leef/leef_03.png'
// base color of leef #00796B ...?
export default {
  components: {},
  mounted: () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    const imgPaths = [leef01, leef02, leef03]
    const util = new Util(ctx, imgPaths)
    util.canvasSizing(canvas)
    window.addEventListener('resize', util.canvasSizing(canvas))
    util.loadImg()
    const gradation = new Gradation(ctx, canvas)
    gradation.render()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
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
