import { useRef } from 'react';

export const useCountRenders = (caller = '') => {
    const renders = useRef(0);
    console.log(`${caller} renders: `, renders.current++);
};
