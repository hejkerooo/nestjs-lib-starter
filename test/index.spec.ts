import {helloWorld} from "../lib";

describe('HelloWorld', () => {
  it('Should return hello world', () => {
    expect(helloWorld()).toEqual('Hello World!');
  });
});
