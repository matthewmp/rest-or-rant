import sectionManager from '../../../components/Section_Manager/SectionMgr.Model';
import Table from '../../../components/Table/Table';

test('should create an instance of Table class', () => {
    expect(() => { // Requires 2 params (table #, max # of guests)
        const newTable = new Table();
    }).toThrow();

    expect(() => {  // Requires 2 params of type number
        const newTable = new Table('1', '2');
    })

    const newTable = new Table(1,2);

    expect(newTable instanceof Table).toBe(true);
})

test('add table and details (table #, # of seats)', () => {
    const newTable = new Table(1, 8);
    
    expect(newTable.tableNumber).toBe(1);
    expect(newTable.numberOfSeats).toBe(8);
})

test('toggle table availablity from true/false & vice/versa', () => {
    const newTable = new Table(1,1);

    expect(newTable.available).toBe(true);
    
    newTable.toggleAvailability();
    expect(newTable.available).toBe(false);

    newTable.toggleAvailability();
    expect(newTable.available).toBe(true);
})

describe('assign and change section associated with table', () => {
    let newTable;
    beforeEach(() => {
        newTable = new Table(1,4);
    })

    test('checks for initial value of null for assigned section', () => {
        newTable.assignedSection     
    })
})
