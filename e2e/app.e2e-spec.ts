import { JestFakeasyncPage } from './app.po';

describe('jest-fakeasync App', () => {
  let page: JestFakeasyncPage;

  beforeEach(() => {
    page = new JestFakeasyncPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
