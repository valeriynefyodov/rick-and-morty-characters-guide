<template>
  <div class="skeleton" :style="skeletonSize" />
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 100,
    },
    height: {
      type: [Number, String],
      default: 30,
    },
  },
  computed: {
    skeletonSize() {
      return {
        width: typeof this.width === "string" ? this.width : `${this.width}px`,
        height:
          typeof this.height === "string" ? this.width : `${this.height}px`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #d6d6d6;
  border-radius: 4px;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 1.5s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
