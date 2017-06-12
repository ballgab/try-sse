import { Ng4UniversalTemplatePage } from './app.po';

describe('ng4-universal-template App', () => {
  let page: Ng4UniversalTemplatePage;

  beforeEach(() => {
    page = new Ng4UniversalTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
