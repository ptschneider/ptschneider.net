// my first node.js 
//
const https = require('https')

const port = 443


const requestHandler = (request,response) >= {
	console.log(request.url)

	response.end('Hello Node.js Server!')
}

const server = https.createServer(reuestHandler)

server.listen(port,err) => {
	if (err) {
		return sonsole.log ('something bad happened', err)
	}

	console.log('server is listening on ${port}')
}
