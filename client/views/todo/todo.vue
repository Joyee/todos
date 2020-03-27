<template>
  <section class="real-app">
    <div class="tab-container">
      <!-- <tabs :value="tabValue" @change="handleChangeTab">
        <tab label="tab1" index="1">
          <span>tab content 1 <input v-model="inputContent"/></span>
        </tab>
        <tab index="2">
          <span slot="label">tab2</span>
          <span>tab content 2</span>
        </tab>
        <tab label="tab2" index="3">
          <span>tab content 3</span>
        </tab>
      </tabs> -->
      <tabs :value="filter" @change="handleChangeTab">
        <tab v-for="tab in states" :key="tab" :label="tab" :index="tab"></tab>
      </tabs>
    </div>

    <input 
      type="text" 
      class="add-input" 
      autofocus 
      placeholder="接下去要做啥子"
      @keyup.enter="addTodo" 
    />

    <Item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo" />
    <!-- <Helper
      :filter="filter"
      :todos="todos"
      @toggleFilter="toggleFilter"
      @clearAll="clearAllCompletedTodo"
    /> -->
    <Helper
      :filter="filter"
      :todos="todos"
      @clearAll="clearAllCompletedTodo"
    />
  </section>
</template>

<script>
import Item from './item.vue'
import Helper from './helper.vue'
let id = 0
export default {
  metaInfo: {
    title: 'The Todo App'
  },
  beforeRouteEnter (to, from, next) {
    console.log('todo route enter') // 钩子函数获取不到this
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo route update')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo route leave')
    // if (global.confirm('are u sure leave?')) {
    //   next()
    // }
    next()
  },
  props: ['id'],
  components: {
    Item,
    Helper
  },
  data () {
    return {
      todos: [],
      filter: 'all',
      // tabValue: 'all',
      inputContent: '',
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => todo.completed === completed)
    }
  },
  mounted () {
    // console.log(this.id)
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(
        this.todos.findIndex(item => item.id === id),
        1
      )
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompletedTodo () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    handleChangeTab (value) {
      this.filter = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px
  margin: 0 auto
  box-shadow: 0 0 5px #666
}

.add-input {
  position: relative
  margin: 0
  width: 100%
  font-size: 24px
  font-family: inherit
  font-weight: inherit
  line-height: 1.4em
  border: 0
  outline: none
  color: inherit
  padding: 6px
  border: 1px solid #999
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)
  box-sizing: border-box
  font-smoothing: antialiased
  padding: 16px 16px 16px 60px
  border: none
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03)
}

.tab-container
  background-color #fff
  padding 0 15px
</style>