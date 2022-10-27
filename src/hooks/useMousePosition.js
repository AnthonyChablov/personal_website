import { useState, useEffect } from "react";
const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = useState({ x: null, y: null });
    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX+30, y: ev.clientY+30});
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};
export default useMousePosition;