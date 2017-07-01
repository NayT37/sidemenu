import { SideMenuPage } from './app.po';

describe('side-menu App', () => {
  let page: SideMenuPage;

  beforeEach(() => {
    page = new SideMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
