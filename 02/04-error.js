process.stdin.resume()

setTimeout(function () {
	var obj = {}
	obj.method()
}, 1000)


process.on('uncaughtException', function(e) {
	console.log(e.stack)
})
