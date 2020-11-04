

class Room {
  constructor (roomDetails) {
    this.number = roomDetails.number;
    this.roomType = roomDetails.roomType;
    this.bidet = roomDetails.bidet;
    this.bedSize = roomDetails.bedSize;
    this.numBeds = roomDetails.numBeds;
    this.costPerNight = roomDetails.costPerNight;
  }
  // 
  // filterType(input) {
  //   console.log(input)
  //   roomData.reduce((results, room) => {
  //     if(room.roomType === input) {
  //       results.push(room.number)
  //     }
  //     console.log(results)
  //     return results
  //   }, [])
  // }
}
 export default Room;