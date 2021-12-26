interface Key {
  id: string
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
        { id: "key1", keyName: "1" },
        { id: "key2", keyName: "2" },
        { id: "key3", keyName: "3" },
        { id: "key4", keyName: "4" },
        { id: "key5", keyName: "5" },
        { id: "key6", keyName: "6" },
        { id: "key7", keyName: "7" },
        { id: "key8", keyName: "8" },
        { id: "key9", keyName: "9" },
        { id: "key0", keyName: "0" },
        { id: "key-", keyName: "-" },
        { id: "key^", keyName: "^" },
        { id: "key¥", keyName: "¥" },
        { id: "keyDEL", keyName: "DEL" },
      ],
    },
    {
      keysRowId: "secondRow",
      keysRowItems: [
        { id: "keyQ", keyName: "Q" },
        { id: "keyW", keyName: "W" },
        { id: "keyE", keyName: "E" },
        { id: "keyR", keyName: "R" },
        { id: "keyT", keyName: "T" },
        { id: "keyY", keyName: "Y" },
        { id: "keyU", keyName: "U" },
        { id: "keyI", keyName: "I" },
        { id: "keyO", keyName: "O" },
        { id: "keyP", keyName: "P" },
        { id: "key@", keyName: "@" },
        { id: "key[", keyName: "[" },
        { id: "keyENTER", keyName: "Enter" },
      ],
    },
    {
      keysRowId: "thirdRow",
      keysRowItems: [
        { id: "keyA", keyName: "A" },
        { id: "keyS", keyName: "S" },
        { id: "keyD", keyName: "D" },
        { id: "keyF", keyName: "F" },
        { id: "keyG", keyName: "G" },
        { id: "keyH", keyName: "H" },
        { id: "keyJ", keyName: "J" },
        { id: "keyK", keyName: "K" },
        { id: "keyL", keyName: "L" },
        { id: "key;", keyName: ";" },
        { id: "key:", keyName: ":" },
        { id: "key]", keyName: "]" },
      ],
    },
    {
      keysRowId: "fourthRow",
      keysRowItems: [
        { id: "keyLeftShift", keyName: "Shift" },
        { id: "keyZ", keyName: "Z" },
        { id: "keyX", keyName: "X" },
        { id: "keyC", keyName: "C" },
        { id: "keyV", keyName: "V" },
        { id: "keyB", keyName: "B" },
        { id: "keyN", keyName: "N" },
        { id: "keyM", keyName: "M" },
        { id: "key,", keyName: "," },
        { id: "key.", keyName: "." },
        { id: "key/", keyName: "/" },
        { id: "key_", keyName: "_" },
        { id: "keyRightShift", keyName: "Shift" },
      ],
    },
    {
      keysRowId: "fifthRow",
      keysRowItems: [{ id: "keySpaceBar", keyName: "" }],
    },
  ]
}
