import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas en <GifGrid />', () => {

    const category = 'StarWars'

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('CARGANDO...') ).toBeTruthy();
        expect( screen.getByText( category ) ).toBeTruthy();

    });

    test('Debe mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {

        const gifs = [
            {
                id: 'abd',
                title: 'Star Wars',
                url: 'https://starwars.com.ru'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://goku.com.es'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render( <GifGrid category={ category } /> );
        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2)


    });


});