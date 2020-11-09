import userData from '../test/sample-user-data.js';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';
import User from '../src/user';
import Room from '../src/room';
import Booking from '../src/booking';
import Manager from '../src/manager'
let booking = new Booking(bookingsData)
let user = new User(userData)
let manager = new Manager()

let roomsAvailableTonight = document.querySelector('.available-tonight');
let hotelRevenueTonight = document.querySelector('.hotel-revenue');
let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');
let guestBookingDisplay = document.querySelector('.guest-bookings-display');
let guestTotalSpent = document.querySelector('.guest-total-spent');
let searchedGuestResult = document.querySelector('.user-search-results')


const domUpdates = { 
  todaysAvailable(date, passedBookingData) {
    let emptyRooms = booking.availableRooms(date, passedBookingData.bookings);
    let roomCount = 
    `
    <div class="today-available">
    <h3>${emptyRooms}</h3>
    </div>
    `

    roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
  },

  todaysTotalRevenue(date, passedRoomData, passedBookData) {
    let total = booking.totalRevenue(date, passedRoomData);
    let todaysTotal = 
    ` 
    <div class="todays-total">
    <h3>${total}</h3>
    </div>
    `
    hotelRevenueTonight.insertAdjacentHTML('beforeend', todaysTotal);
  },

  todaysOccupancy(date, passedRoomData, passedBookData) {
    let todaysPercentage = booking.occupancyTotal(date, passedRoomData.rooms, passedBookData.bookings);
    let todaysPercent = 
    `
    <div class="todays-occupancy">
    <h3>${todaysPercentage}</h3>
    </div>
    `
    hotelOccupancyTonight.insertAdjacentHTML('beforeend', todaysPercent)
  },
  
  displayGuestBookings(data) {
    data.forEach(bookingInfo=> {
      let guestBookings = 
      `
      <div class="current-guest-bookings">
        <h3>Date: ${bookingInfo.date}</h3>
        <p>Room type: ${bookingInfo.roomInfo.roomType}</p>
        <p>Bidet: ${bookingInfo.roomInfo.bidet}</p>
        <p>Bedsize: ${bookingInfo.roomInfo.bedSize}</p>
        <p>number of beds: ${bookingInfo.roomInfo.numBeds}</p>
        <p>cost per night: ${bookingInfo.roomInfo.costPerNight}</p>
      </div>
      `
      guestBookingDisplay.insertAdjacentHTML('beforeend', guestBookings)
    });
  },
  
  displayguestTotal(id, passedRoomData, passedBookData) {
    let grandTotal = user.findTotalSpent(id, passedRoomData.rooms, passedBookData.bookings)
    let total = 
    `
    <div class="guest-total">
      <h3>${grandTotal}</h3>
    </div>
    `
    guestTotalSpent.insertAdjacentHTML('beforeend', total)
  },
  
  
  displaySearchedGuestName(name) {
  
    let displayName = 
      `
      <div class="searched-name">
        <h3>Guest: ${name.name}</h3>
      </div>
      `
      searchedGuestResult.insertAdjacentHTML('afterbegin', displayName)
  }, 

  displaySearchedGuestBookings(name, passedUserData, passedBookData) {
  
    // let searchedGuest = manager.findGuest(name, passedUserData)
    let searchedGuestBookings = manager.findGuestBookings(name.id, passedUserData, passedBookData)
    searchedGuestBookings.forEach( booking => {
      let displaySearchedGuest = 
      `
      <div class="found-guest-result">
        <p>${booking.date}</p>
      </div>
      `
      searchedGuestResult.insertAdjacentHTML('beforeend', displaySearchedGuest)
    })
  },
  
  displaySearchedGuestTotal(searchName, passedUserData, passedRoomData, passedBookData) {
    let currentTotal = manager.amountSpent(searchName, passedUserData, passedRoomData, passedBookData)
    let displayTotal =
    `
    <div class="found-guest-total">
      <h3>Total amount spent ${ currentTotal}</h3>
    </div>  
    `
    searchedGuestResult.insertAdjacentHTML('afterend', displayTotal)
  }
  
}



export default domUpdates;