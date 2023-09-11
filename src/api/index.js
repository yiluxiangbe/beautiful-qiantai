import requests from './request'
import requestsMock from './requestMock'
// 登录请求
export const reqLogin = (user) => {
  return requests({
    method: 'post',
    url: '/user/login',
    data: user,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 注册请求
export const reqRegister = (user) => {
  return requests({
    method: 'post',
    url: '/user/register',
    data: user,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 请求轮播图数据
export const reqBanner = () => {
  return requestsMock({
    method: 'get',
    url: '/banner'
  })
}

// -----------------------------------------------------------
// 购物车相-接口
// 请求所有购物车数据
export const reqShopCartList = (id) => {
  return requests({
    method: 'get',
    url: 'cart',
    params: id,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 新增购物车数据
export const insertShopCart = (cart) => {
  return requests({
    method: 'post',
    url: 'cart',
    data: cart,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 删除购物车数据
export const deleteShopCart = (id) => {
  return requests({
    method: 'delete',
    url: 'cart/product',
    params: id,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 修改购物车数据
export const updataShopCart = (cart) => {
  return requests({
    method: 'put',
    url: 'cart',
    data: cart,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// ------------------------------
// 商品分类·接口
// 获取所有商品分类
export const reqShopCataList = (shopCata) => {
  return requests({
    method: 'get',
    url: 'category/page',
    params: shopCata,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 新增商品分类
export const insertShopCata = (shopCata) => {
  return requests({
    method: 'post',
    url: 'category',
    data: shopCata,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 删除商品分类
export const deleteShopCata = (shopCata) => {
  return requests({
    method: 'delete',
    url: 'category',
    params: shopCata
  })
}

// -------------------------
// 商品列表-接口
// 获取商品列表
export const reqShopList = (shopList) => {
  return requests({
    method: 'get',
    url: 'product/page',
    params: shopList,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 新增商品列表
// 要加一个商品分类
export const insertShopList = (shopList) => {
  return requests({
    method: 'post',
    url: 'product',
    data: shopList,
    headers: {
      'Content-Type': 'application/json' // 设置请求头的 Content-Type 字段为 application/json
    }
  })
}

// 获取后端商品图片
export const download = (name) => {
  return requests({
    method: 'get',
    url: 'image/download',
    params: name,
    responseType: 'blob'
  })
}

// 删除商品列表
export const deleteShopList = (shop) => {
  return requests({
    method: 'delete',
    url: 'product',
    params: shop
  })
}

// 获取search的信息,这里我们要传递参数
// 当我们调用的时候，必须要至少传递一个空的数组过来，不然会失败
export const reqSearchList = (params) => {
  return requests({ method: 'post', url: '/list', data: params })
}
