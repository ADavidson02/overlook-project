import Booking from '../src/booking';
import Room from '../src/room';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';
import guestData from '../test/sample-user-data.js';

class User  {
  constructor (guestData){
    this.guestData = guestData;
  }
  
  findBookings(id, data) {
    let newBooking = new Booking(data)
    let list = newBooking.booking.bookings.filter(booking => {
      return booking.userID === id
    })
    return list
  }
  
  findTotalSpent(id, bookData, passedRoomData) {
    let newRoom = new Room(passedRoomData)
    let total = 0;
    let userBookings = this.findBookings(id, bookData)
    userBookings.forEach(booking => {
      newRoom.roomData.rooms.forEach(room => {
        if(booking.roomNumber === room.number) {
          console.log(room.costPerNight)
          total += room.costPerNight
        }
      })
    })
    return `$${total}`;
  }
}

export default User;
