const milliseconds = 1000;
const seconds = 2;

const config = {
	idLength: 4,
	tabs: [
		{ key: 'TodoPane', title: 'TodoPane' },
		{ key: 'TaskPane', title: 'TaskPane' },
	],
	filters: [{ label: 'ALL',
		name: 'all' },
	{ label: 'ACTIVE',
		name: 'active' },
	{ label: 'COMPLETED',
		name: 'completed' }],
	TickerDelay: milliseconds * seconds,
	tasks: ['Debug the code', 'Test the code', 'Submit the code'],
	maxTaskListLength: 12,
};

export default config;
