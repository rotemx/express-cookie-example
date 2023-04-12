function runInTheFuture(cb, seconds)
{
	// implement..
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			cb();
			resolve()
		}, seconds * 1000)
	})
}


// required usage
console.log('Start');
await runInTheFuture(() => {
	console.log('Hello World');
}, 3)
console.log('End');

// require output:

// Start
//(pause 3 seconds)
// Hello World
// End
