
function runInTheFuture(cb, seconds)
{
	setTimeout(()=>{
	    cb()
	}, seconds * 1000)
}

// usage:
console.log('hello');

(async ()=>{
	await runInTheFuture(() => {
		console.log('world');
	}, 4);
	console.log('goodbye');
})()


// required output:
// hello
// (after 4 seconds) world
// (immediately after) goodbye
