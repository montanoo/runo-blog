<template>
  <main class="main__Content">
    <header class="header">
      <div class="header__Wrapper">
        <h1 class="header__Title">RUNO</h1>
        <div>
          <a href="" class="header__Link">Home</a>
          <a href="" class="header__Link">About</a>
          <a href="" class="header__Link">Articles</a>
          <a href="" class="header__Link">Sign In</a>
        </div>
      </div>
    </header>
  </main>
</template>

<style setup>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

.main__Content {
  background-image: url('./assets/images/main__image.png');
  min-height: 700px;
  background-size: cover;
}

.header {
  background: #00000033;
  padding: 25px 0;
}

.header__Title {
  color: white;
  font-family: 'PT Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
}

.header__Wrapper {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  /* eje x */
  justify-content: space-between;
  /* eye y */
  align-items: center;
}

.header__Link {
  text-decoration: none;
  padding: 5px 0;
  margin-right: 15px;
  color: white;
  /* background: aqua; */
  transition: all 0.5s ease-in;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
}

.header__Link:hover {
  /* text-decoration: underline; */
  border-bottom: 1px solid #d4a373;
}
</style>
