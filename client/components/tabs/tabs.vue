<script>
import Pane from './pane.vue'
export default {
  name: 'Tabs',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  // provide () {
  //   return {
  //     value: this.value
  //   }
  // },
  data () {
    return {
      panes: []
    }
  },
  components: {
    Pane
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  },
  render () {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <Pane panes={this.panes} />
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>
