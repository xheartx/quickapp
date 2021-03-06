/**
 * 显示菜单
 */
function showMenu () {
  var prompt = require('@system.prompt');
  var router = require('@system.router');
	var share = require('@system.share');
  var appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['保存桌面', '分享', '取消'],
    success: function (ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;
        case 1:
          // 分享
          share.share({
						type:"text/html",
						data:"我已经在新华金典赚钱啦，你也一起来吧！https://0x9.me/pZ5Nq",
						success:function(data){console.log("handling success");},
						fail: function(data, code) {
						console.log("handling fail, code=" + code);
						}
					});
          break;
        case 2:
          // 取消
          break;
        default:
          prompt.showToast({ message: 'error' })
      }
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut () {
  var prompt = require('@system.prompt');
  var shortcut = require('@system.shortcut');
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({ message: '已创建桌面图标' })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({ message: '成功创建桌面图标' })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg })
          }
        })
      }
    }
  })
}

export default {
  showMenu,
  createShortcut
}
