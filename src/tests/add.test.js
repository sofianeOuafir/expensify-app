const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('it should add 2 numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('it should generate a greeting', () => {
  const greeting = generateGreeting('Sofiane');
  expect(greeting).toBe('Hello Sofiane');
})