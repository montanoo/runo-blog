<template>
  <main>
    <header>
      <div class="main1__haeder">RUNO</div>
      <nav class="nav__header">
        <a class="header__Link">Home</a>
        <a class="header__Link">About</a>
        <a class="header__Link">Article</a>
        <a class="header__Link">Sign in</a>
      </nav>
    </header>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background: #00000033;
  padding: 20px;
  padding-left: 40px;
  font-size: 20px;
  font-family: Spartan;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  align-items: center;
  color: white;
}

.nav__header {
  display: flex;
  justify-content: space-between;
}

.header__Link {
  margin-right: 40px;
  font-size: 15px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
}
.nav__header :hover {
  color: #d4a373;
  border: 2px;
  transition: all 1s ease-in-out;
  border-bottom: 1px solid;
}

main {
  background-image: url(assets/images/Image.jpg);
  min-height: 700px;
  background-size: cover;
}
</style>
