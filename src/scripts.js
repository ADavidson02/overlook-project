// // import User from '../src/user';
// // import Room from '../src/room';
// // import Booking from '../src/booking';
// // import Manager from '../src/manager';
// import requests from './fetch';
// import './css/base.scss';
// import './css/manager-view.scss';
// import './css/guest-view.scss';
// 
// 
// 
// 
// 
// // window.addEventListener('click', windowOnClick);
// 
// const recievedGuestData = requests.fetchGuestData();
// const recievedRoomData = requests.fetchRoomsData();
// const recievedBookingsData = request.fetchBookingsData();
// const usernameInput = document.querySelector('.username-input');
// const passwordInput = document.querySelector('.password-input');
// const usernameError = document.querySelector('.username-error');
// const passwordError = document.querySelector('.password-error');
// const guestViews = document.querySelectorAll('.guest')
// const managerDashboard = document.querySelector('.manager-dashboard')
// // const enterButton = document.querySelector('.enter');
// // enterButton = document.addEventListener('click', checkGuestLogin);
// const managerLoginButton = document.querySelector('.manager-login')
// managerLoginButton.addEventListener('click', checkManageLogin)
// 
// let guestData;
// let roomData;
// let bookingsData;
// 
// Promise.all([recievedGuestData, recievedRoomData, recievedBookingsData])
//   .then(value => {
//     guestData = value[0];
//     roomData = value[1];
//     bookingsData = value[2];
//   })
// 
// function windowOnClick(event) {
//   debugger
//   if (event.target.classList.contains('manager-login')) {
//     debugger
//     checkManageLogin();
//     runManger();
//   }
//   if (event.target.classList.contains('enter')) {
//     checkGuestLogin();
//   }
// }
// // 
// // startApp() {
// // 
// // }
// 
// function checkManageLogin(usernameInput, passwordInput ) {
//   debugger
//   let username = usernameInput.value.toLowerCase();
//   let password = passwordInput.value.toLowerCase();
//   if(username !== 'manager') {
//     usernameError.classList.remove('hidden')
//   }
//   if(password !== 'overlook2020') {
//     passwordError.classList.remove('hidden')
//   }
//   runManger()
// }
// 
// 
// function runManger() {
//   guestViews.classList.add('hidden');
//   managerDashboard.classList.remove('hidden')
// }
// function checkGuestLogin(usernameInput, passwordInput) {
//   let username = usernameInput.value.toLowerCase();
//   let password = passwordInput.value.toLowerCase();
//   if(username !== 'customer50') {
//     usernameError.classList.remove('hidden')
//   }
//   if(password !== 'overlook2020') {
//     passwordError.classList.remove('hidden')
//   }
// }
// 
// function getTodaysDate() {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();
//   return today = yyyy + '/' + mm + '/' + dd;
// }