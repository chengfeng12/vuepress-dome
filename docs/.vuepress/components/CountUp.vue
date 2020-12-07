<template>
  <div>
    <ClientOnly>
      <slot name="before"></slot>
      <span ref="count"></span>
    </ClientOnly>
  </div>
</template>

<script>
// import countUp from 'countUp.js'
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
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // console.log(countUp, 'countUp')
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