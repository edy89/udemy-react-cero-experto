import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import * as useFetchGifsModule from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('testing <GifGrid/> component', () => {
    const category: string = 'dbz';
    const mockUseFetchGifs = jest.spyOn(useFetchGifsModule, 'useFetchGifs');

    test('should show the loading initially', () => {
        // Usamos jest.spyOn para establecer un valor de retorno ficticio
        mockUseFetchGifs.mockReturnValue({
          images: [],
          isLoading: true,
        });
        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('should show items when the iamges are loading by useFetchGifs', () => {
        const gifs: {
            id: string;
            title: string;
            url: string;
        }[] = [
            {
                id: 'abc',
                title: 'dbz',
                url: 'http://localhost:8080/dbz.jpg',
            },
            {
                id: 'def',
                title: 'saitama',
                url: 'http://localhost:8080/saitama.jpg',
            }
        ]

        const mockData = {
            images: gifs,
            isLoading: true,
          };

        mockUseFetchGifs.mockReturnValue(mockData);
        
        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});