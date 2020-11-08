import userData from '../test/sample-user-data.js';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';
import User from '../src/user';
import Room from '../src/room';
import Booking from '../src/booking';
import Manager from '../src/manager'
let booking = new Booking(bookingsData)
let user = new User(userData)

let roomsAvailableTonight = document.querySelector('.available-tonight');
let hotelRevenueTonight = document.querySelector('.hotel-revenue');
let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');
let guestBookingDisplay = document.querySelector('.guest-bookings-display');
let guestTotalSpent = document.querySelector('.guest-total-spent');

const domUpdates = { 
  todaysAvailable(date, passedBookingData) {
    let emptyRooms = booking.availableRooms(date, passedBookingData);
    let roomCount = 
    `
    <div class="today-available">
    <h3>${emptyRooms}</h3>
    </div>
    `

    roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
  },

  todaysTotalRevenue(date, passedBookingData, passedRoomData) {
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
    let todaysPercentage = booking.occupancyTotal(date, passedRoomData, passedBookData);
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
    let grandTotal = user.findTotalSpent(id, passedRoomData, passedBookData)
    let total = 
    `
    <div class="guest-total">
      <h3>${grandTotal}</h3>
    </div>
    `
    guestTotalSpent.insertAdjacentHTML('beforeend', total)
  }
}

export default domUpdates;