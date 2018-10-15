/**
 * @file
 * scroller的设想是用来控制内容区域过多, 而无法查看的问题, 及自定义控制scroller的样式.
 * scroller的功能:
 *  1. 上下滚动, 左右滚动
 *  2. 下拉刷新 (可通过鼠标滚动响应)
 *  3. 上拉加载 (可通过鼠标滚动响应)
 *  4. 左拉刷新
 *  5. 右拉刷新
 * 
 * @author towaywu@gmail.com
 * @date 2018-09-14 11:42:59
 */
import WayComponent from '@/types/component';
import WayScroller from './wayscroller';

function calcScrollbarWidth() {
  var scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  const inner = document.createElement('div');
  inner.style.width = '900px';
  inner.style.height = '900px';
  scrollDiv.appendChild(inner)
  document.body.appendChild(scrollDiv);
  // console.log("---------------->")

  // Get the scrollbar width
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  // console.log("------>", scrollbarWidth); // Mac:  15

  // Delete the DIV 
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

window.onload = function () {
  calcScrollbarWidth();
}


export default class Scroller extends WayComponent {

  props() {
    return {
      refresh: {
        type: Function
      },
      loadMore: {
        type: Function
      },
      height: {
        type: Number
      }
    }
  }

  data() {
    return {
      scroller: null
    }
  }

  mounted() {

    this.scroller = new WayScroller({
      el: this.$refs.scrollerBody,
      verEl: this.$refs.scrollerVer,
      horEl: this.$refs.scrollerHor,
      contentEl: this.$refs.scrollerContent,
      refreshEl: this.$refs.refresh,
      loadingEl: this.$refs.loading,
      refresh: this.refresh,
      loadMore: this.loadMore
    })

  }

  render(h) {
    const $slots = this.$slots.default;
    return (
      <div class="way-scroller">
        <div class="way-scroller__ver" ref="scrollerVer"></div>
        <div class="way-scroller__hor" ref="scrollerHor"></div>
        <div class="way-scroller__body" ref="scrollerBody" style={{height: `${this.height}px`}}>
          <div ref="refresh" class="way-scroller__refresh">上拉刷新</div>
          <div ref="scrollerContent">{$slots}</div>
          <div ref="loading" class="way-scroller__more">下拉刷新</div>
        </div>
      </div>
    );
  }
}

function getNumber(src) {

  if (!src) return 0;

  return parseFloat((src) + ''.replace(/[^\d]/g, ''));
}

