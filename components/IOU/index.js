// components/IOU/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideBaitiao: { // 是否隐藏白条的遮罩
      type: Boolean,
      value: true
    },
    baitiao: { // 分期内容的数据
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 隐藏白条弹框
    hideBaitiaoView(e) {
      if (e.target.dataset.target == "self") {
        this.setData({
          hideBaitiao: true
        })
      }
    },
    //选择白条
    selectItem(e) {
      let index = e.currentTarget.dataset.index;
      let baitiao = this.data.baitiao;
      //点击事件把白条全设置为false
      for(let i in baitiao) {
        baitiao[i].select = false
      }
      baitiao[index].select = !baitiao[index].select
      this.setData({
        baitiao: baitiao,
        selectIndex: index
      })
    },
    //点击立即打白条部分
    makeBaitiao() {
      this.setData({
        hideBaitiao: true
      })
      const selectItem = this.data.baitiao[this.data.selectIndex]
      //事件传递
      this.triggerEvent("updateSelect",selectItem)
    }
  }
})
