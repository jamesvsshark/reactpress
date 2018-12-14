import {App} from '../App';

describe("Sample app", () => {
  it("should always be true", () => {
    expect(true).toBe(true);
  });

  it('should be defined and match snapshot', () => {
      expect(App).toBeDefined();
      expect(App).toMatchSnapshot();
  })
});
