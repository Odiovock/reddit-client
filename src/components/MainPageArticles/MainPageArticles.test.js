import { render, screen } from '@testing-library/react';
import MainPageArticle from './MainPageArticles';

test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/some shit/i);
  expect(linkElement).toBeInTheDocument();
});