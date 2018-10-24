/*
 * @Author: Github.Caitingwei[https://github.com/Caitingwei] 
 * @Date: 2018-09-01 13:25:28 
 * @Last Modified by: cnyballk[https://github.com/cnyballk]
 * @Last Modified time: 2018-10-24 10:36:25
 */
const now = new Date();
Page({
  data: {
    visible1: false,
    visible2: false,
    visible3: false,
    defaultValue: [new Date().getTime(), '2018-12-1'],
    disabledDate: {
      '2018-10-29': {
        text: '禁用',
      },
      '2018-10-30': {
        text: '你点不到我',
      },
      '2018-10-31': {
        text: '禁用',
      },
    },
  },
  handleClick1() {
    this.setData({ visible1: !this.data.visible1 });
  },
  handleClick2() {
    this.setData({ visible2: !this.data.visible2 });
  },
  handleClick3() {
    this.setData({ visible3: !this.data.visible3 });
  },
  handleCancel() {
    console.log('cancel');

    this.setData({
      visible1: false,
      visible2: false,
      visible3: false,
    });
  },
  handleSelected(date) {
    const {
      detail: { value },
    } = date;
    console.log(value);

    // wx.showModal({
    //   title: '提示',
    //   content: `您选择了 入住日期:${checkInDate}，离店日期:${checkOutDate},总天数:${checkTotalDay}`,
    //   showCancel: false,
    // });
  },
});
