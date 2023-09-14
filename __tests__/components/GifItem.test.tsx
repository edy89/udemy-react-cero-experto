import {render, screen} from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem';


describe('Testing <GifItem/>', () => {
    const title = 'Kakaroto';
    const url = 'https://example.com/image.jpg'
    
    test('should match with the snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the correct url and ALT', () => {
        render(<GifItem title={title} url={url}/>);
        screen.debug();
        const {src, alt} = screen.getByRole('img') as HTMLImageElement;

        expect (src).toBe(url);  
        expect (alt).toBe(title);
    });

    test('should show the title in the component', () => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });
});