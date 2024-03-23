<template>
    <div class="section"></div>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-content-right">
                <div class="footer-logo">
                    <a href="#"><img src="https://cdn.discordapp.com/attachments/1219948957048770610/1220980066218016838/sakazuki_logo_box_black_rgb.png?ex=6610e94c&is=65fe744c&hm=e6d83babe51a5304aba2feb16e8e2d8113aad08fac94d36b190ee234199c0187&" alt="Twitter"></a>
                </div>
            </div>
                <div class="footer-links">
                    <ul>
                        <li class="footer-item"><a href="#conpany">運営会社</a></li>
                        <li class="footer-item"><a href="#recrut">採用情報</a></li>
                        <li class="footer-item"><a href="#promiss">利用規約</a></li>
                        <li class="footer-item"><a href="#policy">プライバシーポリシー</a></li>
                    </ul>
                </div>
            </div>
        <div class="footer-legal">
            <p>©PitPa, Inc.</p>
        </div>
    </footer>
</template>

<script>

</script>

<style>
.section{
    /* width: 100px; */
    height: 50px;
}
.footer {
    padding: 10px;
    background: rgb(51, 51, 51);
}

.footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
}
.footer-content-right{
    display: flex;
    align-items: center;
}
.footer-logo {
    width: auto;
}

.footer-logo img {
    width: 130px;
    /* max-width: 100px;  */
}

.footer-links ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
}
.footer-links a{
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.footer-item {
    position: relative;
    padding: 0 20px;
    font-size: 13px;
    
}

.footer-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #ffffff;
}

.social-icons a {
    margin: 8px;
    display: inline-block;
}

.social-icons img {
    width: 30px;
    height: auto;
}

.footer-legal p {
    color: #888;
    font-size: 12px;
    margin-left: 20px;
}


</style>