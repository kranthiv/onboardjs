import { ContentPage } from './app.po';

describe('content App', () => {
  let page: ContentPage;

  beforeEach(() => {
    page = new ContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
