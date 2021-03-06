import app from '@system.app';
import fetch from '@system.fetch';
import device from '@system.device';
import storage from '@system.storage';
import config from './config.js';
let dcloud_stat = {
  stat_data: {
    p: "a"
  },
  retryTime: 0,
  report: function (logType) {
    this.stat_data.lt = logType || 1;
    this.getAppInfo();
    let _self = this;
    this.getDeviceId(function () {
      if (config.app_key) {
        _self.stat_data.ak = config.app_key;
        fetch.fetch({
          url: "https://stream.dcloud.net.cn/quickapp/stat",
          data: _self.stat_data,
          success: function (rsp) {},
          fail: function (data, code) {
            if (++_self.retryTime < 3) {
              setTimeout((logType) => {
                _self.report(logType)
              }, 500)
            }
          }
        })
      }
    })
  },
  getAppInfo: function () {
    let appInfo = app.getInfo();
    if (appInfo) {
      this.stat_data.vn = appInfo.versionName;
      this.stat_data.vc = appInfo.versionCode
    }
  },
  getDeviceId: function (callback) {
    let _self = this;
    device.getId({
      type: ["device", "mac", "user"],
      success: function (data) {
        _self.stat_data.imei = "|" + data.device + "|" + data.mac + "|" + data.user + "||";
        _self.getDeviceInfo(callback)
      },
      fail: function (data, code) {
        let dt = new Date();
        storage.get({
          key: '__DC_STAT_DEVICE_R',
          success: function (data) {
            let rid = '';
            if (data) {
              rid = data
            } else {
              rid = "__DS_RID__" + dt.getFullYear() + (dt.getMonth() + 1) + dt.getDate() + dt.getHours() + parseInt(Math.random() * 100000);
              storage.set({
                key: '__DC_STAT_DEVICE_R',
                value: rid
              })
            }
            _self.stat_data.imei = "||||" + rid + "|";
            _self.getDeviceInfo(callback)
          },
          fail: function (data, code) {
            console.log("storage handling fail, code=" + code)
          }
        })
      }
    })
  },
  getDeviceInfo: function (callback) {
    let _self = this;
    device.getInfo({
      success: function (data) {
        _self.stat_data.brand = data.brand;
        _self.stat_data.vd = data.manufacturer;
        _self.stat_data.md = data.model;
        _self.stat_data.os = data.osVersionCode;
        _self.stat_data.pvn = data.platformVersionName;
        _self.stat_data.vb = data.platformVersionCode;
        _self.stat_data.lang = data.language;
        _self.stat_data.region = data.region;
        _self.stat_data.sw = data.screenWidth;
        _self.stat_data.sh = data.screenHeight
      },
      fail: function () {},
      complete: function () {
        callback()
      }
    })
  }
};
(global.__proto__ || global).dc_stat = dcloud_stat;
export default dcloud_stat;