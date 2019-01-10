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
      wx.redirectTo({
        // url: '/pages/transfer/transfer/createTransfer/create-transfer',
				url: '/pages/transfer/transfer/addPage/add-cp',
      });
    }, (function (error) {
      console.log('error: ', error);
    }));
  },
  /**
   * 登录
   */
  login: function(e) {
    let app = getApp();
    let userInfo = e.detail.value;
    let AV = app.AV;

    AV.User.logIn(userInfo.email, userInfo.password).then((loginedUser) => {
      console.log('loginedUser: ', loginedUser);
      // wx.redirectTo({
        // url: '/pages/transfer/transfer/createTransfer/create-transfer',
				// url: '/pages/transfer/transfer/addPage/add-cp',
      // });
			// wx.navigateTo({
			// 	url: '/pages/transfer/transfer/createTodo/create-todo',
			// })
			wx.switchTab({
				url: '/pages/transfer/loveTransfer/love-transfer',
			})
    }, (error) => {
      console.log('error: ', error);
    });

  }
})