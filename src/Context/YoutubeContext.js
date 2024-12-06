import React from 'react'

const YoutubeContext = React.createContext({
  isTheme: false,
  cartList: [],
  ThemeIsClicked: () => {},
  addSaveItems: () => {},
})
export default YoutubeContext
