#autoScroll
#backgroundColor
#flashFor
export default class highlighter {
    constructor(element, 
        { autoScroll = true, backgroundColor = "white", flashFor = 5000 } = []
    ) {
        #autoScroll = autoScroll
        #backgroundColor = backgroundColor
        #flashFor = flashFor
        console.log([#autoScroll, #backgroundColor, #flashFor])
    }
}