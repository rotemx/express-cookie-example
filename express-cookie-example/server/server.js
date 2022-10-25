

const express = require('express')
const app = express()
const port = 3000
// const bodyParser = require('body-parser')
app.use(express.json())
app.use('/', express.static('public'));
// app.use(bodyParser)
// app.use(express.cookieParser());


function checkAuth(req,res,next) {
	const {authorization} = req.headers;
	if (authorization.split('Bearer ')[1] === 'blahblah') {
		return next()
	}
	res.sendStatus(401)
}

app.get('/myposts', checkAuth,  (req, res) => {
	res.json({posts:[{postId:'12343', postText: 'My Post Text'}]})
})

app.post('/login', (req, res) => {
	res.json({'token': 'blahblah'});
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

