import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';
import userData from '../test/sample-user-data.js';

class User  {
  constructor (userDetails){
    this.id = userDetails.id;
    this.name = userDetails.name;
  }
  
  findBookings(id) {
    let list = bookingsData.filter(booking => {
      return booking.userID === id
    })
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
