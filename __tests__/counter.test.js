import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../src/app/counter/page';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Counter', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      pathname: '/counter',
    });
  });

  it('renders the Counter component', () => {
    render(<Counter />);
    expect(screen.getByText("Click Count: 0")).toBeInTheDocument();
  });

  it('increments the count when "Plus Me!" button is clicked', () => {
    render(<Counter />);
    const plusButton = screen.getByText('Plus Me!');
    fireEvent.click(plusButton);
    expect(screen.getByText("Click Count: 1")).toBeInTheDocument();
  });

  it('decrements the count when "Substact Me!" button is clicked', () => {
    render(<Counter />);
    const subtractButton = screen.getByText('Substact Me!');
    fireEvent.click(subtractButton);
    expect(screen.getByText("Click Count: -1")).toBeInTheDocument();
  });

  it('renders a link back to the Home page', () => {
    render(<Counter />);
    const backButton = screen.getByRole('link');
    expect(backButton).toHaveAttribute('href', './');
  });

  it('renders the back arrow with the correct classes', () => {
    render(<Counter />);
    const backButton = screen.getByRole('link');
    expect(backButton.firstChild).toHaveClass('absolute text-white text-6xl ml-8 mt-4');
  });
});
