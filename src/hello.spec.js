import { sayHello } from './hello.js';

describe('sayHello()', () => {
  it('should return "Hello world"', () => {
    expect(sayHello())
  });
});
