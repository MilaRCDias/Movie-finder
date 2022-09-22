import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
