/**
 * @file
 * 滚动条的功能:
 * <p>1. 统一样式功能: 通用滚动功能(监听滚动事件, 滚动位置)</p>
 * <p>2. 上载, 下拉功能</p>
 * <p>3. slider功能</p>
 */
export default class WayScroller {

  constructor(options) {
    this.el = options.el;
    this.verEl = options.verEl;
    this.horEl = options.horEl;
    this.loadingEl = options.loadingEl;
    this.refreshEl = options.refreshEl;
    this.contentEl = options.contentEl;

    this.doRefresh = options.refresh;
    this.doLoadMore = options.loadMore;

    //默认上拉, 下拉为隐藏
    this.loadingEl.style.display = 'none';
    this.refreshEl.style.display = 'none';

    //用来锁定上拉, 下拉状态
    this.locking = {
      refresh: false,
      loading: false
    }

    this.initEvent();
  }

  //初始化事件
  initEvent() {
    this.el.addEventListener("scroll", this._scroll.bind(this)); // 监听滚动事件
    this.el.parentNode.addEventListener("mouseenter",this._enter.bind(this)); //鼠标进入容器所要做的事情
    this.el.parentNode.addEventListener('mouseleave', this._leave.bind(this));
    this.verEl.addEventListener('mousedown', (e) => {
        
       e.preventDefault();
       e.stopPropagation();
       const startingTop = this.el.scrollTop;
       const startPageY = e.pageY;
       const bodyMoveEvent = (e) => {
         e.preventDefault();
         e.stopPropagation();
          
         this._dragScroll(e, startingTop, startPageY);
       }

       document.documentElement.addEventListener('mousemove', bodyMoveEvent, true);
       this._unmount(bodyMoveEvent);
    });
  }

  /**
   * @method 
   * 鼠标进入的时候
   */
  _enter() {
    const rect = this.el.getBoundingClientRect();
    if(rect.height < this.el.scrollHeight) {
      this.verEl.style.visibility = 'visible';
      this.verEl.parentNode.classList.add('way-scroller-after')
    }

    // if(rect.width < this.el.scrollWidth) {
    //   this.horEl.style.visibility = 'visible';
    // }

    this._calcBarHeight();
  }

  _leave() {
    this.verEl.style.visibility = 'hidden';
    this.verEl.parentNode.classList.remove('way-scroller-after');
  }


  /**
   * 通知信息已改变
   */
  notify() {
    this.refreshEl.style.display = 'none';
    this.locking.refresh = false;


    this.loadingEl.style.display = 'none';
    this.locking.loading = false;
    
    if((this.el.scrollHeight - this.el.getBoundingClientRect().height) === this.el.scrollTop) {
      this.el.scrollTop -= 1;  
    }
  }


  /**
   * 上拉刷新
   */
  _refresh() {
    if(this.locking.refresh || !this.doRefresh) return;

    if(this.el.scrollTop === 0) {
      this.locking.refresh = true;
      this.refreshEl.style.display = 'block';
      this.doRefresh && this.doRefresh(this);
    }  
  }

  /**
   * 下拉加载更多
   */
  _loadMore() {

    if(this.locking.loading || !this.doLoadMore) {
      return;
    }

    if((this.el.scrollHeight - this.el.getBoundingClientRect().height) === this.el.scrollTop) {
      this.locking.loading = true;
      this.loadingEl.style.display = 'block';
      this.doLoadMore && this.doLoadMore(this);
    }  

  }
  _calcBarHeight() {
    const height = this.el.getBoundingClientRect().height;

      let fullHeight = this.el.scrollHeight + 17;

      let verHeight = height / fullHeight * height;

      //需要最小化
      let okheight = verHeight;
      if (okheight < 30) {
        okheight = 30
      }
      this.verEl.style.height = okheight + 'px';
  }
  /**
   * @method 滚动事件
   */
  _scroll() {

     if(this.verEl.style.visibility !== 'visible') {
      this.verEl.style.visibility = 'visible'; //滚动时, 始终显示
      this.verEl.parentNode.classList.add('way-scroller-after');
     }
      this._refresh();
      this._loadMore();

      const height = this.el.getBoundingClientRect().height;

      let fullHeight = this.el.scrollHeight + 17;

      let verHeight = height / fullHeight * height;

      //需要最小化
      let okheight = verHeight;
      if (okheight < 30) {
        okheight = 30
      }
      this.verEl.style.height = okheight + 'px';

      const bili = (height - okheight) / (fullHeight - height); //重点计算比例
 
      const top = this.el.scrollTop * bili;
       
      this.verEl.style.top = top + 'px';
 
      this.contentEl.style.heigh = fullHeight + 'px';
  }


  /**
   * 点击滚动条时触发
   * @param {*} e 
   * @param {*} startingTop 
   * @param {*} pageY 
   */
  _dragScroll(e, startingTop, pageY) {
    const height = this.el.getBoundingClientRect().height;
    let verHeight = this.verEl.style.height || '100px';
    verHeight = parseInt(verHeight.replace('px', ''));
    let top = startingTop + ((this.el.scrollHeight - height) / (height - verHeight)) * (e.pageY - pageY);
    this.el.scrollTop = top;
  }

  _unmount(bodyMoveEvent) {
    document.documentElement.addEventListener('mouseup', (e)=>{
      document.documentElement.removeEventListener('mousemove', bodyMoveEvent, true);
      e.preventDefault();
      e.stopPropagation();
    }, true);
  }
}