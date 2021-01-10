module.exports = {
	'/': [
		{
			title: 'Home',
			children: [
				'/',
				'example-bot',
			],
		},
		{
			title: 'Introduction',
			children: [
				'/how-to',
			],
		},
		{
			title: 'Preparations',
			children: [
				'/preparations/creating-a-discord-bot',
				'/preparations/installing-distube',
			],
		},
		{
			title: 'Writing Your Bot',
			children: [
				'/writing/basic-discord.js',
				{
					title: 'Writing your music commands',
					path: '/writing/commands',
					collapsable: false,
					children: [
						'/writing/commands/play',
					],
				},
				{
					title: 'Listening to DisTube events',
					path: '/writing/events',
					collapsable: false,
					children: [
						'/writing/events/error',
					],
				},
			],
		},
	],
}
