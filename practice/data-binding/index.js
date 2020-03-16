import Vue from 'vue'

new Vue({
  el: '#app',
  template: `
    <div 
      :style='styles' 
      :class='[{active: isActived, default: !isActived}]'>
      {{isActived ? 'active' : 'not active'}}
    </div>
  `,
  data: {
    isActived: false,
    styles: {
      color: 'red'
    }
  }
})
