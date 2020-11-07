import roomData from '../test/sample-room-data.js';


class Room {
  constructor (roomData) {
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