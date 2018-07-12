/**
 * 将数据状态作为函数来进行判断
 * @author towaywu@gmail.com
 * @date 2018-05-29 09:14:37
 */
export default {
  methods: {
    judgeState(state) {
      if (typeof state === 'function') {
        return state(this.itemData, this.index, this.depth);
      }
      return state;
    },
  },
}
