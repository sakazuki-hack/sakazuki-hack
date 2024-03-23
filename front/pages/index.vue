<template>
  <div>
    <Header />
    <CatchCopy />
    <About />
    <SakazukiIntro />
    <Footer />
  </div>
</template>

<script>
// コンポーネントをインポートします
import Header from '~/components/base/Header.vue'
import Footer from '~/components/base/Footer.vue'
import About from '../components/sections/About.vue'
import CatchCopy from '~/components/sections/CatchCopy.vue'
import SakazukiIntro from '~/components/sections/SakazukiIntro.vue'

export default {
  components: {
    Header,
    Footer,
    About,
    CatchCopy,
    SakazukiIntro
  }
}
</script>

<style>
/* グローバルスタイルやページ固有のスタイルをここに追加できます */
</style>
