import {render, screen} from '@testing-library/react';
import Filter from './Filter';

test("renders search bar with place holder", () => {
    render(<Filter/>);
    const searchbarComponent = screen.getByText(/test/i);
    expect(searchbarComponent).toBeInTheDocument();
});