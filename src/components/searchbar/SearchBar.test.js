import {render, screen} from '@testing-library/react';
import SearchBar from './SearchBar';

test("renders search bar with place holder", () => {
    render(<SearchBar/>);
    const searchbarComponent = screen.getByPlaceholderText(/Search articles/i);
    expect(searchbarComponent).toBeInTheDocument();
});