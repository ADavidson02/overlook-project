import bookingsData from '../test/sample-bookings-data.js';
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
}

export default User;