import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js'
import Room from '../src/room';

class Booking {
  constructor(booking) {
    this.booking = booking;
  }
  
  availableRooms(date, passedBookData) {
    let occupiedRoom = passedBookData.bookings.filter(book => {
    return book.date === date 
    })
    return (25 - occupiedRoom.length)
  }
  
  totalRevenue(date, passedBookData) {
    let total = 0
    let list = this.occupiedRooms(date, passedBookData);
     list.forEach(reservation => {
      passedRoomData.forEach(hotelRoom => {
        if(hotelRoom.number === reservation.roomNumber)
        total += hotelRoom.costPerNight
      });
    });
    return `$${total}`;
  }

  occupiedRooms(date, passedBookData) {
    return passedBookData.bookings.filter(booking => {
    return booking.date === date
    })
  }
  
  occupancyTotal(date, passedRoomData, passedBookData) {
    let takenRooms = this.occupiedRooms(date, passedBookData)
    let total = takenRooms.length / passedRoomData.rooms.length
    let final = (total * 100)
    return `${final}%`
  }
  
  
}

  export default Booking; 
