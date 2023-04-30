<script setup>
import { ref } from "vue"

import MainHeader from '@/components/MainHeader.vue';
import ButtonComp from '@/components/ButtonComp.vue';
import Listing from '@/components/Listing/Listing.vue'
import DataFetch from '@/components/DataFetch.vue'

const title = 'Ford Otosan';
const subtitle = 'Full Stack Gelecek Tasarimcilari';

const buttonHandler = () => console.log('App.vue Button Handler Action 🦄');

const emoji = ref('🍕🍕🍕🍕🍕🍕');
const changeEmoji = () => {
  emoji.value = '🍔🍔🍔🍔🍔';
  console.log('Changed Emoji', emoji);
}

console.log('App.vue Console log 👻');
</script>

<template>
  <main>

    <h1>{{ title }} 🍕 (H1)</h1>
    <h2>{{ subtitle }} 🌭 (H2)</h2>

    <ButtonComp :text="'Eat Me ' + emoji" color="tertiary" @action="changeEmoji"></ButtonComp>

    <MainHeader :title="title" :subtitle="subtitle">
      <template #additional>
        <div class="description slot">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas! Tempore provident, quidem et
            minus quia error, quo, beatae facilis harum quam natus recusandae excepturi necessitatibus saepe. Dolorem
            minima possimus porro, quidem eum necessitatibus, laborum quae sit magni similique officia?</p>
          <p>Sint deleniti sit, mollitia, corrupti animi quis sapiente perspiciatis laborum sed maiores exercitationem
            error ipsa. Ratione officiis, atque in iusto totam soluta quod natus sequi, placeat quis vero magni quibusdam
            a sapiente nobis consequuntur! Consequatur impedit repudiandae consequuntur perspiciatis consectetur?</p>
          <p>Quasi nisi, magnam reprehenderit impedit tempora dolorem cupiditate accusantium adipisci dolor facilis
            obcaecati. Pariatur sequi doloribus quia sapiente, nostrum temporibus laudantium expedita quo quos iusto nisi
            accusantium sunt enim maxime, minus labore fugit tempore odit asperiores dolorum consequuntur voluptatum
            consequatur.</p>
          <ButtonComp text="🏄🏼 Surf Button"></ButtonComp>
        </div>
      </template>
    </MainHeader>
    <ButtonComp text="Another Click Me Button" color="secondary" @action="buttonHandler"></ButtonComp>

    <Listing></Listing>

    <DataFetch></DataFetch>

  </main>
</template>

<style lang="scss" scoped>
.description {
  position: relative;
  margin: 20px;
  padding: 20px;
  border: 2px solid lightgray;
  font-size: 24px;
  line-height: 32px;
  font-weight: 200;

  &.slot::before {
    content: 'Component slot';
    position: absolute;
    top: 0;
    left: 0;

    padding: 2px 8px;

    background-color: lightblue;
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;

  }
}
</style>
