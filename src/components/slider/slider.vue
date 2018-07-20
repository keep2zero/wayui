<template>
  <div class="['hd-slider' 'hd-slider-' + direct]">
    <div class="hd-slider__track">
      <div class="hd-slider__selection" style="left: 0%; width: 60%;"></div>
      <div class="hd-slider__handle round" style="left: 60%;"></div>
      <div class="hd-slider__handle round" style="left: 0%;"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direct: {
      type: String,
      default: 'horizontal'
    }
  }
};
</script>

<style lang="less">
.hd-slider {
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &.hd-slider-horizontal {
    width: 210px;
    height: 30px;
    .hd-slider__track {
      height: 4px;
      width: 100%;
      margin-top: -2px;
      top: 50%;
      left: 0;
    }

    .hd-slider__selection {
      height: 100%;
      top: 0;
      bottom: 0;
    }

    .hd-slider__handle {
      margin-left: -15px;
      margin-top: -15px;
    }

    .hd-slider__handle.triangle {
      border-color: transparent;
      box-shadow: none;
      -webkit-box-shadow: none;
      border-width: 0 15px 15px 15px;
      width: 0;
      height: 0;
      border-bottom-color: #92cf5c;
      margin-top: 0;
    }
  }

  &.hd-slider-vertical {
    height: 210px;
    width: 30px;

    .hd-slider__track {
      width: 4px;
      height: 100%;
      margin-left: -2px;
      left: 50%;
      top: 0;
    }
    .hd-slider__selection {
      width: 100%;
      left: 0;
      top: 0;
      bottom: 0;
    }
    .hd-slider__handle {
      margin-left: -15px;
      margin-top: -15px;
    }
    .hd-slider__handle.triangle {
      border-width: 15px 0 15px 15px;
      width: 1px;
      height: 1px;
      border-left-color: #fff;
      margin-left: 0;
    }
  }
}

.hd-slider__input {
  display: none;
}
.hd-slider__tooltip-inner {
  white-space: nowrap;
}
.hd-slider__track {
  position: absolute;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
}
.hd-slider__selection {
  position: absolute;
  background-color: #5dcff3;
  border: 1px solid #5dcff3;
  border-radius: 5px;
}
.hd-slider__handle {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #eee;
  border-color: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
}
.hd-slider__handle.round {
  border-radius: 30px;
}
.hd-slider__handle.triangle {
  background: transparent none;
}
</style>
