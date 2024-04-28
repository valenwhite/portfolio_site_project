// Importing required library
import { tailChase } from 'ldrs';
tailChase.register();

// Component for loading state
export const Loading = () => {
    return (
        // Displays a rotaing white icon
        <l-tail-chase size="40" speed="1.75" color="white" ></l-tail-chase>
    );
}

// Component for error state
export const Error = () => {
    return (
        <h4>Uh-oh, something went wrong!</h4>
    );
}