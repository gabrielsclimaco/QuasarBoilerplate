<template lang="pug">
q-layout(ref='layout', view='lhh Lpr lFf', :right-breakpoint='1100')
  // Header
  q-toolbar(slot='header', color='secondary')
    q-btn(flat='', @click='$refs.layout.toggleLeft()')
      q-icon(name='menu')
    q-toolbar-title
      | {{$route.name || "Home"}}
  // Left Side Panel
  div(slot='left')
    q-list(no-border='', link='', inset-separator='')
      q-list-header Menu
      // Home Screen
      q-side-link(item='', to='/')
        q-item-side(icon='home')
        q-item-main(label='Home')
      // simulado
      q-side-link(item='', to='/page1')
        q-item-side(icon='bookmark')
        q-item-main(label='Page1')
      // simulado
      q-side-link(item='', to='/page2')
        q-item-side(icon='credit card')
        q-item-main(label='Page2')
      // simulado
      q-side-link(item='', to='/page3')
        q-item-side(icon='account circle')
        q-item-main(label='Page3')
  // Right Side Panel
  // <div slot="right" />
  // sub-routes get injected here:
  router-view
    // Footer
    q-toolbar(slot='footer', color='secondary')
      q-toolbar-title
        | Boilerplate
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QRouteTab,
  QBtn,
  QTabs,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QSideLink,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QRouteTab,
    QToolbarTitle,
    QBtn,
    QTabs,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QSideLink,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      foo: 'bar'
    }
  },
  computed: {

  },
  methods: {
    test () {
      this.foo = 'baaaar'
    }
  },
  mounted () {
    this.test()
  },
  beforeDestroy () {

  }
}
</script>

<style lang="stylus">

</style>
