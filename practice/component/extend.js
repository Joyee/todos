import Vue from 'vue'

const component = {
  props: {
    active: {
      type: Boolean
    },
    propOne: {
      type: String,
      required: true
    }
  },
  template: `
    <div>
      <input type="text" v-model="text" />
      <span @handleChange="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('component mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const CompVue = Vue.extend(component)

new CompVue({
  el: '#app',
  propsData: {
    propOne: 'text1',
    active: false
  },
  data: {
    text: 0
  },
  mounted () {
    console.log('instance mounted')
  }
})
