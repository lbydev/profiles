// 去除车来了资讯广告
var res = $response.body;
var obj = res.replace('**YGKJ', '').replace('YGKJ##', '');
obj = JSON.parse(obj);
obj['jsonr']['data']['tabs'] = [];
obj['jsonr']['data']['infos'] = [];
$done({
  body: '**YGKJ' + JSON.stringify(obj) + 'YGKJ##'
});
