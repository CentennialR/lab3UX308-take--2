import { suggestClothing } from '../ suggestClothing.js'

describe ("A suite", function() {
    it ("chooses clothing for a hot humid day", function(){
        let sClothing = suggestClothing(28, 80);
        expect(sClothing).toBe("shorts, t-shirt, birkenstocks");
    });
});