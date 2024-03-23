<template>
    <div class="Contact">
        <h1>導入申込</h1>
    </div>
    <div class="container">
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSezg3A4qeEZBlo8jPIGwr133wfQC_8vWvVxQtUwvabKtXNIoA/formResponse">
        <label>氏名<br>
            <input type="text" name="entry.15228836" class="TextBox" placeholder="山田太郎">
        </label>
        <label>email<br>
            <input type="email" name="entry.2147049828" class="TextBox" placeholder="sample@mail.co.jp">
        </label>
        <label>大学名<br>
            <input type="text" name="entry.1417353660" class="TextBox" placeholder="さかづき大学">
        </label>
        <label>団体名<br>
            <input type="text" name="entry.1205366948" class="TextBox" placeholder="さかづき部">
        </label>
        <label>電話番号<br>
            <input type="tel" name="entry.1881947933" class="TextBox" placeholder="012-3456-7890">
        </label>
        <label>お問い合わせ内容<br>
            <textarea name="entry.716804305" class="TextBox" placeholder="問合せ内容を記入してください。"></textarea>
        </label>
        <button type="submit" class="btn">送信</button>
      </form>
    </div>
</template>

<script>

</script>

<style>
  .Contact {
    font-size: 64px;
    font-weight: bold;
    text-align: center; /* タイトルを中央に */
    margin-top: 50px;
    margin-bottom: 30px; /* フォームとの間のスペースを調整 */
    color: #333; /* タイトルの色をダークグレーに設定 */
  }

  .Contact h1{
    font-size: 64px;
    color: #1D4592;
  }

  .container {
    display: flex;
    flex-direction: column; /* フォーム要素を縦に並べる */
    max-width: 500px; /* フォームの最大幅を設定 */
    margin: 0 auto; /* フォームをページ中央に配置 */
    padding: 20px; /* フォームの内側の余白を設定 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* フォームに影を付ける */
    border-radius: 8px; /* フォームの角を丸くする */
    background-color: #fff; /* フォームの背景色を白に設定 */
  }

  .TextBox {
    width: calc(100% - 20px); /* 全幅からpadding分を引く */
    margin-bottom: 20px; /* 要素間の余白を設定 */
    padding: 10px; /* テキストボックスの内側の余白を設定 */
    border: 1px solid #ddd; /* テキストボックスの枠線を設定 */
    border-radius: 4px; /* テキストボックスの角を丸くする */
    font-size: 16px; /* テキストボックスのフォントサイズを設定 */
  }

  .btn {
    width: calc(100% - 20px); /* 全幅からpadding分を引く */
    background-color: #0056b3; /* 送信ボタンの背景色を設定 */
    color: #fff;
    padding: 15px; /* 送信ボタンの内側の余白を設定 */
    border: none; /* 送信ボタンの枠線を取り除く */
    border-radius: 4px; /* 送信ボタンの角を丸くする */
    margin-top: 10px; /* 送信ボタンの上の余白を設定 */
    font-size: 18px; /* 送信ボタンのフォントサイズを設定 */
    transition: background-color 0.3s; /* 背景色の変化を滑らかにする */
    cursor: pointer;
  }

  .btn:hover {
    background-color: #1D4592; /* 送信ボタンにホバーした時の背景色を変更 */
  }

  label {
    display: block; /* ラベルをブロック要素に設定 */
    margin-bottom: 5px; /* ラベルとテキストボックスの間の余白を設定 */
    font-weight: bold; /* ラベルの文字を太くする */
    color: #333; /* ラベルの色をダークグレーに設定 */
  }

  input,
  textarea {
    box-sizing: border-box; /* パディングとボーダーをwidthとheightに含める */
  }
</style>