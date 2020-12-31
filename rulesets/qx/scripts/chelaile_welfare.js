// 去除车来了福利社广告
let obj = JSON.parse($response.body);
if (obj['data']['icon'] !== undefined) {
  obj['data']['icon'] = [];
}
if (obj['data']['list'] !== undefined) {
  obj['data']['list'] = [];
}

$done({
  body: JSON.stringify(obj)
});
