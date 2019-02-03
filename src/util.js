// 工具函数库
import config from './config'

// http get工具函数 获取数据
export function get(url, data) {
  return request(url, 'GET', data)
}
export function post(url, data) {
  return request(url, 'POST', data)
}

function request(url, method, data, header={}) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success(res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

// 提示框
export function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

// 显示登录提示框
export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
