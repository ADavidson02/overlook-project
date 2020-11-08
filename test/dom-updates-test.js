import {expect} from 'chai';

import domUpdates from '../src/dom-display.js'
import userData from './sample-user-data.js';
import bookingsData from './sample-bookings-data.js';
import roomData from './sample-room-data.js';
import User from '../src/user';


describe('domUpdates', () => {
  let userData, roomData, bookingsData
  
  beforeEach(() => {
    userData = [
      {"id":1,"name":"Leatha Ullrich"},
      {"id":2,"name":"Rocio Schuster"},
      {"id":43,"name":"Earline Hamill"},
      {"id":20,"name":"Keon Kirlin"},
    ]
    roomData = [{
      "number":1,
      "roomType":"residential suite",
      "bidet":true,
      "bedSize":"queen",
      "numBeds":1,
      "costPerNight":358.4
    },
    {
      "number":2,
      "roomType":"suite",
      "bidet":false,
      "bedSize":"full",
      "numBeds":2,
      "costPerNight":477.38
    },
    {
      "number":3,
      "roomType":"single room",
      "bidet":false,
      "bedSize":"king",
      "numBeds":1,
      "costPerNight":491.14
    }];
    
    bookingsData = [
      {"id":"5fwrgu4i7k55hl6sz","userID":9,"date":"2020/04/22","roomNumber":15,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t5","userID":43,"date":"2020/01/24","roomNumber":24,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t6","userID":13,"date":"2020/01/10","roomNumber":12,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t7","userID":20,"date":"2020/02/16","roomNumber":7,"roomServiceCharges":[]}
    ]
  })
  
  // it('should return the amount of empty rooms', () => {
  //   expect(domUpdates.todaysAvailable("2020/04/22", bookingsData)).to.equal(24)
  // })
})
