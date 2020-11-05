import roomData from '../test/test-data.js';

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
    return roomData.reduce((results, room) => {
      if(room.roomType === input) {
        results.push(room)
      }
      console.log(results)
      return results
    }, [])
  }
}
 export default Room;