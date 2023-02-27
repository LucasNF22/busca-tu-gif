const { getGifs } = require("../../src/helpers/getGifs");

describe('Pruebas sobre el helper getGifs()', () => {

    test('Debe retornar un array ed gifs', async() => {
        
        const gifs = await getGifs('The Office');

        expect( gifs.length ).toBeGreaterThan( 0 );
        
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });

});