

//O(n)
const familyTree = [
	{
		name: "Moshe",
		age:12,
		children: [
			{
				name: "Shalom",
				age:54,
				children: [
					{
						name: "Shalom",
						age:54
					},
					{
						name: "Sarah",
						age:32,
						children: [
							{
								name: "Shalom",
								age:54
							},
							{
								name: "Sarah",
								age:3
							}]
						
					}
					]
				
			},
			{
				name: "Sarah",
				age:34
			},
			
		]
	},
	{
		name: "Shalom",
		age:54
	},
	{
		name: "Sarah",
		age:34
	},
	{
		name: "Yonotan",
		age:21
	}
]
// O(1) - flat
// const dict = {
// 	moshe:12,
// 	shalom:54,
// 	sarah:34,
// 	yonatan:21
// }

// arrayToDictionary(arr):{Moshe:12, }
