import { render } from '@testing-library/react';
import Page from '../page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Page />);
    expect(getByRole('main')).toBeInTheDocument();
  });
});
