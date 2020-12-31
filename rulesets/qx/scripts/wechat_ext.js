/**
 * @supported 28EFC9556EB7
 */

// 去除微信公众号文章三连
var obj = JSON.parse($response.body);
if (obj.appmsgstat) {
  // obj.appmsgstat.style = 2;
  obj.appmsgstat.show_old_like = false;
  obj.appmsgstat.show_like = false;
  obj.appmsgstat.show = false;
}
if (obj.share_flag) {
  obj.share_flag.show = false;
}

// 如果有推广信息，喜欢此内容的人还喜欢，也一起去掉
// if (obj.advertisement_num) {
//   obj.advertisement_num = 0;
// }
//
// if (obj.advertisement_info) {
//   obj.advertisement_info = [];
// }

//delete obj.appid;
$done({
  body: JSON.stringify(obj)
});
