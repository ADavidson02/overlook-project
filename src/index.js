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
import './css/base.scss';
import './css/manager-view.scss';
import './css/guest-view.scss';

window.addEventListener('click', windowOnClick);
const recievedGuestData = requests.fetchGuestData();
const recievedRoomData = requests.fetchRoomsData();
const recievedBookingsData = requests.fetchBookingsData();
const loginPage = document.querySelector('.login');
let usernameCaptured = document.querySelector('.username-input');
const passwordCaptured = document.querySelector('.password-input');
const usernameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');
const guestViews = document.querySelector('.user-view')
const managerViews = document.querySelector('.manager-view');
let roomsAvailableTonight = document.querySelector('.available-tonight');
let hotelRevenueTonight = document.querySelector('.hotel-revenue');
let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');
// const managerDashboard =  document.querySelector('.manager-dashboard');

// const enterButton = document.querySelector('.enter');
// enterButton = document.addEventListener('click', checkGuestLogin);
// const managerLoginButton = document.querySelector('.manager-login')
// managerLoginButton.addEventListener('click', checkManageLogin)

let guestData;
let roomsData;
let bookingsData;

Promise.all([recievedGuestData, recievedRoomData, recievedBookingsData])
  .then(value => {
    guestData = value[0];
    roomsData = value[1];
    bookingsData = value[2];
  })

let guestInformation
let todaysRoomData 
let todaysBookings 
   
function startApp()  {
  guestInformation = new User(guestData.users[1]);
  todaysBookings = new Booking(bookingsData);
  todaysRoomData = new Room(roomsData);
}

function windowOnClick(event) {
  if (event.target.classList.contains('manager-login')) {
    startApp() 
    checkManageLogin(usernameCaptured, passwordCaptured);
    let today = getTodaysDate() 
    runManger(today);
    todaysAvailable(today);
    todaysTotalRevenue(today);
    todaysOccupancy(today);
  }
  if (event.target.classList.contains('guest-login')) {
    startApp() 
    checkGuestLogin(usernameCaptured, passwordCaptured);
    runGuest()
  }
}
// 
// startApp() {
// 
// }

function checkManageLogin(inputName, managerPassword) {
  usernameError.classList.add('hidden')
  passwordError.classList.add('hidden')
  let checkedUsername = inputName.value;
  let loweredUsername = lowerCaseInput(checkedUsername)
  let checkedPassword = managerPassword.value;
  let loweredPassword = lowerCaseInput(checkedPassword);
  if(loweredUsername !== 'manager' || loweredUsername === '' ) {
    usernameError.classList.remove('hidden')
  }
  if(loweredPassword !== 'overlook2020' || loweredPassword === '') {
    passwordError.classList.remove('hidden')
  }
}

function lowerCaseInput(input) {
  return input.toLowerCase()
}

function runManger() {
  loginPage.classList.add('hidden');
  guestViews.classList.add('hidden');
  managerViews.classList.remove('hidden');
  // managerDashboard.classList.remove('hidden');
}

function checkGuestLogin(inputName, guestPassword) {
  usernameError.classList.add('hidden');
  passwordError.classList.add('hidden');
  let checkedUsername = inputName.value;
  let loweredGuestUsername = lowerCaseInput(checkedUsername)
  let checkedPassword = guestPassword.value;
  let loweredPassword = lowerCaseInput(checkedPassword);
  if(!loweredGuestUsername.includes('customer')) {
    usernameError.classList.remove('hidden')
  }
  if(loweredPassword !== 'overlook2020') {
    passwordError.classList.remove('hidden')
  }
}

function runGuest() {
  loginPage.classList.add('hidden');
  guestViews.classList.remove('hidden');
  managerViews.classList.add('hidden');
}

function getTodaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return today = yyyy + '/' + mm + '/' + dd;
}

function todaysAvailable(date) {
  let emptyRooms = todaysBookings.availableRooms(date);
  let roomCount = 
  `
  <div class="today-available">
  <h2>${emptyRooms}</h2>
  </div>
  `
  roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
}

function todaysTotalRevenue(date) {
  let total = todaysBookings.totalRevenue(date, roomsData);
  let todaysTotal = 
  ` 
  <div class="todays-total">
  <h2>${total}</h2>
  </div>
  `
  hotelRevenueTonight.insertAdjacentHTML('beforeend', todaysTotal);
}


function todaysOccupancy(date) {
  let todaysPercentage = todaysBookings.occupancyTotal("2020/01/24", roomsData);
  let todaysPercent = 
  `
  <div class="todays-occupancy">
  <h2>${todaysPercentage}</h2>
  </div>
  `
  hotelOccupancyTonight.insertAdjacentHTML('beforeend', todaysPercent)
}

