import {getGifs} from '../../src/helpers/getGifs';

describe('Testing getGifs()', () => {
    test('should return a gifs array', async () => {
        const gifs = await getGifs('dbz');
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});