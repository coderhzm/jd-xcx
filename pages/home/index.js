//引入inerface
const inerface = require("../../utils/urlConfig.js")

// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [],
    logos: [],
    quicks: [],
    pageRow: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    circular: true,
    indicatorColor: "rgba(255,255,255,3)",
    indActiveColor: "#fff"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const self = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: inerface.homePage,
      header: {
        "content-type": "application/json"//默认值，返回的数据设为json格式
      },
      success(res) {
        // console.log(res.data);
        self.setData({
          swipers: res.data.swipers,
          logos: res.data.logos,
          quicks: res.data.quicks,
          pageRow: res.data.pageRow
        })
      }
    })
    wx.hideLoading()
  }
})