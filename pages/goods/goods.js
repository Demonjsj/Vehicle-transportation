// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
   data: {
    index:0,
    temp:0,
    arry:["前四后八","托运车"],
    carLength:["1222","1234"],
    region: [],
    start_place:[],
    registerplace:[],
    customItem: '全部',
    carType:'',
    carlength:''
  },

  bindRegionChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      region:e.detail.value
    })
  },

  bindPlaceChange:function(e){
    this.setData({
      start_place:e.detail.value
    })
  },

  bindRegisterChange:function(e){
    this.setData({
      registerplace:e.detail.value
    })
  },

  bindTypeChange:function(e){
    console.log(e)
    this.setData({
      carType:e.detail.value
    })
  },

  bindLengthChange:function(e){
    this.setData({
      carlength:e.detail.value
    })
  },

  bt_add_info:function(e){
    wx.navigateTo({
      url:'../sucess/sucess',
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