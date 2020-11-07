import Booking from '../src/booking';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';
import guestData from '../test/sample-user-data.js';

class User  {
  constructor (guestData){
    this.guestData = guestData;
  }
  
  findBookings(id, data) {
    console.log('id', id)
    let newBooking = new Booking(data)
    // console.log(newBooking.booking.bookings)
    let list = newBooking.booking.bookings.filter(booking => {
      return booking.userID === id
    })
    console.log(list)
    return list
  }
  
  findTotalSpent(id) {
    let total = 0;
    let userBookings = this.findBookings(id)
    userBookings.forEach(booking => {
      roomData.forEach(data => {
        if(booking.roomNumber === data.number) {
          total += data.costPerNight
        }
      })
    })
    return `$${total}`;
  }
}

export default User;
