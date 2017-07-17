import { AuthenticationExamplePage } from './app.po';

describe('authentication-example App', () => {
  let page: AuthenticationExamplePage;

  beforeEach(() => {
    page = new AuthenticationExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
