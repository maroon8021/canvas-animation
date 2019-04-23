/* eslint-disable no-console */
export default class Gradation {
  constructor(ctx, canvas) {
    this.ctx = ctx
    this.canvas = canvas
    this.position = {
      x: 0,
      y: 0,
      partY: 0
    }
    this.count = 0
  }
  render() {
    console.log('render')
    this.position.x = window.innerWidth
    this.position.y = window.innerHeight
    this.position.partY = window.innerHeight / 10
    window.requestAnimationFrame(this.paint.bind(this))
  }
  paint() {
    const isLast = this.count === 10
    const alphaNum = isLast ? 1 : Number('0.' + this.count)
    this.ctx.fillStyle = 'rgba(0, 121, 107, ' + alphaNum + ')'
    this.ctx.fillRect(20, 30, 60, 40)
    // this.ctx.fillRect(
    //   this.position.x,
    //   this.position.y,
    //   this.position.x,
    //   this.position.partY * (this.count + 1)
    // )
    // this.ctx.fill()
    if (!isLast) {
      this.count++
      window.requestAnimationFrame(this.paint.bind(this))
    }
  }
}

// const baseColor = '#00796B' // #00796B rgb(0,121,107)
