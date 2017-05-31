import { TrySsePage } from './app.po';

describe('try-sse App', () => {
  let page: TrySsePage;

  beforeEach(() => {
    page = new TrySsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
