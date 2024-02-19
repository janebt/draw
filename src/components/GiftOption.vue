<template>
  <div
    class="gift-option"
    @click="toggleGift"
    :style="{ '--flip-duration': flipDuration + 's' }"
  >
    <div class="flip-container">
      <div class="flipper" :class="{ flipped: isOpen }">
        <div class="front">
          <div class="wrapper">
            <img :src="imageSrc" alt="Front Image" />
          </div>
          <span class="gift-text">{{ text }}</span>
        </div>
        <div class="back">
          <div class="wrapper">
            <img :src="finalImageSrc" alt="Back Image" />
          </div>
          <span class="gift-title">{{ finalTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    finalImageSrc: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: '未知的礼物'
    },
    finalTitle: {
      type: String,
      default: '惊喜礼物'
    },
    flipDuration: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleGift() {
      console.log('this.isOpen: ', this.isOpen);
      if (!this.isOpen) {
        this.isOpen = true;
        setTimeout(() => {
          // this.isOpen = false;
        }, this.flipDuration * 1000);
      }
    }
  }
};
</script>

<style scoped>
.gift-option {
  position: relative;
  width: 100%; /* Adjust as needed */
  height: 100%; /* Adjust as needed */
  perspective: 1000px;
  cursor: pointer;
}

.flip-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.flipper {
  transition: transform 1s;
  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
}

.flipper.flipped {
  transform: rotateY(180deg); /* 翻转180度 */
}

/* 定义翻转动画，这里使用了关键帧 */
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

.flipper {
  animation: flip var(--flip-duration) s ease-in-out forwards;
}

.flipper.flipped {
  animation: flip var(--flip-duration) s ease-in-out reverse forwards;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.front {
  transform: rotateY(0deg);
  background-color: #fff;
}

.back {
  transform: rotateY(180deg);
  background-color: #f0f0f0;
}

.front img,
.back img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}

.wrapper {
  border-radius: 10px;
  overflow: hidden;
}

.gift-text,
.gift-title {
  color: yellow;
  font-size: 22px;
  position: absolute;
  top: calc(100% + 10px);
  text-align: center;
  font-weight: bold;
  margin: 5px 0; /* Adjust as needed to position text below the image */
}
</style>
