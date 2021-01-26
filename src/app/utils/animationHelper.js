export const finalAnimationState = () => (
    {
        height: "calc(100vh + 0px)",
        width: "calc(100% + 0px)",
        transform: "translate(calc(0px - 0vw), 0px)",
        borderRadius: 0,
        background: 'rgba(255, 255, 255, 1)',
        overflow: 'auto'
    })

export const initialAnimationState = (rect) => {
    if (!rect)
        return {};

    return {
        height: `calc(0vh + ${rect.height}px)`,
        width: `calc(0% + ${rect.width}px)`,
        transform: `translate(calc(${rect.left}px - 25vw), ${rect.top}px)`,
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 22,
        overflow: 'hidden'
    }
};

export const getImageAnimation = (rect) => {
    if (!rect)
        return {};

    return {
        height: parseInt(rect.height),
        width: parseInt(rect.width),
        transform: `translate(${parseInt(rect.left)}px, ${parseInt(rect.top)}px)`
    }
}
export const getUpTransition = () => {
    return ({
        from: {
            position: 'absolute',
            opacity: 0,
            transform: 'translate(0%,20%) ',
            transformOrigin: 'top',
            overflow: 'hidden'
        },
        enter: { opacity: 1, transform: 'translate(0%,0) ', transformOrigin: 'top', overflow: 'auto' },
        leave: { opacity: 0, transform: 'translate(0%,-10px) ', transformOrigin: 'top', overflow: 'hidden' }
    })
}