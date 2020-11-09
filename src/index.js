// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './css/manager-view.scss';
import './css/guest-view.scss';
import './css/buttons.scss';

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
const managerViews = document.querySelector('.manager-view')
const managerDashboard = document.querySelector('.manager-dashboard');
let homeButtonManger = document.querySelector('.home-button-manager');
let homeButtonGuest = document.querySelector('.home-button-guest')
let newReservationButton = document.querySelector('.new-reservation-button');
let searchGuestViewButton = document.querySelector('.search-guest-view');
let searchNameButton = document.querySelector('.search-name');
let searchNameInput = document.querySelector('.search-name-input');
let searchGuestTitle = document.querySelector('.search-guest');
let searchedGuestTitle = document.querySelector('.user-search-results');


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


let dom
let user
let manager
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
    manager = new Manager()
    // checkManagerUsername(usernameCaptured);
    // checkForPassword(passwordCaptured);
    // if(checkManagerUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      let today = getTodaysDate() 
      runManger(today);
      domUpdates.todaysAvailable(today, bookingsData);
      domUpdates.todaysTotalRevenue(today, roomsData.rooms, bookingsData.bookings);
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
  if (event.target.classList.contains('search-guest-view')) {
    hideItem(managerDashboard);
    hideItem(searchedGuestTitle)
    showItem(searchGuestViewButton);
    showItem(searchNameInput);
    showItem(homeButtonManger);
    showItem(newReservationButton);
    showItem(searchGuestTitle);
    showItem(searchNameButton)
    
    
  }
  if (event.target.classList.contains('search-name')) {
    hideItem(searchGuestTitle);
    hideItem(searchNameInput);
    hideItem(searchNameButton);
    showItem(searchedGuestTitle)
    searchGuestDatabase(searchNameInput.value, guestData, roomsData, bookingsData)
  }
  if (event.target.classList.contains('home-button-manager')) {
    hideItem(searchNameButton)
    hideItem(searchGuestTitle)
    hideItem(homeButtonManger)
    hideItem(searchNameInput)
    hideItem(searchedGuestTitle)
    showItem(managerDashboard)
    showItem(searchGuestViewButton)
    
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
  hideItem(loginPage);
  hideItem(guestViews);
  hideItem(searchNameButton)
  hideItem(searchNameInput)
  showItem(managerViews);
  showItem(managerDashboard);
  showItem(newReservationButton);
  showItem(searchGuestViewButton);
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
  showItem(newReservationButton);
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

function loadGuestDashboard(id) {
  let allGuestBookings = user.findBookings(id, bookingsData.bookings);
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

function searchGuestDatabase(name, passedUserData, passedRoomData, passedBookData) {
  let searchedGuest = manager.findGuest(searchNameInput.value, guestData.users)
  domUpdates.displaySearchedGuestBookings(searchedGuest, guestData, bookingsData.bookings)
  domUpdates.displaySearchedGuestName(searchNameInput.value)
  domUpdates.displaySearchedGuestTotal(searchNameInput.value, guestData.users, roomsData.rooms, bookingsData.bookings)
}

