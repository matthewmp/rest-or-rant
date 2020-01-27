import Table from '../models/table/Table';

test('should create an instance of Table class', () => {
    const newTable = new Table();

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