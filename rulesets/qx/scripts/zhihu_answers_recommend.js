let body = $response.body
if (body != "" && body !== "undefined") {
  body = JSON.parse(body)
  body['data'] = []
  body = JSON.stringify(body)
}
$done({
  body
})
