import { createContext } from 'react';

const HeightContext = createContext({
    height: 0,
    setHeight: () => {}
});

export default HeightContext;