const domain = "https://enigmatic-island-47099.herokuapp.com";

const inerface = {
  //首页网络请求
  homePage: domain + "/api/profiles/homepage",
  // 返回的商品的json数据
  productions: domain + '/api/profiles/productions',
}

module.exports = inerface;