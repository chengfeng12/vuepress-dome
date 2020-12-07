<template>
  <div>
    <ClientOnly>
      <slot name="before"></slot>
      <span class="count" ref="count" :style="style"></span>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 100
    },
    decimalPlaces: {
      type: Number,
      defautl: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    style: String
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      import('countUp.js').then(module => {
        this.$nextTick(() => {
          this.counter = new module.CountUp(this.$refs.count, this.endVal, {
            startVal: this.startVal,
            decimalPlaces: this.decimalPlaces,
            duration: this.duration,
          })

          this.start()
        })
      })
    },
    start() {
      this.counter.start()
    }
  },
  destroyed() {
    this.counter.reset()
    this.counter = null
  }
}
</script>

<style lang="stylus">
.count {
  background: linear-gradient(to right, red, blue);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 40px;
}
</style>