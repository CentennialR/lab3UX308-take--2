import { calculateCubeVolume } from "../calculateCubeVolume";

describe("A suite", function(){
    it("calculates volume of a 1 meter cube", function(){
        let volume = calculateCubeVolume(1);
        expect(volume).toBe(1);
    });
    it ("calculates volume of a 2 meter cube", function() {
        let volume = calculateCubeVolume(2); 
        expect(volume).toBe(8);
    });
});