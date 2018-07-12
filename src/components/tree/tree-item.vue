<template>
  <div :class="['hd-tree-item', ((parent && (index === (parent[keyMap.child].length - 1)))) ? 'hd-tree-item-last':'']">
    <div class="hd-tree-item-line"
         :style="{left: (indent - 11) + 'px'}"></div>
    <div class="hd-tree-item-indent"
         :style="{width: indent + 'px'}">
      <div class="hd-tree-item-indent_bottom"
           v-if="hasParent"
           :style="calcStyle"></div>
      <!-- <div class="hd-tree-item-indent_left" v-if="hasParent" :style="calcLeftStyle"></div> -->
    </div>
    <div class="hd-tree-item-expand">
      <hd-icon :type="expandClass"
               v-if="hasChild"
               @click.native="handleExpand"></hd-icon>
    </div>

    <div class="hd-tree-item-check"
         v-if="judgeState(itemData._hasCheck)">
      <hd-icon :type="checkedClass"
               @click.native="handleCheck"></hd-icon>
    </div>

    <div :class="['hd-tree-item-text', itemData._selected ? 'hd-tree-item-select' : '']">

      <span class="hd-tree-item-text-show"
            v-if="!itemData._edited"
            @click="handleClick"
            @dblclick="handleDoubleClick"
            :title="itemData.name">{{subStr(itemData.name, nameLength)}}</span>
      <span class="hd-tree-item-input"
            v-if="itemData._edited">
        <input type="text"
               v-model="itemData.name"
               @keyup="inputChange"
               @blur="hoverEdit" />
        <span class="hd-tree-item-edit">
          <tree-render :render-item="extEditAction" />
        </span>
      </span>

    </div>

    <div class="hd-tree-item-action">
      <hd-icon icon="eye"
               @click.native="handleEdit"
               v-if="judgeState(itemData._hasEdit)"></hd-icon>
      <hd-icon icon="select"
               @click.native="handlePlus"
               v-if="itemData._plused"></hd-icon>
      <hd-icon icon="close"
               @click.native="handleDelete"
               v-if="judgeState(itemData._deleted)"></hd-icon>
    </div>

    <div class="hd-tree-item-child"
         v-if="judgeState(itemData._expanded)">
      <template v-for="(item, index) in child">
        <tree-item :parent="itemData"
                   :depth="depth + 1"
                   :itemData='item'
                   :key="'tree-' + depth + '-' + index + '-' + item.id"
                   :index="index" />
      </template>
    </div>
  </div>
</template>

<script>
import { goParent, goChild } from './tree.js';
import judge from './tree-judge.js';
import TreeRender from './tree-render.js';
import treeExt from './tree-ext.js';
export default {
  name: 'TreeItem',

  components: {TreeRender },

  mixins: [judge, treeExt],

  data() {
    return {
      expandStyle: ['fa-caret-right', 'fa-caret-down'],
      checkedStyle: ['far fa-square', 'fa-check-square', 'fa-minus-square'],
      editable: false,
    };
  },

  beforeUpdate() {
    this.init();
  },

  created() {
    this.init();
  },

  inject: [
    'keyMap',
    'stateMap',
    'plusEvent',
    'editEvent',
    'deleteEvent',
    'expandEvent',
    'selectObject',
    'clickEvent',
    'clickDoubleEvent',
    'limitEvent',
    'async',
    'nameLength',

    'editExtend'
  ],

  computed: {
    checkedClass() {
      console.log('checked', this.itemData._checked);
      return this.judgeState(this.itemData._checked) ? this.checkedStyle[1] : this.checkedStyle[0];
    },

    expandClass() {
      return this.judgeState(this.itemData._expanded) ? this.expandStyle[1] : this.expandStyle[0];
    },

    hasParent() {
      return this.parent != null;
    },

    child() {
      return this.itemData[this.keyMap.child];
    },

    hasChild() {
      return (this.child && this.child.length > 0) || (this.async && this.itemData[this.keyMap.size] > 0);
    },

    indent() {
      const left = this.depth * 20;

      return left;
    },

    calcStyle() {
      let width = 10;
      let right = 0;

      if (!this.hasChild) {
        width = width + 18;
        right = -18;
      }

      return {
        width: width + 'px',
        right: right + 'px',
      };
    },

    calcLeftStyle() {
      let height = 27;
      let bottom = 0;
      // let len = this.child.length;
      // const parentLen = this.parent[this.keyMap.child].length;

      return {
        height: height + 'px',
        bottom: bottom + 'px',
      };
    },
  },

  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },

    depth: {
      type: Number,
      default: 0,
    },

    parent: {
      type: Object,
      default: () => null,
    },

    index: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    init() {
      this.itemData._edited || this.$set(this.itemData, '_edited', this.stateMap.edited);
      this.itemData._expanded != undefined || this.$set(this.itemData, '_expanded', this.stateMap.expanded);
      this.$set(this.itemData, '_checked', this.itemData._checked || this.stateMap.checked);
      this.$set(this.itemData, '_deleted', this.stateMap.deleted);
      this.$set(this.itemData, '_plused', this.stateMap.plused);
      this.itemData._selected != undefined || this.$set(this.itemData, '_selected', this.stateMap.selected);
      this.itemData._hasEdit != undefined || this.$set(this.itemData, '_hasEdit', this.stateMap.hasEdit);
      this.itemData._hasCheck != undefined || this.$set(this.itemData, '_hasCheck', this.stateMap.hasCheck);
      this.itemData._parent != undefined || this.$set(this.itemData, '_parent', this.parent);

      this.$set(this.itemData, 'id', this.itemData[this.keyMap.id]);
      this.itemData._id != undefined || this.$set(this.itemData, '_id', this.itemData[this.keyMap.id] || '');
      this.itemData.name != undefined || this.$set(this.itemData, 'name', this.itemData[this.keyMap.name]);
      this.itemData[this.keyMap.child] || this.$set(this.itemData, this.keyMap.child, []);
    },

    subStr(src) {
      if (src && src.length > this.nameLength) {
        return src.substr(0, this.nameLength - 2) + '..';
      }
      return src;
    },
    setSelected() {
      if (this.selectObject.current === this.itemData) {
        return;
      }
      let prev = this.selectObject.current;
      this.selectObject.prev = prev;
      this.selectObject.current = this.itemData;
      this.selectObject.current._selected = true;
      prev && (prev._selected = false);
    },

    handleClick() {
      this.setSelected();
      this.clickEvent(this.itemData, this.parent, this.index);
    },

    handleDoubleClick() {
      this.clickDoubleEvent(this.itemData, this.parent, this.index);
    },

    handleCheck() {
      this.$set(this.itemData, '_checked', !this.itemData._checked);
      goParent(this.parent, this.keyMap);
      goChild(this, this.itemData, this.keyMap);
    },

    handleExpand() {
      this.expandEvent(this.itemData, this.parent, this.index, this.keyMap);
      this.itemData._expanded = !this.judgeState(this.itemData._expanded);
    },

    handleEdit() {
      this.setSelected();
      // this.editEvent(this.itemData, this.parent, this.index);
      this.itemData._edited = !this.itemData._edited;
    },

    handleDelete() {
      new Promise((resolve, reject) => {
        this.deleteEvent(resolve, this.itemData, this.parent, this.index);
      }).then(resp => {
        if (resp) {
          if (this.depth > 0) {
            this.parent[this.keyMap.child].splice(this.index, 1);
          } else {
            this.$parent.treeData.splice(this.index, 1);
          }
          goParent(this.parent, this.keyMap);
        }
      });
    },

    handlePlus() {
      this.itemData._expanded = true;
      if (this.child === undefined) {
        this.$set(this.itemData, this.keyMap.child, []);
      }
      const item = {
        id: '',
        _id: '',
        name: '',
        _edited: true,
        _expanded: false,
        _checked: false,
        _deleted: false,
      };
      item[this.keyMap.child] = [];
      this.child.push(item);
      this.setSelected();
    },

    judgeName(e) {
      if (this.limitEvent(e, this.itemData, this.parent, this.index)) {
        e.target.focus();
      } else {
        this.itemData._edited = !this.itemData._edited;
        this.editEvent(this.itemData, this.parent, this.index);
      }
    },

    inputChange(e) {
      if (e.keyCode === 13) {
        e.target.blur();
      }
    },

    hoverEdit(e) {
      this.judgeName(e);
    },
  },
};
</script>

