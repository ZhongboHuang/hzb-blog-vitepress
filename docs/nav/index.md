---
layoutClass: h-nav-layout
outline: [2, 3, 4]
---

<script setup>
import HNavLinks from "./components/HNavLinks.vue"

import { NAV_DATA } from './data'
</script>

<style src="./index.scss"></style>

# 前端导航

<HNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items" />

