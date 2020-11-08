// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './css/manager-view.scss';
import './css/guest-view.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './index.html'
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import User from '../src/user';
import Room from '../src/room';
import Booking from '../src/booking';
import Manager from '../src/manager';
import requests from './fetch';
import domUpdates from './dom-display';
import './css/base.scss';
import './css/manager-view.scss';
import './css/guest-view.scss';
// import { todaysAvailable, todaysTotalRevenue, todaysOccupancy} from './dom-display';
window.addEventListener('click', windowOnClick);
// const recievedGuestData = requests.fetchGuestData();
// const recievedRoomData = requests.fetchRoomsData();
// const recievedBookingsData = requests.fetchBookingsData();
const loginPage = document.querySelector('.login');
let usernameCaptured = document.querySelector('.username-input');
const passwordCaptured = document.querySelector('.password-input');
const usernameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');
const guestViews = document.querySelector('.user-view')
const managerViews = document.querySelector('.manager-view');
// let roomsAvailableTonight = document.querySelector('.available-tonight');
// let hotelRevenueTonight = document.querySelector('.hotel-revenue');
// let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');

// let guestBookingDisplay = document.querySelector('.guest-bookings-display');
// let guestTotalSpent = document.querySelector('.guest-total-spent');

let guestData;
let roomsData;
let bookingsData;

function hideItem(toHide) {
  toHide.classList.add("hidden");
}
  
  function showItem(toShow) {
  toShow.classList.remove("hidden");
}

// let guestInformation
// let todaysRoomData 
// let todaysBookings 
let dom
let user
window.onload = getData;

function getData()  {
  const recievedGuestData = requests.fetchGuestData();
  const recievedRoomData = requests.fetchRoomsData();
  const recievedBookingsData = requests.fetchBookingsData();
  Promise.all([recievedGuestData, recievedRoomData, recievedBookingsData])
    .then(value => {
      guestData = value[0];
      roomsData = value[1];
      bookingsData = value[2];
    })
}

function windowOnClick(event) {
  if (event.target.classList.contains('manager-login')) {
    // startApp() 

    // checkManagerUsername(usernameCaptured);
    // checkForPassword(passwordCaptured);
    // if(checkManagerUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      let today = getTodaysDate() 
      runManger(today);
      domUpdates.todaysAvailable(today, bookingsData);
      domUpdates.todaysTotalRevenue(today, roomsData, bookingsData);
      domUpdates.todaysOccupancy(today, roomsData, bookingsData);
    // }
  }
  if (event.target.classList.contains('guest-login')) {
    // startApp() 
    // checkGuestUsername(usernameCaptured);
    // checkForPassword(passwordCaptured);
    // if(checkGuestUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      runGuest()  
    // }
  }
}

function checkManagerUsername(inputName) {
  hideItem(usernameError);
  if (inputName.value.length === 0) {
    showItem(usernameError);
    return 
  } else if(inputName.value.length > 0 ) {
    let checkedUsername = inputName.value;
    let loweredUsername = lowerCaseInput(checkedUsername)
    if (loweredUsername !== 'manager') {
      showItem(usernameError)
      return
    } else if (loweredUsername === 'manager')
    hideItem(usernameError)
    return 'good'
  }
} 

function checkForPassword(inputPassword) {
  hideItem(passwordError)
  if (inputPassword.value.length === 0) {
    showItem(passwordError);
    return
  } else if ( inputPassword.value.length > 0) {
    let checkedPassword = inputPassword.value;
    let loweredPassword = lowerCaseInput(checkedPassword);
    if (loweredPassword !== 'overlook2020') {
      showItem(passwordError)
      return
    } else if (loweredPassword === 'overlook2020') {
      return 'good'
    } 
  }
}

function lowerCaseInput(input) {
  return input.toLowerCase()
}

function runManger(date) {
  hideItem(loginPage)
  hideItem(guestViews)
  showItem(managerViews);
}

function checkGuestUsername(inputName) {
  hideItem(usernameError)
  if (inputName.value.length === 0) {
    showItem(usernameError);
    return 
  } else if(inputName.value.length > 0 ) {
    let checkedUsername = inputName.value
    let loweredUsername = lowerCaseInput(checkedUsername)
    if (!loweredUsername.includes('customer')) {
      showItem(usernameError)
      return
    } else if (loweredUsername.includes('customer'))
    return 'good'
  }
} 

function runGuest() {
  hideItem(loginPage)
  hideItem(managerViews)
  showItem(guestViews)
  let userNumber = usernameCaptured.value.slice(8,10)
  user = new User(+userNumber)
  loadGuestDashboard(+userNumber)
}

function getTodaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return today = yyyy + '/' + mm + '/' + dd;
}

// function todaysAvailable(date) {
//   let emptyRooms = todaysBookings.availableRooms(date);
//   let roomCount = 
//   `
//   <div class="today-available">
//   <h3>${emptyRooms}</h3>
//   </div>
//   `
//   roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
// }
// 
// function todaysTotalRevenue(date) {
//   let total = todaysBookings.totalRevenue(date, roomsData);
//   let todaysTotal = 
//   ` 
//   <div class="todays-total">
//   <h3>${total}</h3>
//   </div>
//   `
//   hotelRevenueTonight.insertAdjacentHTML('beforeend', todaysTotal);
// }
// 
// 
// function todaysOccupancy(date) {
//   let todaysPercentage = todaysBookings.occupancyTotal(date, roomsData);
//   let todaysPercent = 
//   `
//   <div class="todays-occupancy">
//   <h3>${todaysPercentage}</h3>
//   </div>
//   `
//   hotelOccupancyTonight.insertAdjacentHTML('beforeend', todaysPercent)
// }


function loadGuestDashboard(id) {
  let allGuestBookings = user.findBookings(id, bookingsData);
  let sortedDates = arrangerByDate(allGuestBookings)
  let allDetails = getDetails(sortedDates)
  domUpdates.displayGuestBookings(allDetails)
  domUpdates.displayguestTotal(id, roomsData, bookingsData)
}

function arrangerByDate(guestReservations) {
  return guestReservations.sort((a,b) => {
    return new Date(b.date) - new Date(a.date)
  })
}

// function displayGuestBookings(data) {
//   data.forEach(bookingInfo=> {
//     let guestBookings = 
//     `
//     <div class="current-guest-bookings">
//       <h3>Date: ${bookingInfo.date}</h3>
//       <p>Room type: ${bookingInfo.roomInfo.roomType}</p>
//       <p>Bidet: ${bookingInfo.roomInfo.bidet}</p>
//       <p>Bedsize: ${bookingInfo.roomInfo.bedSize}</p>
//       <p>number of beds: ${bookingInfo.roomInfo.numBeds}</p>
//       <p>cost per night: ${bookingInfo.roomInfo.costPerNight}</p>
//     </div>
//     `
//     guestBookingDisplay.insertAdjacentHTML('beforeend', guestBookings)
//   });
// }

function getDetails(data) {
  return data.reduce((allDetails, reservation) => {
    roomsData.rooms.forEach(room => {
      if(room.number === reservation.roomNumber) {
        allDetails.push({'date':reservation.date, 'roomInfo': room})
      }
    })
    return allDetails
  }, [])
}

// function displayguestTotal(id) {
//   let grandTotal = guestInformation.findTotalSpent(id, bookingsData,roomsData)
//   let total = 
//   `
//   <div class="guest-total">
//     <h3>${grandTotal}</h3>
//   </div>
//   `
//   guestTotalSpent.insertAdjacentHTML('beforeend', total)
// }



