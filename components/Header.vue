<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <h1 class="subtitle">RawCorpSite</h1>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="./about/index.html">About</a>
        <a class="navbar-item" href="./services/index.html">Services</a>
        <a class="navbar-item" href="./news/index.html">News</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav.navbar {
  z-index: 5;
}
</style>
