<template>
  <div>
    <Header />
    <CatchCopy />
    <SakazukiIntro />
    <Footer />
  </div>
</template>

<script>
// コンポーネントをインポートします
import Header from '~/components/base/Header.vue'
import Footer from '~/components/base/Footer.vue'
import CatchCopy from '~/components/sections/CatchCopy.vue'
import SakazukiIntro from '~/components/sections/SakazukiIntro.vue'

// public.cssでhtmlの余白を消す
import "~/public/public.css";

export default {
  components: {
    Header,
    Footer,
    CatchCopy,
    SakazukiIntro
  }
}
</script>

<style>
/* グローバルスタイルやページ固有のスタイルをここに追加できます */
</style>
