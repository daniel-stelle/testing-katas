const toRoman = require('./')

describe('Roman numeral conversion', () => {``
  it('converts 1 to I', () => {
    // Arrange
    const value = 1

    // Act
    const result = toRoman(value)

    // Assert
    expect(result).toBe('I')
  })

  it('converts 5 to V', () => {
    expect(toRoman(5)).toBe('V')
  })

  it('converts 10 to X', () => {
    expect(toRoman(10)).toBe('X')
  })

  it('converts 50 to L', () => {
    expect(toRoman(50)).toBe('L')
  })

  it('converts 100 to C', () => {
    expect(toRoman(100)).toBe('C')
  })

  it('converts 500 to D', () => {
    expect(toRoman(500)).toBe('D')
  })

  it('converts 1000 to M', () => {
    expect(toRoman(1000)).toBe('M')
  })

  it('gives repetition of I 2 times', () => {
    // Arrange
    const value = 2

    // Act
    const result = toRoman(value)

    // Assert
    expect(result).toBe('II')
  })

  it('gives repetition of I 3 times', () => {
    expect(toRoman(3)).toBe('III')
  })

  it('gives repetition of X 2 times', () => {
    expect(toRoman(20)).toBe('XX')
  })

  it('gives repetition of X 3 times', () => {
    expect(toRoman(30)).toBe('XXX')
  })

  it('gives repetition of C 2 times', () => {
    expect(toRoman(200)).toBe('CC')
  })

  it('gives repetition of C 3 times', () => {
    expect(toRoman(300)).toBe('CCC')
  })

  it('gives repetition of M 2 times', () => {
    expect(toRoman(2000)).toBe('MM')
  })

  it('gives repetition of M 3 times', () => {
    expect(toRoman(3000)).toBe('MMM')
  })

  it('does not give repetition of I 4 times', () => {
    expect(toRoman(4)).not.toBe('IIII')
  })

  it('does not give repetition of X 4 times', () => {
    expect(toRoman(40)).not.toBe('XXXX')
  })

  it('does not give repetition of C 4 times', () => {
    expect(toRoman(400)).not.toBe('CCCC')
  })

  it('uses subtraction on numbers one numeral less than major numeral', () => {
    expect(toRoman(4)).toBe('IV')
    expect(toRoman(9)).toBe('IX')
    expect(toRoman(40)).toBe('XL')
    expect(toRoman(90)).toBe('XC')
    expect(toRoman(400)).toBe('CD')
    expect(toRoman(900)).toBe('CM')
  })

  it('does not give VX for 5', () => {
    expect(toRoman(5)).not.toBe('VX')
  })

  it('does not give LC for 50', () => {
    expect(toRoman(50)).not.toBe('LC')
  })

  it('does not give DM for 500', () => {
    expect(toRoman(500)).not.toBe('DM')
  })

  it('handles all cases together', () => {
    expect(toRoman(2849)).toBe('MMDCCCXLIX')
  })
})
