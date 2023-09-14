import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing custom hook useFetchGifs', () => {
    test('should return the initial state', () => {
        const {result} = renderHook(() => useFetchGifs('dbz'));
        const {images, isLoading} = result.current;

        expect(images).toEqual([]);
        expect(isLoading).toEqual(true);
    });

    test('should return the an images array and isLoading in false', async() => {
        const {result} = renderHook(() => useFetchGifs('dbz'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});