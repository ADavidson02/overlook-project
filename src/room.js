import roomData from '../test/sample-room-data.js';

class Room {
  constructor (roomDetails) {
    this.number = roomDetails.number;
    this.roomType = roomDetails.roomType;
    this.bidet = roomDetails.bidet;
    this.bedSize = roomDetails.bedSize;
    this.numBeds = roomDetails.numBeds;
    this.costPerNight = roomDetails.costPerNight;
    this.roomData = roomData;
  }
  
  filterType(input) {
    let choices = roomData.reduce((results, room) => {
      if(room.roomType === input) {
        results.push(room)
      }
        return results
    }, [])
    if(choices.length > 0) {
      return choices
    } else {
      return "We apologize no rooms match your search, please alter your search and try again"
    }
  }
}
 export default Room;