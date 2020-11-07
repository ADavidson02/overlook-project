import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js'
import Room from '../src/room';

class Booking {
  constructor(booking) {
    this.booking = booking;
  }
  
  availableRooms(date) {
    let occupiedRoom = this.booking.bookings.filter(book => {
    return book.date === date 
    })
    return (25 - occupiedRoom.length)
  }
  
  totalRevenue(passedInDate, data) {
    let room = new Room(data)
    let total = 0
    let list = this.occupiedRooms(passedInDate);
     list.forEach(reservation => {
      room.roomData.rooms.forEach(hotelRoom => {
        if(hotelRoom.number === reservation.roomNumber)
        total += hotelRoom.costPerNight
      });
    });
    return `$${total}`;
  }

  occupiedRooms(passedInDate) {
    return this.booking.bookings.filter(booking => {
    return booking.date === passedInDate
    })
  }
  
  occupancyTotal(date, data) {
    let room = new Room(data)
    let takenRooms = this.occupiedRooms(date)
    let total = takenRooms.length / room.roomData.rooms.length
    let final = (total * 100)
    return `${final}%`
  }
  
}

  export default Booking; 
