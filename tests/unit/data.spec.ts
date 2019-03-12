import { CCData } from "../../src/data"

describe("CCData", () => {

    const data = new CCData();

    describe(data.GetCCAlert.name, () => { 
        it("returns 'warning' with 10 provided", () => {
            expect(data.GetCCAlert(10)).toBe('warning');
        });

        it('returns "danger" with null provided', () => {
            expect(data.GetCCAlert(undefined)).toBe('danger');
        });
        it('returns "danger" with 0 provided', () => {
            expect(data.GetCCAlert(0)).toBe('danger');
        });
        it('returns "success" with 50 provided', () => {
            expect(data.GetCCAlert(50)).toBe('success');
        });
    }) ;
    
    describe(data.GetCCData.name, () => {
        it('returns 3 items', () => {
            expect(data.GetCCData()).toHaveLength(3);
        });
    }); 
    
    describe(data.GetCCDataWithAlert.name, () => { 
        it('should properly map test data', () => {
            
            const result = data.GetCCDataWithAlert();
            
            expect(result[0].status).toBe('danger');
            expect(result[1].status).toBe('success');
            expect(result[2].status).toBe('warning');

        });
    
    });
    
});

