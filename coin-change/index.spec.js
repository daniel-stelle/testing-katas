const giveChange = require('./')

describe('Coin change', () => {
  it('returns 1 penny for $0.01 in change', () => {
    expect(giveChange(1)).toEqual({ 1: 1 })
  })

  it('returns 1 nickle for $0.05 in change', () => {
    expect(giveChange(5)).toEqual({ 5: 1 })
  })

  it('returns 1 dime for $0.10 in change', () => {
    expect(giveChange(10)).toEqual({ 10: 1 })
  })

  it('returns 1 quarter for $0.25 in change', () => {
    expect(giveChange(25)).toEqual({ 25: 1 })
  })

  it('returns 1 dollar for $1.00 in change', () => {
    expect(giveChange(100)).toEqual({ 100: 1 })
  })

  it('returns 1 of each coin for $1.41 in change', () => {
    expect(giveChange(141)).toEqual({ 1: 1, 5: 1, 10: 1, 25: 1, 100: 1 })
  })

  it('gives 1q, 1d, and 1n for $0.40 in change', () => {
    expect(giveChange(40)).toEqual({ 5: 1, 10: 1, 25: 1 })
  })

  it('gives 1D, 1d, and 1n for $1.15 in change', () => {
    expect(giveChange(115)).toEqual({ 5: 1, 10: 1, 100: 1 })
  })

  it('gives 2q, 1n, and 1p for $0.56 in change', () => {
    expect(giveChange(56)).toEqual({ 1: 1, 5: 1, 25: 2 })
  })

  it('gives 2D $2.00 in change', () => {
    expect(giveChange(200)).toEqual({ 100: 2 })
  })

  it('gives 4D, 2q, 1n, and 1p for $4.56 in change', () => {
    expect(giveChange(456)).toEqual({ 1: 1, 5: 1, 25: 2, 100: 4 })
  })

  it('gives 4D, 2d, and 3p for $4.23 in change', () => {
    expect(giveChange(423)).toEqual({ 1: 3, 10: 2, 100: 4 })
  })

  it('gives 1 20-cent piece for $0.20 in change', () => {
    expect(giveChange(20, [100, 25, 20, 10, 5, 1])).toEqual(
      { 20: 1 }
    )
  })

  xit('gives 2 20-cent pieces for $0.40 in change', () => {
    expect(giveChange(40, [100, 25, 20, 10, 5, 1])).toEqual([0, 0, 0, 2, 0, 0])
  })
})
