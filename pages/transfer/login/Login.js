// pages/transfer/login/Login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 注册
   */
  register: function(e) {
    let app = getApp();
    let userInfo = e.detail.value;
    let AV = app.AV;
    let user = new AV.User();
    user.setUsername(userInfo.nickname);
    user.setPassword(userInfo.password);
    user.setEmail(userInfo.email);

    user.signUp().then(function (loginedUser) {
      // 注册成功，跳转到商品 list 页面
    }, (function (error) {
      alert(JSON.stringify(error));
    }));
  }
})