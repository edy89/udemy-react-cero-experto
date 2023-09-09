import { useState } from 'react';

interface AddCategoryProps {
    onNewCategory: (value: string) => void;
  }
// interface AddCategoryProps {
//     setCategories: React.Dispatch<React.SetStateAction<string[]>>; // Tipo de setCategories
//   }

// export const AddCategory: React.FC<AddCategoryProps> = ({setCategories}) => {
export const AddCategory: React.FC<AddCategoryProps> = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const onInputChange = ({target}) => {
        setInputValue(event.target.value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // avoiding refresh page that is default configuration with form.

        const newInputValue = inputValue.trim()

        if (newInputValue.trim().length <= 1) return;

        onNewCategory(newInputValue);
        // setCategories((categories: string[]) => [inputValue, ...categories]);
        setInputValue('');
    };

  return (
    <form onSubmit={(event) => {onSubmit(event)}}>
        <input 
            type="text" 
            placeholder="Search gifs"
            value={inputValue}
            onChange={ (event) =>  {onInputChange(event)}}
            // onChange={onInputChange}
        />
    </form>
  )
}
