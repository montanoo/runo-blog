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
    <section
      class="max-w-[1300px] mx-auto h-full flex flex-col gap-[15px] justify-end text-white pb-20"
    >
      <a href="" class="flex font-roboto font-bold">
        <div href="" class="py-[5px] px-[10px] rounded-lg bg-[#ffffff26] text-[10px]">
          ADVENTURE
        </div>
      </a>
      <h1 class="text-[36px] font-bold max-w-[530px] font-lora">
        Richird Norton photorealistic rendering as real photos
      </h1>
      <div class="flex text-[12px] gap-[10px] text-[#E5E5E5] mb-[66px]">
        <div>08.08.2021</div>
        <div class="w-[30px] h-[1px] bg-white mt-[8px]"></div>
        <div class="w-[420px]">
          Progressively incentivize cooperative systems through technically sound functionalities.
          The credibly productivate seamless data.
        </div>
      </div>
      <div class="flex gap-[15px]">
        <div class="w-[8px] h-[8px] rounded-full bg-white"></div>
        <div class="w-[8px] h-[8px] rounded-full bg-white/60"></div>
        <div class="w-[8px] h-[8px] rounded-full bg-white/60"></div>
      </div>
    </section>
  </main>
</template>

<style setup>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Linear+B&display=swap');
.main__Content {
  background-image: url('./assets/images/main__image.png');
  height: 650px;
  background-size: cover;
}

.header {
  background: #00000033;
  padding: 25px 0;
  position: fixed;
  width: 100%;
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
