import { fireEvent, render, screen, wait } from '@testing-library/react';
import Search from '.';

describe('Search', () => {
  it('should render', () => {
    const mockClick = jest.fn();
    render(<Search onClick={mockClick} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /search/i,
      })
    ).toBeInTheDocument();
  });

  it('should fire onClick when button clicked', () => {
    const mockClick = jest.fn();
    render(<Search onClick={mockClick} />);

    const button = screen.getByRole('button', {
      name: /search/i,
    });

    fireEvent.click(button);

    expect(mockClick).toBeCalled();
  });

  it('should fire onClick on keyboard Enter key', () => {
    const mockClick = jest.fn();
    render(<Search onClick={mockClick} />);

    const input = screen.getByRole('textbox');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockClick).toBeCalled();
  });

  it('should write to input field', () => {
    const mockClick = jest.fn();
    const mockValue = 'Good Day';
    render(<Search onClick={mockClick} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: mockValue } });

    expect(input.value).toContain(mockValue);
  });
});
