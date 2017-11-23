import { ExpensetrackPage } from './app.po';

describe('expensetrack App', () => {
  let page: ExpensetrackPage;

  beforeEach(() => {
    page = new ExpensetrackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
