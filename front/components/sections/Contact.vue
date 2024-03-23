<template>
    <div class="Contact">
        <span>コンタクト</span>
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
        font-size: 24px;
        font-weight: bold;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .container {
        display: flex;
        justify-content: center;
    }

    .TextBox {
        width: 100%;
        margin-bottom: 20px;
    }

    .btn {
        width: 100%;
        background-color: #f00;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }

</style>