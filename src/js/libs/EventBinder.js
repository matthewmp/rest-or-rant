export const bind = (eventType, targetElement, handlerFunction) => {
    targetElement.addEventListener(eventType, () => {
        handlerFunction()
    })
}