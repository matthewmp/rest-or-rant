export default class Table {
    constructor(tableNumber, numberOfSeats) {
        this.tableNumber = tableNumber;
        this.numberOfSeats = numberOfSeats;
        this.available = true;
    }

    toggleAvailability(){
        this.available = !this.available;
    }
}