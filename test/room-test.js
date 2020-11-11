import {expect} from 'chai';
import Room from '../src/room';

describe('Room', () => {
  let room, roomData, room1
  
  beforeEach(() => {
  
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
      "number": 7,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 231.46
    },
    {
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
    },
    {
      "number": 24,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 327.24
    }];
    
    room1 = new Room({
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    });
    
    room = new Room(roomData);
  })
  
  it('should be an instance of a Room', () => {
    expect(room1).to.be.an.instanceof(Room);
  })
  
  it('should have a room number', () => {
    expect(roomData[2].number).to.equal(7);
  })
  
  it('should have a room type', () => {
    expect(roomData[0].roomType).to.equal("residential suite");
  })
  
  it('should have a boolen for if room has a bidet', () => {
    expect(roomData[1].bidet).to.equal(false);
    expect(roomData[0].bidet).to.equal(true);
  })
  
  it('should have a bedsize', () => {
    expect(roomData[2].bedSize).to.equal('queen');
  })
  
  it('should have a number of beds', () => {
    expect(roomData[1].numBeds).to.equal(2);
  })
  
  it('should have a price per night', () => {
    expect(roomData[4].costPerNight).to.equal(327.24)
  })
  
  it('should be able to filter room by type', () => {
    expect(room.filterType('single room', roomData)).to.deep.equal([
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
    expect(room.filterType('junior suite', roomData)).to.equal(undefined)
  })
  
  it('should check input', ()  => {
    expect(room.filterType('RESIDENTIAL', roomData)).to.deep.equal([
      {
        number: 1,
        roomType: 'residential suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 358.4
      }
    ])
  })
})