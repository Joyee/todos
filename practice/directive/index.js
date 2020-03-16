import Vue from 'vue'

new Vue({
  el: '#app',
  template: `
    <div>
      <p v-show="active">v-show</p>
      <p v-if="active">v-if</p>
      <span v-text="text"></span>
      <p v-html="html"></p>
    </div> 
  `,
  data: {
    text: 0,
    active: false,
    html: '<span>this is a html</span>'
  }
})
