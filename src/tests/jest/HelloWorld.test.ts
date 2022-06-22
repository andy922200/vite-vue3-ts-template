import {
    render, fireEvent 
} from '@testing-library/vue'
import Component from '../../components/HelloWorld.vue'
// @ts-ignore
import '@testing-library/jest-dom/extend-expect'

test('increments value on click', async () => {
    // The render method returns a collection of utilities to query your component.
    const { getByText } = render(Component, {
        props: {
            msg: 'Hello MSG' 
        } 
    })

    // getByText returns the first matching node for the provided text, and
    // throws an error if no elements match or if more than one match is found.
    const button = getByText('count is: 0')

    // Dispatch a native click event to our button element.
    await fireEvent.click(button)
    await fireEvent.click(button)

    getByText('count is: 2')
})