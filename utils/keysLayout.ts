interface Key {
  keyName: string
}

interface keyRow {
  keysRowItems: Key[]
  keysRowName: string
}

export default class KeysLayout {
  static readonly keysList: Array<keyRow> = [
    {
      keysRowItems: [
        { keyName: '1' },
        { keyName: '2' },
        { keyName: '3' },
        { keyName: '4' },
        { keyName: '5' },
        { keyName: '6' },
        { keyName: '7' },
        { keyName: '8' },
        { keyName: '9' },
        { keyName: '0' },
        { keyName: '-' },
        { keyName: '^' },
        { keyName: '¥' },
        { keyName: 'DEL' }
      ],
      keysRowName: 'firstRow'
    },
    {
      keysRowItems: [
        { keyName: 'Q' },
        { keyName: 'W' },
        { keyName: 'E' },
        { keyName: 'R' },
        { keyName: 'T' },
        { keyName: 'Y' },
        { keyName: 'U' },
        { keyName: 'I' },
        { keyName: 'O' },
        { keyName: 'P' },
        { keyName: '@' },
        { keyName: '[' },
        { keyName: 'Enter' }
      ],
      keysRowName: 'secondRow'
    },
    {
      keysRowItems: [
        { keyName: 'A' },
        { keyName: 'S' },
        { keyName: 'D' },
        { keyName: 'F' },
        { keyName: 'G' },
        { keyName: 'H' },
        { keyName: 'J' },
        { keyName: 'K' },
        { keyName: 'L' },
        { keyName: ';' },
        { keyName: ':' },
        { keyName: ']' }
      ],
      keysRowName: 'thirdRow'
    },
    {
      keysRowItems: [
        { keyName: 'Shift' },
        { keyName: 'Z' },
        { keyName: 'X' },
        { keyName: 'C' },
        { keyName: 'V' },
        { keyName: 'B' },
        { keyName: 'N' },
        { keyName: 'M' },
        { keyName: ',' },
        { keyName: '.' },
        { keyName: '/' },
        { keyName: '_' },
        { keyName: 'Shift' }
      ],
      keysRowName: 'fourthRow'
    },
    {
      keysRowItems: [{ keyName: '' }],
      keysRowName: 'fifthRow'
    }
  ]
}
