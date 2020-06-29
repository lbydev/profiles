let body = $response.body
body = JSON.parse(body)
delete body['footer_cover_data']
body = JSON.stringify(body)
$done({body})
