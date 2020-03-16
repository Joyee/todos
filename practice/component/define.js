import Vue from 'vue'

const component = {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    propOne: {
      type: String,
      default: ''
    }
  },
  template: `
    <div>
      <input type="text" v-model="text" />
      <span>{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  }
}

new Vue({
  el: '#app',
  template: `
    <div>
      <comp-one :active="true" prop-one="text1"></comp-one>
      <comp-one :active="false" propOne="text2"></comp-one>
    </div>
  `,
  data: {},
  components: {
    CompOne: component
  }
})
