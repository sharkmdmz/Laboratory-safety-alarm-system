Page({
  data: {
      videoSrc: '',
      cameraList: ['摄像头1', '摄像头2', '摄像头3'],
      selectedCameraIndex: 0,
      isDetecting: false,
      threshold: 0.3,
      confirmedThreshold: 0.3,
      confidenceLevel: 0.00,
      alarmStatus: '否'
  },

  // 阈值改变事件处理函数
  onThresholdChange: function (e) {
      this.setData({
          threshold: e.detail.value
      });
  },

  // 确认阈值事件处理函数
  confirmThreshold: function () {
      this.setData({
          confirmedThreshold: this.data.threshold
      });
      console.log('确认的阈值:', this.data.confirmedThreshold);
  },

  // 摄像头选择改变事件处理函数
  onCameraChange: function (e) {
      this.setData({
          selectedCameraIndex: e.detail.value
      });
      console.log('选择的摄像头:', this.data.cameraList[this.data.selectedCameraIndex]);
  },

  // 开始检测事件处理函数
  startDetection: function () {
      this.setData({
          isDetecting: true,
          alarmStatus: '是'
      });
      console.log('开始检测');
  },

  // 停止检测事件处理函数
  stopDetection: function () {
      this.setData({
          isDetecting: false,
          alarmStatus: '否'
      });
      console.log('停止检测');
  },

  onLoad: function () {
      // 移除所有模拟更新逻辑
  }
});    