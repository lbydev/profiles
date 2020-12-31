// 去除车来了首页模块
var whitelist = ['站点地图', '地铁', '打车']
var body = $response.body;
var obj = body.replace('**YGKJ', '').replace('YGKJ##', '');
obj = JSON.parse(obj);
if (obj['jsonr']['data']['city'] !== undefined) {
  obj['jsonr']['data']['city']['homePointList'].forEach((element, index) => {
    if (!(whitelist.includes(element['title']))) obj['jsonr']['data'][
        'city'
      ]
      ['homePointList'].splice(
        index, 1)
  });
  obj['jsonr']['data']['city']['bcPointList'] = [];
  obj['jsonr']['data']['city']['userPointList'] = [];
}

$done({
  body: '**YGKJ' + JSON.stringify(obj) + 'YGKJ##'
});
