interface Key {
  id: string
  value: string
}

interface keyLine {
  keyLineId: string
  keyItems: Key[]
}

export default class KeysLayout {
  static readonly keys: Array<keyLine> = [
    {
      keyLineId: "firstLine",
      keyItems: [
        { id: "Digit1", value: "1" },
        { id: "Digit2", value: "2" },
        { id: "Digit3", value: "3" },
        { id: "Digit4", value: "4" },
        { id: "Digit5", value: "5" },
        { id: "Digit6", value: "6" },
        { id: "Digit7", value: "7" },
        { id: "Digit8", value: "8" },
        { id: "Digit9", value: "9" },
        { id: "Digit0", value: "0" },
      ],
    },
    {
      keyLineId: "secondLine",
      keyItems: [
        { id: "keyQ", value: "q" },
        { id: "keyW", value: "w" },
        { id: "keyE", value: "e" },
        { id: "keyR", value: "r" },
        { id: "keyT", value: "t" },
        { id: "keyY", value: "y" },
        { id: "keyU", value: "u" },
        { id: "keyI", value: "i" },
        { id: "keyO", value: "o" },
        { id: "keyP", value: "p" },
      ],
    },
    {
      keyLineId: "thirdLine",
      keyItems: [
        { id: "keyA", value: "a" },
        { id: "keyS", value: "s" },
        { id: "keyD", value: "d" },
        { id: "keyF", value: "f" },
        { id: "keyG", value: "g" },
        { id: "keyH", value: "h" },
        { id: "keyJ", value: "j" },
        { id: "keyK", value: "k" },
        { id: "keyL", value: "l" },
        { id: "keyENTER", value: "Enter" },
      ],
    },
    {
      keyLineId: "fourthLine",
      keyItems: [
        { id: "keyZ", value: "z" },
        { id: "keyX", value: "x" },
        { id: "keyC", value: "c" },
        { id: "keyV", value: "v" },
        { id: "keyB", value: "b" },
        { id: "keyN", value: "n" },
        { id: "keyM", value: "m" },
      ],
    },
    {
      keyLineId: "fifthLine",
      keyItems: [{ id: "keySpaceBar", value: " " }],
    },
  ]
}
