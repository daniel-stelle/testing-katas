const toRoman = require('./')

describe('Roman numeral conversion', () => {
  it('converts 1 to I', () => {
    expect(toRoman(1)).toBe('I')
  })

  it('can repeat I twice for 2', () => {
    expect(toRoman(2)).toBe('II')
  })

  it('can repeat I three times for 3', () => {
    expect(toRoman(3)).toBe('III')
  })

  it('converts 10 to X', () => {
    expect(toRoman(10)).toBe('X')
  })

  it('can repeat X twice for 20', () => {
    expect(toRoman(20)).toBe('XX')
  })

  it('can repeat X three times for 30', () => {
    expect(toRoman(30)).toBe('XXX')
  })

  it('converts 100 to C', () => {
    expect(toRoman(100)).toBe('C')
  })

  it('can repeat C twice for 200', () => {
    expect(toRoman(200)).toBe('CC')
  })

  it('can repeat C three times for 300', () => {
    expect(toRoman(300)).toBe('CCC')
  })

  it('converts 1000 to M', () => {
    expect(toRoman(1000)).toBe('M')
  })

  it('can repeat M twice for 2000', () => {
    expect(toRoman(2000)).toBe('MM')
  })

  it('can repeat M three times for 3000', () => {
    expect(toRoman(3000)).toBe('MMM')
  })

  it('converts 5 to V', () => {
    expect(toRoman(5)).toBe('V')
  })

  it('converts 50 to L', () => {
    expect(toRoman(50)).toBe('L')
  })

  it('converts 500 to D', () => {
    expect(toRoman(500)).toBe('D')
  })

  it('converts 6 to VI', () => {
    expect(toRoman(6)).toBe('VI')
  })

  it('converts 7 to VII', () => {
    expect(toRoman(7)).toBe('VII')
  })

  it('converts 11 to XI', () => {
    expect(toRoman(11)).toBe('XI')
  })

  it('converts 22 to XXII', () => {
    expect(toRoman(22)).toBe('XXII')
  })

  it('converts 338 to CCCXXXVIII', () => {
    expect(toRoman(338)).toBe('CCCXXXVIII')
  })

  it('converts 4 to IV', () => {
    expect(toRoman(4)).toBe('IV')
  })

  it('converts 9 to IX', () => {
    expect(toRoman(9)).toBe('IX')
  })

  it('converts 40 to XL', () => {
    expect(toRoman(40)).toBe('XL')
  })

  it('converts 90 to XC', () => {
    expect(toRoman(90)).toBe('XC')
  })

  it('converts 400 to CD', () => {
    expect(toRoman(400)).toBe('CD')
  })

  it('converts 900 to CM', () => {
    expect(toRoman(900)).toBe('CM')
  })

  it('converts 14 to XIV', () => {
    expect(toRoman(14)).toBe('XIV')
  })

  it('converts 4884 to MMMMDCCCLXXXIV', () => {
    expect(toRoman(4884)).toBe('MMMMDCCCLXXXIV')
  })
})
