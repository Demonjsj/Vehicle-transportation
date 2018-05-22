// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList:[
      {
        "start_city":"丹东市",
        "start_province":"辽宁",
        "kilo":"1282",
        "end_city":"阳泉市",
        "end_province":"山西",
        "length":"12.5米厢式车",
        "bearing":"金砖1000吨",
        "price":"9999元/吨",
      },
      {
        start_city:"天津市",
        start_province:"天津",
        kilo:"478",
        end_city:"邯郸市",
        end_province:"河北",
        length:"3.8米平板车",
        bearing:"搬家5吨",
        price:"9999元",
      },
      {
        start_city:"宿迁市",
        start_province:"江苏",
        kilo:"867",
        end_city:"温州市",
        end_province:"浙江",
        length:"13米平板车",
        bearing:"重货31吨",
        price:"240元/吨",
      },
      {
        start_city:"荆门市",
        start_province:"湖北",
        kilo:"1032",
        end_city:"嘉兴市",
        end_province:"浙江",
        length:"17.5米栏板车",
        bearing:"树苗20吨",
        price:"6600元",
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  gotoDetail:function(e){
    wx.navigateTo({
      url:"../detail/detail"
    })
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