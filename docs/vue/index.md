# Vue 相关

### 1. Vue3 全局挂载的方法

- 使用 `provide` 和 `inject` 实现全局挂载 **（推荐）**

在 `main.js` 中注册

```js
import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'

let app = createApp(App)

app.provide('$echarts', echarts)
app.mount('#app')
```

在其它组件中使用

```vue
<script setup>
import { inject } from 'vue'
const $echarts = inject('$echarts')

onMounted(() => {
  console.log($echarts)
})
</script>
```

- 使用 `app.config.globalProperties` 实现全局挂载 **（不推荐）**

这是对 Vue 2 中 `Vue.prototype` 使用方式的一种替代，此写法在 Vue 3 已经不存在了。与任何全局的东西一样，应该谨慎使用。

在 `main.js` 中注册

```js
import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'

let app = createApp(App)

app.config.globalProperties.$echarts = echarts
app.mount('#app')
```

在其它组件中使用

```vue
<script>
export default {
  mounted() {
    console.log(this.$echarts)
  }
}
</script>
```
