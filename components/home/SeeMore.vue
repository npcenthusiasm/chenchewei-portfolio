<template>
  <div class="text-right mt-10 lg:mt-5">
    <router-link :to="to"
      class="inline-block text-black-900 text-sm">
      <div class="flex items-center">
        <span class="see-more relative">see more
          <span class="see-more-arrow"></span>
        </span>
        <!-- <div class="w-5">
          <img loading="lazy" src="@/assets/img/arrow.svg" alt="arrow" class="aaa">
        </div> -->
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    }
  }
}
</script>

<style  scoped>
.see-more {
  padding-right: 28px;
}

.see-more:hover .see-more-arrow:after {
  animation-name: arrowInOut;
  animation-duration: .55s;
  animation-fill-mode: forwards;
}

.see-more-arrow {
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}
.see-more-arrow:after {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  background-image: url('@/assets/img/arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
}

@keyframes arrowInOut {
  0%,
  100% {
    transform: translate(0, 0)
  }

  50%,
  60% {
    transform: translate(100%, 0)
  }

  61% {
    opacity: 0;
    transform: translate(-100%, 0)
  }

  62% {
    opacity: 1;
    transform: translate(-100%, 0)
  }
}
</style>