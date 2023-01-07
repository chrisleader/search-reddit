import { render, screen } from '@testing-library/react'
import Home from './Home';

test('should render the Home component', () => {
  render(<Home />);
  screen.debug();
});