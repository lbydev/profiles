// 去除车来了首页模块
var whitelist = ['站点地图', '地铁', '打车']
var body = $response.body;
var obj = body.replace('**YGKJ', '').replace('YGKJ##', '');
obj = JSON.parse(obj);

if (obj['jsonr']['data']['localCity'] !== undefined) {
  obj['jsonr']['data']['localCity']['homePointList'].forEach((element, index) => {
    if (!(whitelist.includes(element['title']))) {
      obj['jsonr']['data']['localCity']['homePointList'].splice(index, 1);
    }
  });
  obj['jsonr']['data']['localCity']['bcPointList'] = [];
  obj['jsonr']['data']['localCity']['userPointList'] = [];
}

$done({
  body: '**YGKJ' + JSON.stringify(obj) + 'YGKJ##'
});
