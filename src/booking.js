import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js'
class Booking {
  constructor(bookingDetails) {
    this.id = bookingDetails.id;
    this.userID = bookingDetails.userID;
    this.date = bookingDetails.date;
    this.roomNumber = bookingDetails.roomNumber;
    this.roomServiceCharges = bookingDetails.roomServiceCharges
  }
  
  availableRooms(date) {
    let available = bookingsData.filter(booking => {
    return booking.date !== date
    })
    return available
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
}

export default Booking;