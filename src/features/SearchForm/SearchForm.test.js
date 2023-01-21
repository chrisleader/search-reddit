import { render, screen } from '@testing-library/react'
import Home from './SearchForm';

test('should render the Home component', () => {
  render(<Home />);
  screen.debug();
});