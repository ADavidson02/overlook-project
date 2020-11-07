// import roomData from '../test/sample-room-data.js';
// import roomData from './scripts.js'
// import roomData from './fetch.js'

class Room {
  constructor (roomData) {
    // this.number = roomData.number;
    // this.roomType = roomData.roomType;
    // this.bidet = roomData.bidet;
    // this.bedSize = roomData.bedSize;
    // this.numBeds = roomData.numBeds;
    // this.costPerNight = roomData.costPerNight;
    this.roomData = roomData;
  }
  
  filterType(input) {
    let checkInput = input.toLowerCase()
    let choices = roomData.reduce((results, room) => {
      if(room.roomType === checkInput) {
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