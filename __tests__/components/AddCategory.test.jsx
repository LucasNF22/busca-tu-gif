const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/components/AddCategory")

describe('Pruevas en <AddCategory />', () => {


    test('Debe cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> )
        
        const input = screen.getByRole( 'textbox' );
        fireEvent.input( input, { target: { value: 'lola' }} );

        expect( input.value ).toBe('lola');
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Star Lord';
        const onNewCategoryFunc = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategoryFunc } /> )
        
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategoryFunc ).toHaveBeenCalled();
        expect( onNewCategoryFunc ).toHaveBeenCalledTimes(1);
        expect( onNewCategoryFunc ).toHaveBeenCalledWith( inputValue );
        
    });

    test('NO debe llamar a onNewCategory si el input está vacio', () => {

        const onNewCategoryFunc = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategoryFunc } /> )

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategoryFunc ).toHaveBeenCalledTimes(0);
    })

});