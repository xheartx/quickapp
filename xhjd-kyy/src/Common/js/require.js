var fetch = require('@system.fetch')
var storage = require('@system.storage')

var API_ROOT = 'http://www.xinhuajindian.com/'
var serverUrl = 'https://xheart.leanapp.cn/server'

var headers = {
}

function getAuth() {
  return new Promise((resolve, reject) => {
    storage.get({
      key: 'auth',
      success: function(data) {
        headers.Cookie = data
        resolve(true)
      },
      fail: function(data, code) {
        resolve(false)
      }
    })
  })
}

function realFetch(url, data = null, method = 'get') {
  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('┃ url: ', API_ROOT + url)
  console.log('┃ method: ', method)
  console.log('┃ data: ', JSON.stringify(data))
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
	
	// data.url = API_ROOT + url
	// data.header = headers
	console.log(data)
  return new Promise((resolve, reject) => {
    fetch.fetch({
      url: API_ROOT + url,      
			// url: serverUrl,
      data,
      header: headers,
      method: method,
      success: function(res) {
				console.log(res)
        if (res.code === 200) {
					resolve(res.data)
				} else {
					reject(res.data)
				}
      },
      fail: function(data, code) {
        reject(data)      
			}
    })
  })
}

function withAuth(url, data = null, method = 'get', canSkip = false) {
  return getAuth().then((auth) => {
    if(auth || canSkip) {
      return realFetch(url, data, method)
    } else {
      return new Promise((resolve, reject) => {
        reject('请先登录！')
      })
    }
  })
}

function post(url, data = null, config = {}) {
  if(config.withAuth) {
    return withAuth(url, data, 'POST', config.canSkip)
  } else {
    return realFetch(url, data, 'POST')
  }
}

function get(url, data = null, config = {}) {
  if(config.withAuth) {
    return withAuth(url, data, 'get', config.canSkip)
  } else {
    return realFetch(url, data, 'get')
  }
}

export default {
  getClass(success, fail) {
    return post('huoqService2.0/Product/newMore', {
			parameters: JSON.stringify({
				appVersion: "2.5.4",
				appCode: 17,
				appPlatform: 1,
				pageSize: 100,
				apiVersion: "1.0",
				currentPage: 1,
				appPackageName: "com.allyoubank.xinhuagolden",
				channel: 360,
				flag: 2
			})
		})
  }
}