import { Ng2RealApp } from './app.po';

describe('backbase-fe-test', () => {
  let page: Ng2RealApp;

  beforeEach(() => {
    page = new Ng2RealApp();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('backbase-fe-test');
  });
});
