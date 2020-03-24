import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

let seek = 0
let instances = []

const removeInstance = (instance) => {
  if (!instance) return
  const index = instances.findIndex((item) => item === instance)

  instances.splice(index, 1)

  let len = instances.length

  if (len <= 1) return
  const removeHeight = instance.vm.height

  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
  }
}

const notify = (options) => {
  if (Vue.prototype.$isServer) return
  const {
    autoClose,
    ...rest
  } = options
  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })
  instance.id = `notification_${seek++}`
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)

  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })

  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })

  return instance.vm
}

export default notify
