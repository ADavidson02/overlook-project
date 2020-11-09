import Booking from '../src/booking';
import Room from '../src/room';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';
import guestData from '../test/sample-user-data.js';

class User  {
  constructor (guestData){
    this.guestData = guestData;
  }
  
  findBookings(passedId, passedBookData) {
    let thisBookings = passedBookData.reduce((allUserBooking, booking) => {
      if (booking.userID === passedId) {
        allUserBooking.push(booking)
      }
      return allUserBooking
    }, [])
    return thisBookings
  }
  
  findTotalSpent(passedId, passedRoomData, passedBookData) {
    let userBookings = this.findBookings(passedId, passedBookData);
    let grandTotal = userBookings.reduce((total, booking) => {
       passedRoomData.forEach(room => {
        if(booking.roomNumber === room.number) {
          total += room.costPerNight
        }
      })
      return (Math.round(total * 1000) / 1000)
    }, 0)
    return `$${grandTotal}`
  }
}

export default User;
