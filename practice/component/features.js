import Vue from 'vue'

const component = {
  template: `
    <div class="box" :style="styles">
      <div class="header">
        header
        <slot name="header"></slot>
      </div>
      <div class="footer">
        footer
        <slot name="footer"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      styles: {
        width: '300px',
        height: '500px',
        border: '1px solid #ddd'
      }
    }
  }
}

new Vue({
  el: '#app',
  components: {
    CompOne: component
  },
  template: `
    <div>
      <comp-one>
        <p slot="header">this is a content</p>
      </comp-one>
    </div>
  `,
  data: {}
})
