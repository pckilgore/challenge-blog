import { reverseChronByKey } from './utils'

it('should reverse chron a list by key', () => {
  // assumes the key's value is something castable to a number representing seconds since
  // epoch
  const testData = [
    { num: '0' },
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: '5' },
    { num: 6 },
    { num: 7 },
    { num: 8 },
    { num: 9 },
  ]
  const chronData = [...testData].sort(reverseChronByKey('num'))
  chronData.forEach((el, idx) => {
    expect(+el.num).toEqual(9 - idx)
  })
})
