import userData from '../test/sample-user-data.js';
import User from '../src/user';
let user = new User(userData);

class Manager {
  constructor() {
  }
  
  findGuest(name, passedUserData) {
    if ( name === undefined) {
      return 
    }
    let searchName = name.replace(/\w\S*/g, function(name)
      {return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();});
    let foundUser = passedUserData.find(user => {
      if (user.name === searchName) {
        return user
      }
    })
    if (foundUser !== undefined) {
      return foundUser
    } else if ( foundUser === undefined) {
      return `Sorry no user was found with the name ${name}`
    }
  }

  findGuestBookings(name, passedUserData, passedBookData) {
    let foundGuest = this.findGuest(name, passedUserData)
    if (foundGuest === undefined) {
      return 
    }
    let foundBookings = user.findBookings(foundGuest.id, passedBookData)
  
    return foundBookings
  }
  
  amountSpent(searchName, passedUserData, passedRoomData, passedBookData) {
    let foundGuest = this.findGuest(searchName, passedUserData)
    if (foundGuest === undefined) {
      return 
    }
    let foundTotal = user.findTotalSpent(foundGuest.id, passedRoomData, passedBookData);
    return foundTotal
  } 
}
export default Manager;

