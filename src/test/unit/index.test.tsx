import { render, screen } from '@testing-library/react';
import Home from '@/pages';

describe(`<Home />`, () => {
  it(`Home text가 보여진다.`, () => {
    const { container } = render(<Home />);

    const home = screen.getByText('Home');

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
