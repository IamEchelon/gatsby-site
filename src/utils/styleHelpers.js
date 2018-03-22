const fixed = bgColor => ({
  height: '100%',
  backgroundColor: bgColor,
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0
})

const blendStyles = (style1, style2) => Object.assign(style1, style2)
