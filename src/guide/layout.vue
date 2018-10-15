<template>
  <div class="layout-box">
    <way-row :gutter="12">
      <way-col :span="11">
        <div class="box"></div>
      </way-col>
      <way-col :span="1" :offset="12">
        <div class="box"></div>
      </way-col>
    </way-row>
    <br>
    <way-row>
      <way-col :span="10">
        <div class="box"></div>
      </way-col>
      <way-col :span="2" :offset="12">
        <div class="box"></div>
      </way-col>
    </way-row>
    <br>
    <way-row>
      <way-col :span="9">
        <div class="box"></div>
      </way-col>
      <way-col :span="3" :offset="12">
        <div class="box"></div>
      </way-col>
    </way-row>
    <br>
    <way-row>
      <way-col :span="8">
        <div class="box"></div>
      </way-col>
      <way-col :span="4" :offset="12">
        <div class="box"></div>
      </way-col>
    </way-row>
    <br>
    <way-row type="flex" :flow="['column', 'nowrap']" :align="['center', 'center']">
      <way-col :span="7">
        <div class="box"></div>
      </way-col>
      <way-col :align="['stretch']" :flex="[1, 1, '100%']" margin="auto 0 auto 0">
        <div class="box" style="height: 100%"></div>
      </way-col>
    </way-row>
    <br>
    <way-row type="flex" :gutter="50">
      <way-col :span="2" :order="3" >
        <div class="box">flex</div>
      </way-col>
      <way-col :flex="[1, 1, '100px']" :order="2">
        <div class="box"></div>
      </way-col>
    </way-row>
    <br>
     
  </div>
</template>

<style lang="scss">
.layout-box {
  
  .way-row, .way-row-flex {
    height: 200px;
  }

  .box {
    background: rgba(0, 160, 233, 0.5);
    height: 80px;
  }

  .way-row, .way-row-flex {
    $line: null;
    $span: 24;

    @while $span > 0 {
      
      $len: 100% - (100%/24 * $span);
      @if $span%2 == 0 {
        $line : $line, #f5f5f5 $len, transparent $len
      } @else {
        $line : $line, transparent $len, #f5f5f5 $len
      }

      $span : $span - 1;
    }

    background-image: linear-gradient(90deg, $line);
  }
}
</style>

