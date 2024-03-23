<template>
  <div>
    <Header />
    <CatchCopy />
    <About />
    <SakazukiIntro />
    <Over />
    <Contact />
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
import Contact from '~/components/sections/Contact.vue'
import Over from '~/components/base/OverAll.vue'

export default {
  components: {
    Header,
    Footer,
    About,
    CatchCopy,
    SakazukiIntro,
    Contact,
    Over,
  }
}
</script>

<style>
body{
  margin: 0;
  padding:0;
}
</style>
