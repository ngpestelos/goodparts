// Send response asynchronously
request = prepare_the_request();
send_request_asynchronously(request, function(response) {
  display(response);
});
