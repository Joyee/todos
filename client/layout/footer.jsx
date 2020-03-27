import '../assets/styles/footer.styl'
// import className from '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'xiaofeng'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
