export const bind = (eventType, targetElement, handlerFunction) => {
    targetElement.addEventListener(eventType, (event) => {
        event.preventDefault();
        handlerFunction()
    })
}