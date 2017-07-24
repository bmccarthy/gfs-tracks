import { GfsTracksPage } from './app.po';

describe('gfs-tracks App', () => {
  let page: GfsTracksPage;

  beforeEach(() => {
    page = new GfsTracksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
