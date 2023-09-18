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

## 小程序

### 1. 小程序键盘弹起遮住输入框如何处理
### 2. 小程序的生命周期

## 移动端

### 1. 移动端如何实现自适应

- rem + vw、vh 方案

```scss
// 使用sass自定义单位
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

- scale

- vw、vh

## Http

### 1. get和post的区别

## 其它

### 1. 项目性能优化
### 2. 小程序如何处理安全区域和刘海屏
### 3. 大屏适配方案
### 4. 实现文件上传

## 性能优化

### 1. JS代码有哪些优化方式
### 2. 图片如何优化