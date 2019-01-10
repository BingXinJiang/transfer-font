// pages/transfer/transfer/addPage/add-cp.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		cps: [],
		selectedCps: [],
	},

	/**
	 * 选择cp
	 */
	onChange: function(e) {
		this.setData({
			selectedCps: e.detail,
		})
	},
	toggle: function(event) {
		const { name } = event.currentTarget.dataset;
		const checkbox = this.selectComponent(`.checkboxes-${name}`);
		checkbox.toggle();
	},
	noop: function() {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 获取人员列表
		const AV = getApp().AV;
		const query = new AV.Query('User');
		query.find().then((users) => {
			const cps = users.map((user) => {
				return {
					id: user.id,
					name: user.get('username'),
				}
			});
			this.setData({ cps });
		});
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