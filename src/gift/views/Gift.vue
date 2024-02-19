<template>
  <div id="app" class="container">
    <div
      v-for="(option, index) in giftOptions"
      :key="index"
      class="gift-option-container"
    >
      <GiftOption
        :imageSrc="option.initialImage"
        :finalImageSrc="option.finalImage"
        :text="option.text"
        :finalTitle="option.title"
        @clicked="handleOptionClick(index)"
      />
    </div>
  </div>
</template>

<script>
import GiftOption from '../../components/GiftOption.vue';

export default {
  name: 'App',
  components: {
    GiftOption
  },

  data() {
    return {
      giftOptions: [
        {
          id: 1,
          initialImage: 'question-mark.png',
          finalImage: 'gift1.png',
          text: '最有安全感的礼物',
          title: '充电宝'
        },
        {
          id: 2,
          initialImage: 'question-mark.png',
          finalImage: 'gift2.png',
          text: '最有味道的礼物',
          title: '螺蛳粉'
        },
        {
          id: 3,
          initialImage: 'question-mark.png',
          finalImage: 'gift3.png',
          text: '最土豪的礼物',
          title: '刮刮乐'
        },
        {
          id: 4,
          initialImage: 'question-mark.png',
          finalImage: 'gift4.png',
          text: '最性感的礼物',
          title: '口红'
        },
        {
          id: 5,
          initialImage: 'question-mark.png',
          finalImage: 'gift5.png',
          text: '最有力量的礼物',
          title: '芝士饼干'
        },
        {
          id: 6,
          initialImage: 'question-mark.png',
          finalImage: 'gift6.png',
          text: '最魅惑的礼物',
          title: '玲娜贝儿'
        },
        {
          id: 7,
          initialImage: 'question-mark.png',
          finalImage: 'gift7.png',
          text: '最水的礼物',
          title: '面膜'
        },
        {
          id: 8,
          initialImage: 'question-mark.png',
          finalImage: 'gift8.png',
          text: '最有冲击力的礼物',
          title: '破壁机'
        },
        {
          id: 9,
          initialImage: 'question-mark.png',
          finalImage: 'gift9.png',
          text: '最会吐泡泡的礼物',
          title: '无线清洗机'
        },
        {
          id: 10,
          initialImage: 'question-mark.png',
          finalImage: 'gift10.png',
          text: '最励志的礼物',
          title: '体脂秤'
        }
      ]
    };
  },
  methods: {
    handleOptionClick(index) {
      this.giftOptions[index].isOpen = true;
    }
  }
};
</script>

<style>
#app {
  background: rgba(0, 0, 0, 0.2);
  position: relative;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
}

.gift-option-container {
  width: 20vw;
  height: 20vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  /* overflow: hidden; */
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.gift-option-container.is-selected {
  opacity: 0.5;
  pointer-events: none;
}
</style>
