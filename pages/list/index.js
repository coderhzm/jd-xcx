const inerface = require("../../utils/urlConfig.js")
// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const self = this
    wx.setNavigationBarTitle({
      title: options.title,
    }),
    wx.showLoading({
      title: '加载中...',
    }),
    wx.request({
      url: inerface.productionsList,
      header: {
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
        self.setData({
          proList: res.data
        })
        wx.hideLoading()
      }
    })
  }
})