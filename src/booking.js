 
import Room from '../src/room';

class Booking {
  constructor(booking) {
    this.booking = booking;
  }
  
  availableRooms(date, passedRoomData, passedBookData) {
    let newDate = date.split('-').join('/')
    let foundReservations = this.findReservations(newDate, passedBookData)
    let takenRooms = []
    let busyRooms = passedRoomData.filter(room => {
        foundReservations.forEach(booking => {
          if(room.number === booking.roomNumber)
            takenRooms.push(room)
          }) 
        })
    let roomsForRent = this.roomAvailable(takenRooms, passedRoomData)
    return roomsForRent
  }
  
  roomAvailable(occupiedRooms, passedRoomData) {
    let final = passedRoomData.filter(room => {
        if(!occupiedRooms.includes(room)) {
          return room 
        }
    })
    return final 
  }

  availableRoomAmount(date, passedBookData) {
    let occupiedRoom = passedBookData.filter(book => {
    return book.date === date 
    })
    return (25 - occupiedRoom.length)
  }
  
  totalRevenue(date, passedRoomData, passedBookData) {
    let total = 0
    let list = this.findReservations(date, passedBookData);
     list.forEach(reservation => {
      passedRoomData.forEach(hotelRoom => {
        if(hotelRoom.number === reservation.roomNumber)
        total += hotelRoom.costPerNight
      });
    });
    let finalAmount = (Math.round(total * 1000) / 1000)
    return `$${finalAmount}`;
  }

  findReservations(date, passedBookData) {
    return passedBookData.filter(booking => {
    return booking.date === date
    })
  }
  
  occupancyTotal(date, passedRoomData, passedBookData) {
    let takenRooms = this.findReservations(date, passedBookData)
    let total = takenRooms.length / passedRoomData.length
    let final = (total * 100)
    return `${final}%`
  }
}

  export default Booking; 
