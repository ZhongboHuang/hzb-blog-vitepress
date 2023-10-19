# 前端面试题

## 浏览器

### 1. 浏览器的缓存机制

**强缓存和协商缓存**

### 2. 什么是浏览器的重绘和重排

**重绘**：当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。

**重排**：当DOM的变化影响了元素的几何信息(DOM对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排,重排也叫回流.

### 3. Http请求中常见的Content-Type类型

- application/x-www-form-urlencoded

最常见的POST提交数据的方式。原生Form表单，如果不设置enctype属性，默认为application/x-www-form-urlencoded方式提交数据。

- application/form-data

Form表单enctype属性设置为multipart/form-data，它会将表单的数据处理为一条消息，以标签为单元，用分隔符（这就是boundary的作用）分开。

这种方式既可以上传键值对，也可以上传文件，甚至多个文件。

- application/json

告诉服务端消息主体是序列化后的JSON字符串。

- text/xml

XML的作用不言而喻，用于传输和存储数据，它非常适合万维网传输，提供统一的方法来描述和交换独立于应用程序或供应商的结构化数据。

- binary

二进制文件类型

### 4. 从输入url到浏览器显示页面的过程中都发生了什么

- **URL解析**

- **缓存判断**

- **DNS解析**

- **获取MAC地址**

- **TCP三次握手**

- **HTTPS握手**

- **返回数据**

- **页面渲染**

根据html构建DOM树 -> 根据css文件构建CSSOM树 -> 遇到script标签判断是否含有defer和async属性，否则会阻塞页面渲染 -> 构建渲染树
-> 根据渲染树布局 -> 绘制

- **TCP四次挥手**

## Css

### 1. 实现垂直居中的方式

```html
<div class="box">
  <div class="son"></div>
</div>

<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```
### 2. rem, em, vw, px, pt 分别是什么含义

**rem**: HTML根元素字体大小的相对单位

**em**: 相对长度单位，相对于当前对象内文本的字体尺寸，指的是字符宽度的倍数，用法类似百分比，如：0.8em, 1.2em,2em等。通常1em=16px

**vw**: 100vw 为当前屏幕的宽度

**px**: 每英寸像素数

**pt**: point，磅，是一个物理长度单位，指的是72分之一英寸。pt=1/72(英寸), px=1/dpi(英寸)

## Javascript

### 1. 如何判断是Object还是Array?

使用 `Object.prototype.toString.call()`，**Object** 返回 `'[object Object]'`，**Array** 返回 `'[Object Array]'`

### 2. 闭包和闭包的缺点?


### 3. call, bind, apply 的作用和区别?

**作用**：用来改变函数内部`this`的指向

**bind 和 call/apply 的区别**：`bind`会返回`fn`的一个拷贝，并且不会立即执行；`call/apply`会立即执行并返回`fn`的返回值

**call 和 apply** 的区别：传给`fn`的参数写法不同，`call`第一个参数为函数上下文也就是`this`，后面参数为函数本身的参数；`apply`的第一个参数也是`this`，第二个参数为函数参数组成的数组。


### 4. 原型链是什么?
### 5. JavaScript的事件循环机制
### 

## Typescript

### 1. ts中泛型的使用场景

**数据结构的抽象化：** 使用泛型可以创建通用的数据结构，例如数组、堆栈（stack）、队列（queue）等。泛型使得这些数据结构可以适应不同类型的数据，提高代码的可重用性和灵活性。

**函数的参数和返回值类型：** 通过使用泛型，可以编写更通用的函数，可以在多个类型上工作。例如，一个通用的排序函数可以接受一个数组和一个比较函数作为参数，以便可以对不同类型的数组进行排序。

**类的泛型：** 类也可以使用泛型来增加灵活性和可重用性。通过在类的定义中使用泛型参数，可以创建可以处理不同类型数据的通用类。例如，一个通用的容器类可以存储任意类型的数据。

**接口的泛型：** 接口也可以使用泛型来定义通用的数据结构和函数签名。这使得接口可以适应多个类型，提供更灵活的接口定义。

**类型约束和条件：** 泛型可以与类型约束和条件一起使用，以限制泛型参数的类型。通过使用类型约束，可以确保特定属性或方法在泛型类型中存在。

## Vue

### 1. vue的通信方式，父子、爷孙、兄弟、顶级?

父子: props/emits; v-model; defineExpose; $children/$parent; ref/refs

爷孙(多层级): $attrs/$listeners(vue3中取消了$listeners); provide/inject

兄弟: vuex、pinia

顶级: eventBus/mitt; localStorage/sessionStorage

### 2. v-for使用中为什么不建议使用index作为key?
### 3. diff算法中key的作用?
### 4. 双向数据绑定是如何实现的?
### 5. 如何实现v-model?
### 6. 什么是diff算法?
### 7. 解释下虚拟DOM?Vue3中虚拟DOM的变化?

在 Vue.js 中，虚拟 DOM（Virtual DOM）是一个非常重要的概念。虚拟 DOM 是一种编程概念，在这里用 JavaScript 对象来代表DOM元素和嵌套关系，从而能够更快、更高效地操作DOM。

虚拟DOM本质上是JavaScript对象，通过渲染函数或者模板转化而成的。每个 Vue 组件都会生成对应的虚拟DOM节点，并进行管理。

当数据变化时，Vue会创建一个新的虚拟DOM树，然后将这个新的DOM树与旧的DOM树进行比较，这一步叫做“diffing”。经过diff算法后，Vue 会找出两个树的差异，然后用最少的 DOM 操作去更新真实的 DOM，这一步叫做"patching"。

使用虚拟DOM的优点是：

高效：由于只是在JavaScript层面进行计算，跳过了浏览器的布局和绘制阶段，操作起来相对来说更加快速。
易于管理状态：Vue的响应式系统把状态管理和视图渲染分离，使得开发动态页面变得简单方便。
跨平台：虚拟 DOM 不仅可以映射到 HTML DOM，也可以映射到其他的平台，如 weex 或者 小程序。
总的来说，虚拟DOM是Vue中的一种核心技术，可以实现高效率的DOM更新，从而提高前端性能。

---

Vue 3中对虚拟DOM进行了大量优化和改进，以提高其性能并使其更易于使用。下面来详细了解一下 Vue 3的虚拟DOM。

更快的diff算法: Vue 3中的diff算法更加高效，通过更智能的方式比较节点的变化，例如它可以跳过静态节点（不发生变化的节点），只对动态节点进行diff运算，从而减少不必要的计算。

基于静态树提升：在编译时，Vue 3可以检测出哪些部分是静态的，然后把这些静态部分提升出去，避免在每次重渲染时都重新生成节点。

基于块的更新策略：Vue.js 3引入了新的编译策略，将模板划分为多个独立的“块”。每个块只关注自己所依赖的状态，当这些状态发生变化时才会重新渲染。这使得Vue.js 3的渲染系统变得更加高效。

Fragments：在Vue 3中，你可以返回多个根节点。在Vue 2 和以前的版本中，每个组件需要有一个单一的根元素，这在某些情况下会造成不便。在Vue 3中，这个限制被取消了，你可以在单文件组件或者渲染函数中返回多个根节点，这就是Fragments的概念。

对于Portal和Suspense等新特性的支持：Portal能让我们将子组件渲染到DOM节点的任何位置，而不仅仅是当前组件的DOM树中。Suspense则是一种用于管理异步依赖的新机制。

总的来说，虚拟DOM在Vue 3中得到了显著的改进，使得Vue 3的效率和性能都有所提高。

### 8. vue的生命周期?

- beforeCreate 钩子函数

在 beforeCreated 钩子函数中，组件实例已经被创建了，但是还没有初始化完成，此时 $data 和 $props 还不可用。

beforeCreated 钩子函数常用于执行一些组件实例化阶段的操作，例如配置全局事件监听器或增加一些自定义的原型方法。

- created 钩子函数

在组件实例创建之后、数据观测 (data observation) 和事件/生命周期监听设置之前被调用。

在 created 阶段，组件实例已经完成了初始化，但尚未挂载到 DOM 上。

在 created 钩子中，您可以执行一些初始化逻辑、异步请求数据等操作。

不保证能访问到真实的 DOM 元素，因为该组件还没有被渲染到页面上。

- mounted 钩子函数

在组件被挂载到 DOM 后调用。

在 mounted 阶段，组件实例已经被挂载到了页面上，可以访问到真实的 DOM 元素。

在 mounted 钩子中，您可以执行一些需要操作 DOM 元素的任务，如初始化第三方库、注册事件监听器等。

## 小程序

### 1. 小程序键盘弹起遮住输入框如何处理
### 2. 小程序的生命周期

## 移动端

## Http

### 1. get和post的区别

- get 的请求参数以查询字符串的形式附加在URL的末尾，而 post 的请求参数在请求体中
- get 请求参数有长度限制，而 post 请求参数没有长度限制
- get 请求参数会被浏览器主动缓存，而 post 请求不会，除非手动设置
- get 请求对数据的安全性不高，因为参数直接暴露在 URL 上，而 post 请求的数据在请求体中，相对安全

## 其它

### 1. 项目性能优化

- 延迟加载：将非关键资源延迟加载，如图片懒加载
- 压缩资源：压缩代码、压缩图片
- 合理使用资源预加载和预获取
```html
// 预加载
<link rel="preload" href="path/to/resource.css" as="style">
// 预获取
<link rel="prefetch" href="path/to/next-page.css">
``` 
- 异步加载JavaScript，以免阻塞页面渲染（慎用）

### 2. 小程序如何处理安全区域和刘海屏
### 3. 屏幕适配方案

- rem + vw、vh 方案

```scss
/* 
  移动端适配方案
  使用sass自定义单位
*/ 
@use "sass:math";

@function pxToRem($px) {
	@return math.div($px, 16) + rem;
}

// 375*812
@function pxToVW($px) {
	@return math.div($px, 3.75) + vw;
}

@function pxToVH($px) {
	@return math.div($px, 8.12) + vh;
}
```

- 使用 postcss-pxtorem + amfe-flexible

1. 安装

```shell
npm install postcss-pxtorem --save
npm install amfe-flexible --save
npm install autoprefixer --save
```
2. 在 `main.js` 中引入依赖

```js
import 'amfe-flexible'
```

3. 在 `vite.config.js` 中配置

```js
import { defineConfig } from 'vite'
import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";

export default defineConfig({
  ...
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
          ],
        }),
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 192, // 192表示1920设计稿
          propList: ["*", "!border"], //  除 border 外所有 px 转 rem
          selectorBlackList: [".el-"], // 过滤掉el-开头的class，不进行rem转换
          exclude: "/node_modules", // 忽略包文件转换rem
        }),
      ],
    },
  },
})
```

- scale 方案

```js
/* 
  默认大屏为 1920 * 1080
  transform: scale 方案
  固定宽高比的web应用，如大屏或者固定窗口业务应用
 */
const getScale = (width, height) => {
  // 1.根据当前屏幕大小计算出缩放比例
  const scale = Math.min(
    window.innerWidth / width,
    window.innerHeight / height
  )
  return scale
}
// 获取根元素
const root = document.documentElement
const setScale = (domElement, width = 1920, height = 1080) => {
  const scale = getScale(width, height)
  // 2.设置元素的缩放比例
  domElement.style.transform = `scale(${scale})`
  // 3.设置元素的宽高
  domElement.style.width = `${width}px`
  domElement.style.height = `${height}px`
}
// 4.监听屏幕大小变化，重新计算缩放比例
window.addEventListener('resize', () => {
  setScale(root)
})
// 5.初始化
setScale(root)
```
### 4. 实现文件上传

## 性能优化

### 1. JS代码有哪些优化方式
### 2. 图片如何优化