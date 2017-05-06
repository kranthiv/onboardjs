import { BackgroundPage } from './app.po';

describe('background App', () => {
  let page: BackgroundPage;

  beforeEach(() => {
    page = new BackgroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
