import Vue from 'vue'

new Vue({
  el: '#app',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>FullName: {{fullName}}</p>
      <p><input type='text' v-model='number' /></p>
      <p>firstName: <input type='text' v-model='firstName' /></p>
      <p>lastName: <input type='text' v-model='lastName' /></p>
      <p>Name: <input type='text' v-model='name' /></p>
    </div>
  `,
  data: {
    firstName: 'Joyee',
    lastName: 'Qiu',
    number: 0,
    fullName: ''
  },
  computed: {
    // name () {
    //   console.log('get new name')
    //   return `${this.firstName} ${this.lastName}`
    // }
    name: { // 不推荐 get set
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      // console.log('getname invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
