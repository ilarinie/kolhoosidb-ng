import { KolhoosidbNgPage } from './app.po';

describe('kolhoosidb-ng App', () => {
  let page: KolhoosidbNgPage;

  beforeEach(() => {
    page = new KolhoosidbNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
