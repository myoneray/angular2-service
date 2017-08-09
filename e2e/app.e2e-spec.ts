import { Angular2ServicePage } from './app.po';

describe('angular2-service App', function() {
  let page: Angular2ServicePage;

  beforeEach(() => {
    page = new Angular2ServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
