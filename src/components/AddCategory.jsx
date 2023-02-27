import { useState } from "react"
import PropTypes from "prop-types";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState( '' );

    const onInputChange = ({ target }) => { 
        
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        
        event.preventDefault();

        const cleanInputValue = inputValue.trim();

        if( cleanInputValue.length < 1 ) return;

        onNewCategory( cleanInputValue );

        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text" 
                placeholder="Buscá tus Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
