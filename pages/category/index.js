// pages/category/index.js
const inerface = require("../../utils/urlConfig.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    navRightItems: [],
    curIndex: 0
  },

  onLoad: function (options) {
    const self = this
    wx.request({
      url: inerface.productions,
      header: {
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
        self.setData({
          navLeftItems: res.data.navLeftItems,
          navRightItems: res.data.navRightItems
        })
      }
    })
  },

  switchRightTab(e) {
    let index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
  showListView(e) {
    let txt = e.currentTarget.dataset.txt;
    //导航跳转方法
    wx.navigateTo({
      url: '/pages/list/index?title='+txt,
    })
  }
})