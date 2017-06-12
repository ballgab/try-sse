import { PrebootDemoPage } from './app.po';

describe('preboot-demo App', () => {
  let page: PrebootDemoPage;

  beforeEach(() => {
    page = new PrebootDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
