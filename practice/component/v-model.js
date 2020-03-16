import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value', 'value1'],
  template: `
    <input type="text" @input="handleInput" :value="value1" />
  `,
  methods: {
    handleInput (e) {
      // this.$emit('input', e.target.value)
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#app',
  components: {
    CompOne: component
  },
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one @input="value = arguments[0]" v-model="value"></comp-one>
    </div>
  `
})
