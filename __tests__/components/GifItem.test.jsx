const { render, screen, getByText } = require("@testing-library/react")
const { GifItem } = require("../../src/components/GifItem")

describe('Pruebas en <GifItem />', () => {

    const title = "Star Lord";
    const url = 'https://starlord.com.ar/img.jpg'

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={ title } url={ url } />)

        expect( container ).toMatchSnapshot();
    });

    test('La imagen debe mostrar el url y el ALT correcto', () => {

        render( <GifItem title={ title } url={ url } /> )
        //screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )
        const { src, alt } = screen.getByRole('img');
        expect ( src ).toBe( url );
        expect ( alt ).toBe( alt );

    });

    test('Debe mostrar el titulo correctamente', () => {

        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy();

    });


})