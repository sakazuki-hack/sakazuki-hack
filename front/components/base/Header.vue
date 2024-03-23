<template>
    <header class="header">
        <div class="header__title">
            <img src="https://cdn.discordapp.com/attachments/1219948957048770610/1220980066511749160/sakazuki_logo_box_rgb.png?ex=6610e94c&is=65fe744c&hm=b0ddea06be9f2e8ec0fc725daed366242553b573a8181817d9f561e7d94a0a5a&">
        </div>
        <item class="navigation">
            <ul>
                <li><a href="/#">sakazukiとは？</a></li>
                <li><a href="/#about">導入メリット</a></li>
                <li><a href="/#infomation">モデル</a></li>
                <li><a href="/#contact">コンタクト</a></li>
            </ul>
        </item>
        <button
        class="menu-button"
        :class="{ open: menuOpen }"
        @click="toggleMenu"
        >
        <span class="menu-button__bar"></span>
        <span class="menu-button__bar"></span>
        <span class="menu-button__bar"></span>
        </button>
        <transition name="fade">
        <nav
            class="nav"
            :class="{ 'sp-menu': buttonShow }"
            :style="{ right: menuOpen ? '0' : '-100%' }"
        >
            <ul class="nav__list">
            <li class="nav__item">
                <a href="/" class="nav__link nav__link--current">sakazukiとは？</a>
            </li>
            <li class="nav__item">
                <a href="/about" class="nav__link">導入メリット</a>
            </li>
            <li class="nav__item">
                <a href="/information" class="nav__link">モデル</a>
            </li>
            <li class="nav__item">
                <a href="/contact" class="nav__link">コンタクト</a>
            </li>
            </ul>
        </nav>
        </transition>
        <div v-show="menuOpen" class="overlay" @click="closeMenu"></div>
    </header>
</template>

<script>
export default {
data() {
    return {
    menuOpen: false,
    buttonShow: false,
    screenWidth: window.innerWidth
    };
},
methods: {
    toggleMenu() {
    this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
    this.menuOpen = false;
    },
    handleResize() {
    this.buttonShow = this.screenWidth < 768;
    }
},
mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
},
beforeUnmounted() {
    window.removeEventListener("resize", this.handleResize);
}
};
</script>

<style scoped>
.header {
    position: fixed;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    color: #000000;
    box-shadow: 0px 1px 5px 0px gray;
}

.header__title {
    margin: 0;
    font-size: 1.5rem;
}
.header__title img {
    width: 120px;
}
item ul {
    list-style: none;
    text-align: left;
    display: flex;
    margin: 0px;
}

item ul li {
    display: inline;
    margin-right: 20px;
    margin-left: 10px;
}

item ul li a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
}


.navigation {
    display: 1;
}
.menu-button {
    appearance: none;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 25px;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-button__bar {
    width: 100%;
    height: 3px;
    background-color: #000000;
    transition: transform 0.3s ease;
}

.menu-button.open .menu-button__bar:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
}

.menu-button.open .menu-button__bar:nth-child(2) {
    opacity: 0;
}

.menu-button.open .menu-button__bar:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
}

.nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    width: 100%;
    max-width: 300px;
    height: calc(100vh - 60px);
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
    transition: right 0.3s ease;
    right: -100%;
}

.nav__list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav__item {
    margin-bottom: 30px;
    margin-top: 10px;
}

.nav__link {
    text-decoration: none;
    color: #000000;
    font-size: 1rem;
}

.nav__link:hover {
    color: #333333;
}

.overlay {
    display: none;
}

.sp-menu {
    display: none;
}

@media (max-width: 768px) {
    .header {
        position: fixed;
        width:97%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #ffffff;
        color: #000000;
        box-shadow: 0px 1px 5px 0px gray;
    }
    .header__title {
        margin: 0;
        font-size: 1.5rem;
    }
    .menu-button {
        display: flex;
    }

    .nav {
        width: 30%;
        position: fixed;
        top: 54px;
        right: 0;
    }
    .navigation{
        display: none;
    }

    .overlay {
        display: flex;
        position: fixed;
        top: 54px;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9;
    }

    .sp-menu {
        display: block;
        transition: 0.5s;
    }

    }
</style>