// pages/transfer/transfer/create-transfer/create-transfer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    description: '',
		images: [],
		voice: '',
		video: '',
  },

	/**
	 * 创建标题
	 */
	createTitle: function(e) {
		const title = e.detail.value;
		this.setData({
			title: title,
		});
	},

	/**
	 * 创建详细描述
	 */
	createContent: function(e) {
		const content = e.detail.value;
		this.setData({
			content: content,
		});
	},

	/**
	 * 添加照片、视频、语音 功能键
	 */
	loadMedia: function() {
		let AV = getApp().AV;
		wx.showActionSheet({
			itemList: ['图片', '小视频', '录音'],
			success: function(res) {
				// 从手机选择
				if (res.tapIndex === 0) {
					wx.chooseImage({
						success: function(res) {
							const images = res.tempFiles;
							images.forEach(function(img) {
								const imageName1 = img.path.split('//')[1];
								const imageNameA = imageName1.split('/');
								const imageName = imageNameA[imageNameA.length - 1];
								new AV.File(imageName, {
									blob: {
										uri: img.path,
									},
								}).save().then(function(file){
									const imgs = this.data.images.push(file.id);
									this.setData({
										images: imgs,
									});
									}, function (error) {
										console.log('照片上传失败！');
										console.log('error: ', error);
									})
							})
						},
						fail: function(error) {
							console.log('选择或拍摄照片失败！');
							console.log('error: ', error);
						},
						count: 9,
					})
				}
				// 录制小视频
				if (res.tapIndex === 1) {
					wx.chooseVideo({
						maxDuration: 60,
						success: function(res) {
							const path = res.tempFilePath;
							const name1 = path.split('//')[1];
							const nameA = name1.split('/');
							const name = nameA[nameA.length - 1];
							new AV.File(name, {
								blob: {
									uri: path,
								},
							}).save().then(function (file) {
								const video = file.id;
								this.setData({
									video: video,
								});
							}, function (error) {
								console.log('视频上传失败！');
								console.log('error: ', error);
							})
						},
						fail: function(error) {
							console.log('选择或拍摄视频失败！');
							console.log('error: ', error);
						}
					})
				}
				// 录音
				if (res.tapIndex === 2) {
					wx.startRecord({
						success: function (res) {
							const path = res.tempFilePath;
							const name1 = path.split('//')[1];
							const nameA = name1.split('/');
							const name = nameA[nameA.length - 1];
							new AV.File(name, {
								blob: {
									uri: path,
								},
							}).save().then(function (file) {
								const voice = file.id;
								this.setData({
									voice: voice,
								});
							}, function (error) {
								console.log('音频上传失败！');
								console.log('error: ', error);
							})
						},
						fail: function (error) {
							console.log('选择或录制音频失败！');
							console.log('error: ', error);
						}
					});
					// 结束录音
					setTimeout(function () {
						wx.stopRecord();
					}, 10000);
				}
			},
			fail: function(res) {
				console.log(res.errMsg);
			}
		})
	}
})