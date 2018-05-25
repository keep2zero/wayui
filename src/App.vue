<template>
  <div> 
    <h1>{{message}}, test2</h1>
    <hd-input />
    <hd-tree :treeData="treeData" :checked="()=>{}"/>
  </div>
   
</template>

<script>
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
                _expand: false,
                _checked: false
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
      _edit: false
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
export default {
  data() {
    return {
      message: "hello, world1",
      treeData: treeData()
    };
  },

  mounted() {
    console.log("mounted");
  }
};
</script>
<style>
body {
  position: relative;
  padding: 10px;
}
</style>
