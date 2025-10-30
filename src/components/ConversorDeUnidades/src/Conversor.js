// src/components/ConversorDeUnidades/src/Conversor.js
export default {
  name: 'ConversorDeUnidades',
  data() {
    return {
      celsius: 0,
    }
  },
  computed: {
    cNum() {
      const n = Number(this.celsius)
      return Number.isFinite(n) ? n : NaN
    },
    fahrenheit() {
      const c = this.cNum
      return (c * 9) / 5 + 32 // si c es NaN, el resultado es NaN (tipo número)
    },
    kelvin() {
      const c = this.cNum
      return c + 273.15 // si c es NaN, el resultado es NaN (tipo número)
    },
    color() {
      const c = this.cNum
      if (!Number.isFinite(c)) return 'inherit'
      if (c <= 0) return 'blue'
      if (c < 15) return 'magenta'
      return 'red'
    },
  },
}
