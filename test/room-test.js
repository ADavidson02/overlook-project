import {expect} from 'chai';

import User from '../src/user';
import Room from '../src/room';
// const roomData = require('./test-data.js');

describe('Room', () => {
  let user1, roomData, room1, room2, room3
  
  beforeEach(() => {
    
    user1 = new User({"id":1, "name":"Leatha Ullrich"});
    
    roomData = [room1, room2, room3]

    
    room1 = new Room({
      "number":1,
      "roomType":"residential suite",
      "bidet":true,
      "bedSize":"queen",
      "numBeds":1,
      "costPerNight":358.4
    })
    
    room2 = new Room ({
      "number":2,
      "roomType":"suite",
      "bidet":false,
      "bedSize":"full",
      "numBeds":2,
      "costPerNight":477.38
    })
    room3 = new Room ({
      "number":3,
      "roomType":"single room",
      "bidet":false,
      "bedSize":"king",
      "numBeds":1,
      "costPerNight":491.14
    })
  })
  
  it('should be an instance of a Room', () => {
    expect(room1).to.be.an.instanceof(Room);
  })
  
  // it('should be able to filter room by type', () => {
  // 
  //   expect(roomData.room.filterType('single room')).to.deep.equal([room3])
  // })
})