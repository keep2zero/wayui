<template>
  <div>
      <hd-tree :treeData="treeData" :checked="()=>{}"/>
  </div>
</template>

<script>
export default {

  data() {
    return {
      treeData: treeData()
    }
  }
  
}

function itemData() {
  return [
    {
            id: new Date().getTime(),
            name: "hello",
            child: [
              {
                id: new Date().getTime(),
                name: "hello",
                child: [],
                _expanded: false,
                _checked: false,
                _edited: true
              },
              {
                id: new Date().getTime(),
                name: "hello",
                child: [],
                _expand: false,
                _checked: false
              }
            ],
            _expand: false,
            _checked: false
          }
  ]
}
function treeData() {
  let data = [];
  for (let i = 0; i < 10; i += 1) {
    let item = {
      id: i,
      name: ["tree", i].join("-"),
      child: [],
      _expand: false,
      _checked: false,
      _edited: false,
      _plused: true,
      _deleted: true,
      
    };
    if (i % 2 == 0) {
      let id = [i, i / 2].join("-");
      item.child.push({
        id: id,
        name: ["tree", id].join("-"),
        child: [
          {
            id: new Date().getTime(),
            name: "hello",
            child: [
              {
                id: new Date().getTime(),
                name: "hello",
                child: [],
                _expand: false,
                _checked: false,
                _edited: false
              },
              {
                id: new Date().getTime(),
                name: "hello",
                child: [],
                _expand: false,
                _checked: false,
                _edited: false
              }
            ],
            _expand: false,
            _checked: false,
            _edit: false
          },
          {
            id: new Date().getTime(),
            name: "hello",
            child: [
              {
                id: new Date().getTime(),
                name: "hello",
                child: [],
                _expand: false,
                _checked: false,
                _edit: false
              },
              {
                id: new Date().getTime(),
                name: "hello",
                child: [],
                _expand: false,
                _checked: false,
                _edit: false
              }
            ],
            _expand: false,
            _checked: false,
            _edit: false
          }
        ],
        _expand: false,
        _checked: false,
        _edit: false
      });
    }
    data.push(item);
  }
  return data;
}
</script>

