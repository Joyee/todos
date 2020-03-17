<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{counter}}</p>
    <p>{{fullName}}</p>
    <p>{{textPlus}}</p>
    <p>{{textA}}</p>
    <p>{{textB}}</p>
    <p>{{textC}}</p>
    <!-- <Todo></Todo> -->
    <!-- <router-link to="/login">login</router-link> -->
    <router-link :to="{ name: 'login' }">login</router-link>
    <!-- <router-link :to="{ name: 'app' }">app</router-link> -->
    <!-- <router-link to="/app/123">app</router-link> -->
    <router-link to="/app">app</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  data () {
    return {
      message: 'hello webpack'
    }
  },
  mounted () {
    console.log(this.$store)
    // mutations
    // let i = 1
    // setInterval(() => {
    //   // commit参数只接收两个参数 如果传递多个参数的话 第二个参数 需要包装成对象
    //   // this.$store.commit('updateCount', {num: i++})
    //   this.updateCount({
    //     num: i++
    //   })
    // }, 1000)

    // this.$store.state.count = 3 // vuex配置strict: true后 会报错

    // actions
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this.updateText('123456')
    this['a/updateText']('123456') // a模块配置属性 namespaced: true
    this['a/add']()
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // textB () {
    //   return this.$store.state.b.text
    // },
    // count () {
    //   return this.$store.state.count
    // },
    // mapState写法1
    // ...mapState(['count']),
    // mapState写法2
    // ...mapState({
    //   counter: 'count' // 重命名 count => counter
    // })
    // mapState写法3
    ...mapState({
      counter: (state) => state.count, // 可以用于计算
      textA: (state) => state.a.text,
      textB: (state) => state.b.text,
      textC: (state) => state.c.text
    }),
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    // ...mapGetters(['fullName'])
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'a/textPlus'
    })
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText'])
  }
}
</script>

<style lang='stylus' scoped>
#app {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}

#cover {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  opacity .9
  background-color #999999
  z-index -1
}
</style>