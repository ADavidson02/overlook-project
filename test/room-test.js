import {expect} from 'chai';

import User from '../src/user';
import Room from '../src/room';
import roomData from './sample-room-data.js';

describe('Room', () => {
  let user1, room, roomData, room1
  
  beforeEach(() => {
    user1 = new User({"id":1, "name":"Leatha Ullrich"});
  
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
    
    room1 = new Room({
      "number":1,
      "roomType":"residential suite",
      "bidet":true,
      "bedSize":"queen",
      "numBeds":1,
      "costPerNight":358.4
    });
    
    room = new Room(roomData);
  })
  
  it('should be an instance of a Room', () => {
    expect(room1).to.be.an.instanceof(Room);
  })
  
  it('should be able to filter room by type', () => {
    expect(room.filterType('single room')).to.deep.equal([
    {
       number: 7,
       roomType: 'single room',
       bidet: false,
       bedSize: 'queen',
       numBeds: 2,
       costPerNight: 231.46
     },
    {
      number: 4,
      roomType: 'single room',
      bidet: false,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 429.44
    }
  ])
  })
  
  it('should have an error if no rooms are available when filtered', () => {
    expect(room.filterType('junior suite')).to.equal()
  })
  
})