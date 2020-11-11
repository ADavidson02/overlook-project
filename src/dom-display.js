import userData from '../test/sample-user-data.js';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';
import User from '../src/user';
import Room from '../src/room';
import Booking from '../src/booking';
import Manager from '../src/manager'
let booking = new Booking(bookingsData)
let room = new Room(roomData)
let user = new User(userData)
let manager = new Manager()
let available;
let addBookButton

let roomsAvailableTonight = document.querySelector('.available-tonight');
let hotelRevenueTonight = document.querySelector('.hotel-revenue');
let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');
let guestBookingDisplay = document.querySelector('.guest-bookings-display');
let guestTotalSpent = document.querySelector('.guest-total-spent');
let searchedGuestResult = document.querySelector('.user-search-results')
const searchDateResults = document.querySelector('.date-search-results');


const domUpdates = { 
  todaysAvailable(date, passedBookingData) {
    let emptyRooms = booking.availableRoomAmount(date, passedBookingData.bookings);
  
    let roomCount = 
    `
    <div class="today-available">
    <h3>${emptyRooms}</h3>
    </div>
    `

    roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
  },

  todaysTotalRevenue(date, passedRoomData, passedBookData) {
    let total = booking.totalRevenue(date, passedRoomData, passedBookData);
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
    guestBookingDisplay.innerHTML = '';
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
        <h3>Guest: ${name}</h3>
      </div>
      `
      searchedGuestResult.insertAdjacentHTML('afterbegin', displayName)
  }, 

  displaySearchedGuestBookings(name, passedUserData, passedBookData) {
    let searchedGuestBookings = manager.findGuestBookings(name.id, passedUserData, passedBookData)
    if (searchedGuestBookings === undefined) {
      let displaySearchedGuest = 
      `
      <div class="found-guest-result">
        <h2>Sorry there were no bookings found for the searched name</h2>
      </div>
      `
      searchedGuestResult.insertAdjacentHTML('beforeend', displaySearchedGuest)
    } else {
      searchedGuestBookings.forEach( booking => {
        let displaySearchedGuest = 
        `
        <div class="found-guest-result">
          <p>${booking.date}</p>
        </div>
        `
        searchedGuestResult.insertAdjacentHTML('beforeend', displaySearchedGuest)
    })
    }
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
  },
  
  roomResults(searchDate, passedRoomData, passedBookData){ 
    console.log('value', searchDate)
    guestTotalSpent.innerHTML = '';
    searchDateResults.innerHTML = '';
    if (searchDate === undefined) {
      available = []
    }
     available = booking.availableRooms(searchDate, passedRoomData, passedBookData)
     if (available.length === 0)  {
       let displayAvailable = 
       `
       <div class="rooms-available">
        <h2> We sincerely apologize but there are no rooms available. Please try another date.</h2>
      </div>
       `
       searchDateResults.insertAdjacentHTML('beforeend', displayAvailable);
     } else {
       available.forEach(room => {
         let displayAvailable = 
         `
         <article class="rooms-available" id="${room.number}">
         <h3>Room type ${room.roomType}</h3>
         <p>Equipped with bidet ${room.bidet}</p>
         <p>Bed size ${room.bedSize}</p>
         <p>Number of beds ${room.numBeds}</p>
         <p>Price per night $${room.costPerNight}</p>
         <button class="book-room">Book</button>
         </article>
         `
         addBookButton = document.querySelector('.book-button');
         searchDateResults.insertAdjacentHTML('beforeend', displayAvailable);
       })
     }
  },
  
  showFiltered(filterInput) {
    searchDateResults.innerHTML = '';
    let filtered = room.filterType(filterInput, available)
    console.log('filtered', filtered)
    if (filtered === undefined) {
      let displayFiltered =
      `
      <div class="rooms-available">
       <h2> We sincerely apologize but there are no rooms available for that date and filter combination. Please alter your search and try again.</h2>
     </div>
      `
      searchDateResults.insertAdjacentHTML('afterbegin', displayFiltered);
    } else {
      filtered.forEach(room => {
        let displayFiltered = 
        `
        <div class="rooms-available" id="${room.number}">
        <h3>Room type ${room.roomType}</h3>
        <p>Equipped with bidet ${room.bidet}</p>
        <p>Bed size ${room.bedSize}</p>
        <p>Number of beds ${room.numBeds}</p>
        <p>Price per night $${room.costPerNight}</p>
        <button class="book-room">Book</button>
        </div>
        `
        addBookButton = document.querySelector('.book-button');
        searchDateResults.insertAdjacentHTML('afterbegin', displayFiltered);
      })
    }
  },
}

export default domUpdates;