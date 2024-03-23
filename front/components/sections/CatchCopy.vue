<template>
  <div class="catchcopy-container">
    <div class="catchcopy">
        <span data-v-7602dc6d>メンバーの未来を形作る</span><br data-v-7602dc6d>
        <span catchcopy>学生団体の活動を次世代へとつなぐ</span><br >
        <span subtitle>実績証明プラットフォーム</span>
    </div>
  </div>
</template>

<script>
export default {
  // このコンポーネントに特有のデータやメソッドがあればここに記述します。
}
</script>

<style scoped>
.catchcopy-container {
  background-image: url('https://cdn.discordapp.com/attachments/1219948957048770610/1220980737101266975/2024-03-23_15.21.27.png?ex=6610e9ec&is=65fe74ec&hm=7b798578c5c346524b1d6ff6165142ef19976efb3631358c140e070850233794&');
  background-size: cover;
  background-position: right; /* 背景画像を右側に配置 */
  display: flex;
  align-items: center;
  height: 100vh; 
  font-size: 40px;
  line-height: 54px;
  font-weight: 900;
  letter-spacing: 2px;
}

.catchcopy>span[catchcopy] {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(82deg, #69C2EE 8.51%, #1D4592 104.76%);
    background-clip: text;
    -webkit-background-clip: text;
}

.catchcopy>span[subtitle] {
    font-size: 20px;
}

.catchcopy {
  padding-left: 5%;
  max-width: 50%;
  color: #000000;
}

.catchcopy h1 {
  font-size: 3rem; /* タイトルのフォントサイズを大きくする */
  margin-bottom: 0.5em; /* タイトルの下の余白を設定する */
}

.catchcopy p {
  font-size: 1.5rem; /* パラグラフのフォントサイズを大きくする */
}
</style>
