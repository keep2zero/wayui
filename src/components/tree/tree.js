
/**
 * 用来处理分割树形结构数据
 *
 * @author towaywu@gmail.com
 * @date 2018-05-28 08:59:19
 * @param {array} treeData 树形结构数据
 * @param {object} stateMap 里面包含[checked, edited, expanded, deleted, plused]功能
 * @param {object} keyMap 里面包含[id, name, child]
 */
export function processTreeData(treeData, stateMap, keyMap) {
  for (let i = 0; i < treeData.length; i += 1) {
    const item = treeData[i];
    ({
      edited: item._edited,
      expanded: item._expanded,
      checked: item._checked,
      deleted: item._deleted,
      pushed: item._plused,
    } = stateMap);

    item.id = item[item[keyMap.id]];
    item.name = item[item[keyMap.name]];


    // this.$set(item, '_edited', stateMap.edited);
    // this.$set(item, '_expanded', stateMap.expanded);
    // this.$set(item, '_checked', stateMap.checked);
    // this.$set(item, '_deleted', stateMap.deleted);
    // this.$set(item, '_plused', stateMap.plused);

    // this.$set(item, 'id', item[keyMap.id]);
    // this.$set(item, 'name', item[keyMap.name]);


    // console.log("item", item, item[keyMap.child] instanceof Array)

    if (item[keyMap.child] && item[keyMap.child] instanceof Array) {
      processTreeData(item[keyMap.child], stateMap, keyMap);
    }
  }
}

/**
 * 对父类的节点做选择处理
 * @param {Object} parent 父节点
 * @param {Object} keyMap 映射的字段
 */
export function goParent(parent, keyMap) {
  // console.log("parent", parent)
  if (parent) {
    let child = parent[keyMap.child];
    let count = 0;
    for (let i = 0; i < child.length; i += 1) {
      let next = child[i];
      if (next._checked) {
        count += 1;
      }
    }

    // console.log("count", count)

    if (count === 0) {
      parent._checked = false;
    } else {
      parent._checked = true;
    }

    if (parent._parent) {
      goParent(parent._parent, keyMap);
    }
  }
}

/**
 * 对子节点的选择, 做出处理
 * @param {object} item 当前节点
 * @param {object} keyMap 映射的字段
 */
export function goChild(context, item, keyMap) {
  const child = item[keyMap.child];
  if (child) {
    for (let i = 0; i < child.length; i += 1) {
      let next = child[i];
      context.$set(next, '_checked', item._checked);
      if (next[keyMap.child]) {
        goChild(context, next, keyMap);
      }
    }
  }
}

