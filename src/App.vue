<template>
  <div id="app">
    <!-- access root props via $root -->

    <pay-now />
    <!-- <router-view /> -->
  </div>
</template>

<script>

import PayNow from '@/components/pay-now'

export default {
  props: ['title'],
  components: {
    PayNow
  },
  data () {
    return {
      activeTab: ''
    }
  }
}
</script>
