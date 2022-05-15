export default class highlighter {
    #element
    #autoScroll
    #backgroundColor
    #flashFor
    constructor(elementId, 
        { autoScroll = true, backgroundColor = "black", flashFor = 3000 } = {})
        {
        this.#element = elementId
        this.#autoScroll = autoScroll
        this.#backgroundColor = backgroundColor
        this.#flashFor = flashFor
    }

    init(){
        this.#element.scrollIntoView();
    }
}