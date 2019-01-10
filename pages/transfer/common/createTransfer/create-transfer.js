// pages/transfer/common/createTransfer/CreateTransfer.js
Component({

  /**
   * 组件属性值
   */
  properties: {

  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 事件绑定
   */
  methods: {
    createTransfer: function() {
      wx.navigateTo({
        url: '../transfer/createTodo/create-todo',
      })
    }
  }
})