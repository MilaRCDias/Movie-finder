import { act, render, screen } from '@testing-library/react';
import Card from '.';
import { IMovie } from '../../pages/index';

const mock: IMovie[] = [
  {
    title: 'Awesome Movie',
    description: 'Awesome film',
    language: 'en',
    votes: 5.6,
    posterUrl: '/',
    id: '234433',
    releasedIn: '1980',
  },
  {
    title: 'Great Movie',
    description: 'Great film',
    language: 'en',
    votes: 7.6,
    posterUrl: null,
    id: '23873',
    releasedIn: '1980',
  },
];

describe('Card', () => {
  it.each(mock)('should render with data %s', (item) => {
    act(() => {
      render(<Card movieList={[item]} />);
    });
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(
      screen.getByText(item.releasedIn, { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText(`${item.votes}`)).toBeInTheDocument();
    expect(
      screen.getByText(item.language, { exact: false })
    ).toBeInTheDocument();
  });

  it('should render image from data', () => {
    act(() => {
      render(<Card movieList={mock} />);
    });

    expect(screen.getByAltText(mock[0].title)).toBeInTheDocument();
  });

  it('should render default image', () => {
    act(() => {
      render(<Card movieList={mock} />);
    });
    expect(
      screen.getByAltText(/image not provided from server/i)
    ).toBeInTheDocument();
  });
});
