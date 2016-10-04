import { MALINEOPage } from './app.po';

describe('malineo App', function() {
  let page: MALINEOPage;

  beforeEach(() => {
    page = new MALINEOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
