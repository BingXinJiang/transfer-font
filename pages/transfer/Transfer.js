// pages/transfer/Transfer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getAuthData: '获取验证码',
    canGetAuthData: true,
  },

  /**
   * 获取验证码
   */
  getAuthData: function() {
    let remainder = 60;
    this.setData({
      getAuthData: `${remainder}秒后重新获取`,
      canGetAuthData: false,
    })
    let timer = setInterval(() => {
      if(remainder>0){
        this.setData({
          getAuthData: `${remainder}秒后重新获取`,
        })
        remainder--;
      } else {
        this.setData({
          getAuthData: '获取验证码',
          canGetAuthData: true,
        })
        clearInterval(timer);
      }
    }, 1000);
  },

  /**
   * 注册
   */
  register: function() {
    wx.switchTab({
      url: './loveTransfer/LoveTransfer',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})