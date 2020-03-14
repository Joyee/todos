// import '../assets/css/footer.styl'
import className from '../assets/css/footer.styl'

export default {
  data () {
    return {
      author: 'xiaofeng'
    }
  },
  render () {
    return (
      <div id={className.footer}>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
