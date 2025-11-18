// Your first test file - let's start simple!
describe('Basic Server Tests', () => {
  test('1 + 1 should equal 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('Object assignment should work', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
