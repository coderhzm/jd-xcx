const inerface = require("../../utils/urlConfig.js")
// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList: [],
    page: 1,
    size: 5,
    noData: false
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
        self.setData({
          proList: res.data
        })
        wx.hideLoading()
      }
    })
  },
  //监听下拉
  onPullDownRefresh: function() {
    //显示加载状态
    wx.showNavigationBarLoading();
    const self = this;
    wx.request({
      url: inerface.productionsList,
      header: {
        "content-type": "application/json"
      },
      success(res) {
        self.setData({
          proList: res.data
        })
        wx.hideNavigationBarLoading();
        //隐藏加载状态
        wx.stopPullDownRefresh();
      }
    })
  },
  //上拉加载
  onReachBottom: function () {
    // 判读数据是否加载完毕
    if (this.data.noData) return

    // 停止下拉刷新
    wx.stopPullDownRefresh();
    wx.showNavigationBarLoading() //在标题栏中显示加载

    const prolist = this.data.proList
    let page = this.data.page
    this.setData({ // 每次下拉 page+1
      page: ++page
    })
    const self = this
    wx.request({
      url: inerface.productionsList + '/' + self.data.page + '/' + self.data.size,
      success(res) {
        if (res.data.length == 0) {
          self.setData({
            noData: true
          })
        } else {
          res.data.forEach(item => {
            prolist.push(item)
          })
          self.setData({
            proList: prolist
          })
        }
        // 隐藏加载状态
        wx.hideNavigationBarLoading()
      }
    })
  },
  switchProlistDetail(e) {

    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/index?id=' + this.data.proList[index].id,
    })
  }
})