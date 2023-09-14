import {fireEvent, render, screen} from '@testing-library/react';
import {AddCategory} from '../../src/components';
// import React from 'react';


describe('Testimg <AddCategory/>', () => {
    test('should change the text box value', () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.input(input, {target: {value: 'DBZ'}}); // trigger the action that put value into the text box
        // screen.debug();
        expect(input.value).toBe('DBZ');
    });

    test('should call onNewCategory if the input has some value', () => {
        const inputValue: string = 'DBZ';
        const onNewCategory: jest.Mock = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLInputElement;

        fireEvent.input(input, {target: {value: inputValue}}); // trigger the action that put value into the text box
        fireEvent.submit(form); // trigger the action that post form with value in input (call the form's onSubmit function)

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onNewCategory if the input is empty', () => {
        const onNewCategory: jest.Mock = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form') as HTMLInputElement;

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});