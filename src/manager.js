import userData from '../test/sample-user-data.js';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';

class Manager {
  constructor() {
    
  }
  
  findGuest(name) {
   let searchName = name.replace(/\w\S*/g, function(name){return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();});
    let foundUser = userData.find(user => {
    if(user.name === searchName) {
      return user
    }
   })
   return foundUser
  }

  
}

export default Manager;
