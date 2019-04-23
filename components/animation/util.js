/* eslint-disable no-console */
export default class Util {
  constructor(ctx, imgPaths) {
    this.ctx = ctx
    this.imgPaths = imgPaths
    this.baseImages = []
    this.images = []
    this.size = {
      cvsw,
      cvsh
    }
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
  canvasSizing(target) {
    const windowInnerWidth = window.innerWidth
    const windowInnerHeight = window.innerHeight

    target.setAttribute('width', windowInnerWidth)
    target.setAttribute('height', windowInnerHeight)

    this.size.cvsw = windowInnerWidth
    this.size.cvsh = windowInnerHeight
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
        posx: Math.random() * this.size.cvsw,
        posy: Math.random() * this.size.cvsh,
        sizew: imgBaseSizeW * aspect,
        sizeh: imgBaseSizeH * aspect,
        speedy: Math.random() * (speedMax - speedMin) + speedMin,
        angle: Math.random() * 360
      })
    }
  }
  /**
   * 1.
   * This is first called logic
   * import images and set method
   */
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

  /**
   * 2.
   * When all of images are roaded,
   * this logic start
   */
  flowStart() {
    this.setImages()
    console.log('After setImages')
    console.log(this.images)
    // setInterval(this.flow.bind(this), 10) // can be replaced to requestAnimationFrame?
  }

  flow() {
    let idx = 0
    let cos = 0
    let sin = 0
    const rad = Math.PI / 180
    this.ctx.clearRect(0, 0, this.size.cvsw, this.size.cvsh)
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
      this.ctx.setTransform(1, 0, 0, 1, 0, 0) // loopの外にあるclearRectでちゃんと全消しできるようにresetする必要がある

      if (this.images[idx].posy >= cvsh) {
        // 画面の一番下だったら
        this.images[idx].posy = -this.images[idx].sizeh
        // eslint-disable-next-line standard/computed-property-even-spacing
        this.images[idx].img = this.baseImages[
          Math.floor(Math.random() * this.baseImages.length)
        ] // 画像も切り替える

        // 下に到達したら、そこでポジションを保持？
        // 画面のどのあたりを専有しているのかを把握できるようにする
      }
    }
  }
}

const count = 60 // Can be changed
const aspectMax = 1.5
const aspectMin = 0.5
const cvsw = 900
const cvsh = 900
const imgBaseSizeW = 30
const imgBaseSizeH = 25
const speedMax = 1.2
const speedMin = 0.3
const angleAdd = 3.5
