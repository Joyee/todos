import '../assets/css/footer.styl'

export default {
  data() {
    return {
      author: 'xiaofeng'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}