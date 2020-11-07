// import bookingsData from '../test/sample-bookings-data.js';
// import roomData from '../test/sample-room-data.js'
// import bookingsData from './scripts.js'
// import bookingsData from './fetch.js'
class Booking {
  constructor(booking) {
    // this.id = bookingObj.id;
    // this.userID = bookingObj.userID;
    // this.date = bookingObj.date;
    // this.roomNumber = bookingObj.roomNumber;
    // this.roomServiceCharges = bookingObj.roomServiceCharges;
    this.booking = booking;
  }
  
  availableRooms(date) {
    let occupiedRoom = this.booking.bookings.filter(book => {
    return book.date === date 
    })
    return (25 - occupiedRoom.length)
  }
  
  totalRevenue(date) {
    let total = 0
    let list = this.occupiedRooms(date);
     list.forEach(room => {
      roomData.forEach(data => {
        if(room.roomNumber === data.number)
        total += data.costPerNight
      });
    });
    return `$${total}`;
  }

  occupiedRooms(date) {
    return bookingsData.filter(booking => {
    return booking.date === date
    })
  }
  
  occupancyTotal(date) {
    let takenRooms = this.occupiedRooms(date)
    let total = takenRooms.length / roomData.length 
    let final = (total * 100)
    return `${final}%`
  }
  
}

  export default Booking; 
