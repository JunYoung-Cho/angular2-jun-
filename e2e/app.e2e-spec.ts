import { Angular2JunPage } from './app.po';

describe('angular2-jun App', () => {
  let page: Angular2JunPage;

  beforeEach(() => {
    page = new Angular2JunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
