import User from '../src/user';
import Room from '../src/room';
import Booking from '../src/booking';
import requests from './fetch';


window.addEventListener('click', windowOnClick);

const recievedGuestData = requests.fetchGuestData();
const recievedRoomData = requests.fetchRoomsData();
const recievedBookingsData = request.fetchBookingsData();
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const usernameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');

let guestData;
let roomData;
let bookingsData;

Promise.all([recievedGuestData, recievedRoomData, recievedBookingsData])
  .then(value => {
    guestData = value[0];
    roomData = value[1];
    bookingsData = value[2];
    startApp();
  })
  
  
  
function windowOnClick(event) {
  debugger
  if (event.target.classList.contains('manager-login')) {
    debugger
    checkManageLogin();
    runManger();
  }
  if (event.target.classList.contains('enter')) {
    checkGuestLogin();
  }
}
// 
// startApp() {
// 
// }

function checkManageLogin(usernameInput, passwordInput ) {
  let username = usernameInput.value.toLowerCase();
  let password = passwordInput.value.toLowerCase();
  if(username !== 'manager') {
    usernameError.classList.remove('hidden')
  }
  if(password !== 'overlook2020') {
    passwordError.classList.remove('hidden')
  }
}

function checkGuestLogin(usernameInput, passwordInput) {
  let username = usernameInput.value.toLowerCase();
  let password = passwordInput.value.toLowerCase();
  if(username !== 'customer50') {
    usernameError.classList.remove('hidden')
  }
  if(password !== 'overlook2020') {
    passwordError.classList.remove('hidden')
  }
}