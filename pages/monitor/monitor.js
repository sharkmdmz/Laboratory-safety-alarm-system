Page({
  data:{
    screenList:[]
  },

  onLoad:function(option){
    this.getSreenList()
  },

  getSreenList(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides',
      method:'GET',
      success:(res)=>{
        console.log(res.data)
        this.setData({
          screenList:res.data
        })
      }
    })
  }
});