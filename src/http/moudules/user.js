import axios from '../axios'

function removeProperty(object){
  for(let p in object){
    if (object[p]==='') {
      delete object[p]
    }
  }
  return object
}
/*
 * 用户管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/user/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/user/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (params, data) => {
    return axios({
        url: '/user/findPage',
        method: 'post',
        params,
        data : removeProperty(data)
    })
}
// 查找用户的菜单权限标识集合
export const findPermissions = (params) => {
    return axios({
        url: '/user/findPermissions',
        method: 'get',
        params
    })
}
