module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Beni in primo piano(img)',
    addFields: [{
        name: '_allBeniPrimoPianoImage',
        label: 'Beni in primo piano',
        // withType: ['beni-archeologia', 'beni-architettonici', 'beni-etnoantropologia', 'beni-paesaggio', 'beni-naturalistici', 'arti-visive', 'beni-numismatica'],
        withType: ['a-type', 'b-type', 'c-type', 'd-type', 'e-type', 'f-type'],
        type: 'joinByOne'
    }]
}
