import KeysLayout from 'utils/keysLayout'

const Keyboard = () => {
  console.log(KeysLayout.keysList)
  return (
    <>
      {KeysLayout.keysList.map((keyRow) => {
        return (
          <tr key={keyRow.keysRowName}>
            {keyRow.keysRowItems.map((key) => {
              return (
                <td key={key.keyName}>
                  <p>{key.keyName}</p>
                </td>
              )
            })}
          </tr>
        )
      })}
    </>
  )
}

export default Keyboard
