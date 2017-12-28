import { Fantastic4Page } from './app.po';

describe('fantastic4 App', () => {
  let page: Fantastic4Page;

  beforeEach(() => {
    page = new Fantastic4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
