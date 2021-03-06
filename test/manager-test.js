import {expect} from 'chai';
import Manager from '../src/manager'

describe('Manager', () => {
  let manager, userData, roomData, bookingsData
  
  beforeEach(() => {
    
    bookingsData = [
      {"id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": []},
      {"id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 24, "roomServiceCharges": []},
      {"id": "5fwrgu4i7k55hl6t6", "userID": 13, "date": "2020/01/10", "roomNumber": 12, "roomServiceCharges": []},
      {"id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/02/16", "roomNumber": 7, "roomServiceCharges": []}
    ];
    
    roomData = [{
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    },
    {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    },
    {
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
    },  
    {
      "number": 24,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 327.24
    }];
    
    userData = [
      {"id": 1, "name": "Leatha Ullrich"},
      {"id": 2, "name": "Rocio Schuster"},
      {"id": 43, "name": "Earline Hamill"},
      {"id": 20, "name": "Keon Kirlin"},
    ];
    manager = new Manager();
  })
  
  it('should be able to search a guest by their name', () => {
    expect(manager.findGuest("Rocio ScHuster", userData)).to.deep.equal({ id: 2, name: 'Rocio Schuster' })
  })
  
  it('should have a message when no user is found', () => {
    expect(manager.findGuest("Scooby Doo", userData)).to.deep.equal("Sorry no user was found with the name Scooby Doo")
  })
  
  it('should find all booking for searched user', () => {
    expect(manager.findGuestBookings("Keon Kirlin", userData, bookingsData)).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl6t7',
        userID: 20,
        date: '2020/02/16',
        roomNumber: 7,
        roomServiceCharges: []
      }
    ])
  })
  
  it('should return the amount a user has spent', () => {
    expect(manager.amountSpent("Earline Hamill", userData, roomData, bookingsData)).to.equal('$327.24')
  })
  
})