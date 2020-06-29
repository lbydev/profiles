let body = $response.body
body = JSON.parse(body)
body['data']['footer_cover_data'] = null
body = JSON.stringify(body)
$done({body})
