import { answerCounts } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
	const expected = true;
	const actual = answerCounts('yeeeees');

	expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
	const expected = false;
	const actual = answerCounts('noooooo');

	expect.equal(actual, expected);
});
