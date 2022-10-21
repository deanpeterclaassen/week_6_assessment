const {shuffleArray} = require('./utils')
const {bots} = require('./data')
describe('shuffleArray should', () =>{ 
   test('return an array the same length as the array sent in', ()=> expect(shuffleArray(bots).length).toBe(10)),
   
   test('should return an array',()=>
   expect(typeof shuffleArray(bots)).toBe('array'))
})