const cloneArray = require('./cloneArray')

test('properly create a clone of the array', () => {
  const array = [1, 2, 3]

  //throw an error because they are in different memory addresses.
  //   expect(cloneArray(array)).toBe(array)

  //this allways to be the same without being in the same memory
  expect(cloneArray(array)).toEqual(array)
  expect(cloneArray(array)).not.toBe(array) //make sure its a clone not the exact same array
})
