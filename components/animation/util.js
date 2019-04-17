export default class Util {
  constructor(ctx, imgPaths) {
    this.ctx = ctx
    this.imgPaths = imgPaths
    this.baseImages = []
    this.images = []
  }
  static animationFrame() {
    return (
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame
    )
  }
  static cancelFrame() {
    return (
      window.cancelAnimationFrame ||
      window.mozcancelAnimationFrame ||
      window.webkitcancelAnimationFrame ||
      window.mscancelAnimationFrame
    )
  }
  setImages() {
    let aspect = 0

    for (let index = 0; index < count; index++) {
      aspect = Math.random() * (aspectMax - aspectMin) + aspectMin
      this.images.push({
        // eslint-disable-next-line standard/computed-property-even-spacing
        img: this.baseImages[
          Math.floor(Math.random() * this.baseImages.length)
        ], // 画像のランダム性はここで決める
        posx: Math.random() * cvsw,
        posy: Math.random() * cvsh,
        sizew: imgBaseSizeW * aspect,
        sizeh: imgBaseSizeH * aspect,
        speedy: Math.random() * (speedMax - speedMin) + speedMin,
        angle: Math.random() * 360
      })
    }
  }
  loadImg() {
    let loadedCount = 0
    function onLoad() {
      loadedCount++
      if (loadedCount >= this.imgPaths.length) {
        this.flowStart()
      }
    }
    this.baseImages = this.imgPaths.map(path => {
      const image = new Image()
      image.onload = onLoad.bind(this)
      image.src = path
      return image
    })
  }

  flowStart() {
    this.setImages()
    setInterval(this.flow.bind(this), 10)
  }

  flow() {
    let idx = 0
    let cos = 0
    let sin = 0
    const rad = Math.PI / 180

    this.ctx.clearRect(0, 0, cvsw, cvsh)
    for (idx = 0; idx < count; idx++) {
      this.images[idx].posy += this.images[idx].speedy
      this.images[idx].angle += Math.random() * angleAdd
      cos = Math.cos(this.images[idx].angle * rad)
      sin = Math.sin(this.images[idx].angle * rad)
      this.ctx.setTransform(
        cos,
        sin,
        sin,
        cos,
        this.images[idx].posx,
        this.images[idx].posy
      )
      this.ctx.drawImage(
        this.images[idx].img,
        0,
        0,
        this.images[idx].sizew,
        this.images[idx].sizeh
      ) // いままで固定の一枚のimgを使っていたが、this.imagesが持つimgを使う
      this.ctx.setTransform(1, 0, 0, 1, 0, 0)
      if (this.images[idx].posy >= cvsh) {
        this.images[idx].posy = -this.images[idx].sizeh
        // eslint-disable-next-line standard/computed-property-even-spacing
        this.images[idx].img = this.baseImages[
          Math.floor(Math.random() * this.baseImages.length)
        ] // 画像も切り替える
      }
    }
  }
}

const count = 40 // Can be changed
const aspectMax = 1.5
const aspectMin = 0.5
const cvsw = 900
const cvsh = 900
const imgBaseSizeW = 15
const imgBaseSizeH = 18.5
const speedMax = 1.2
const speedMin = 0.3
const angleAdd = 4
