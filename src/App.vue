<template>
  <main>
    <header class="w-full fixed justify-end text-white bg-black/25">
      <div class="max-w-[1300px] mx-auto flex justify-between items-center py-4">
        <div class="main__header">RUNO</div>
        <nav class="nav__header">
          <a class="header__Link">Home</a>
          <a class="header__Link">About</a>
          <a class="header__Link">Article</a>
          <a class="header__Link">Sign in</a>
        </nav>
      </div>
    </header>
    <section class="max-w-[1300px] mx-auto h-full pt-80">
      <span
        class="py-[10px] px-[5px] text-white bg-gray font-Roboto bg-white bg-opacity-30 rounded-full"
      >
        Adventure
      </span>
      <div class="py-[25px] max-w-[600px] text-white text-4xl font-Lora font-bold">
        Richird Norton photorealistic rendering as real photos
      </div>
      <section class="flex text-center gap-[20px] text-base">
        <div class="py-[5px] text-white font-Lora">08.08.2021</div>
        <div class="w-[60px] h-0 border-t border-white mt-4"></div>
        <div class="py-[5px] max-w-[450px] text-left text-white font-Lora">
          Progressively incentivize cooperative systems through technically sound functionalities.
          The credibly productivate seamless data.
        </div>
      </section>
      <section class="flex">
        <div class="rounded-full bg-white w-4 h-4"></div>
        <div class="rounded-full bg-white opacity-25 ms-5 w-4 h-4"></div>
        <div class="rounded-full bg-white opacity-25 ms-5 w-4 h-4"></div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background: #00000033;
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
