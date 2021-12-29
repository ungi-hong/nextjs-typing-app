interface Key {
  id: string
  value: string
  keyName: string
}

interface keyRow {
  keysRowId: string
  keysRowItems: Key[]
}

export default class KeysLayout {
  static readonly keysList: Array<keyRow> = [
    {
      keysRowId: "firstRow",
      keysRowItems: [
        { id: "Digit1", value: "1", keyName: "1" },
        { id: "Digit2", value: "2", keyName: "2" },
        { id: "Digit3", value: "3", keyName: "3" },
        { id: "Digit4", value: "4", keyName: "4" },
        { id: "Digit5", value: "5", keyName: "5" },
        { id: "Digit6", value: "6", keyName: "6" },
        { id: "Digit7", value: "7", keyName: "7" },
        { id: "Digit8", value: "8", keyName: "8" },
        { id: "Digit9", value: "9", keyName: "9" },
        { id: "Digit0", value: "0", keyName: "0" },
      ],
    },
    {
      keysRowId: "secondRow",
      keysRowItems: [
        { id: "keyQ", value: "q", keyName: "Q" },
        { id: "keyW", value: "w", keyName: "W" },
        { id: "keyE", value: "e", keyName: "E" },
        { id: "keyR", value: "r", keyName: "R" },
        { id: "keyT", value: "t", keyName: "T" },
        { id: "keyY", value: "y", keyName: "Y" },
        { id: "keyU", value: "u", keyName: "U" },
        { id: "keyI", value: "i", keyName: "I" },
        { id: "keyO", value: "o", keyName: "O" },
        { id: "keyP", value: "p", keyName: "P" },
      ],
    },
    {
      keysRowId: "thirdRow",
      keysRowItems: [
        { id: "keyA", value: "a", keyName: "A" },
        { id: "keyS", value: "s", keyName: "S" },
        { id: "keyD", value: "d", keyName: "D" },
        { id: "keyF", value: "f", keyName: "F" },
        { id: "keyG", value: "g", keyName: "G" },
        { id: "keyH", value: "h", keyName: "H" },
        { id: "keyJ", value: "j", keyName: "J" },
        { id: "keyK", value: "k", keyName: "K" },
        { id: "keyL", value: "l", keyName: "L" },
        { id: "keyENTER", value: "Enter", keyName: "ENTER" },
      ],
    },
    {
      keysRowId: "fourthRow",
      keysRowItems: [
        { id: "keyZ", value: "z", keyName: "Z" },
        { id: "keyX", value: "x", keyName: "X" },
        { id: "keyC", value: "c", keyName: "C" },
        { id: "keyV", value: "v", keyName: "V" },
        { id: "keyB", value: "b", keyName: "B" },
        { id: "keyN", value: "n", keyName: "N" },
        { id: "keyM", value: "m", keyName: "M" },
      ],
    },
    {
      keysRowId: "fifthRow",
      keysRowItems: [{ id: "keySpaceBar", value: " ", keyName: "" }],
    },
  ]
}
