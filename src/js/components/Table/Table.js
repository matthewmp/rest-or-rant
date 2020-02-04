export default class Table {
    constructor(tableNumber, numberOfSeats) {
        if(arguments.length < 2){
            throw new Error('Table number and number of seats are required to create a new table');
        }
        else if((typeof arguments[0] !== 'number') || (typeof arguments[1] !== 'number')) {
            throw new Error('Two numbers are required for table # and max # of guests per table');
        }

        this.tableNumber = tableNumber;
        this.numberOfSeats = numberOfSeats;
        this.available = true;
        this.assignedSection = null;
    }

    toggleAvailability(){
        this.available = !this.available;
    }
}