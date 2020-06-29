let body = $response.body
body = JSON.parse(body)
delete body['data']['footer_cover_data']
body = JSON.stringify(body)
$done({body})
