<template>
   <way-row :gutter="30">
      <way-col :span="12">
      <way-scroller :refresh="refresh" :loadMore="loadMore" :height="300">
        <div class="box">
          this is testfadsfasdjlfajsdlkjfalsdjflaksdjflkajsdflkajsldfjalsjkfkalsdjflkajsdlfkajsdlkfjasldkfjalskdjflaksjdflkajsdlfjasdlkfjasldkjfkalsdjfakls
        </div>
      </way-scroller>

      </way-col>

      <way-col>
      <way-scroller>
        <div class="box">
          this is testfadsfasdjlfajsdlkjfalsdjflaksdjflkajsdflkajsldfjalsjkfkalsdjflkajsdlfkajsdlkfjasldkfjalskdjflaksjdflkajsdlfjasdlkfjasldkjfkalsdjfakls
        </div>
      </way-scroller>

      </way-col>
   </way-row>
 
</template>

<script>
export default {

  methods: {
    refresh(scroller) {
    //  console.log(scroller, this);
     setTimeout(() => scroller.notify(), 5000);
    },

    loadMore(scroller) {
      setTimeout(() => scroller.notify(), 5000);
    }
  }
};
</script>

<style scoped>
.box {
  height: 12000px;
  /* width: 10000px; */
  /* background: green; */
  word-break: break-all;
}
</style>
