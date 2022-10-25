console.log('hello');


(async () => {
	
	try
	{
		console.log('fetching..');
		let loginResponse = await fetch('/login', {
			method: "POST",
			headers:{ "Content-Type": "application/json" },
			body  :JSON.stringify( {
				user: "rotem",
				pass: "1234"
			})
		})
		
		let data = await loginResponse.json();
		localStorage.setItem('token', data.token);
		
		console.log(loginResponse, 'res');
		
		let posts = await fetch('/myposts', {
			headers :{
				'Authorization': 'Bearer ' + localStorage['token'],
				
			}
		})
		
		let postData = await posts.json();
		console.log('posts', postData);
		
	}
	catch (e) {
		debugger;
		console.error(e);
	}
	
	}
)()
