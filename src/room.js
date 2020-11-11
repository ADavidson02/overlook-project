class Room {
  constructor (roomData) {
    this.roomData = roomData;
  }
  
  filterType(input, passedRoomData) {
    let checkInput = input.toLowerCase()
    let choices = passedRoomData.reduce((results, room) => {
      if (room.roomType.includes(checkInput)) {
        results.push(room)
      }
      return results
    }, [])
    if (choices.length > 0) {
      return choices
    } else {
      return undefined
    }
  }
}
export default Room;