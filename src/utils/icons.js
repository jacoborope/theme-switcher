export const filteredIcons = data => {
  const theme = window.localStorage.getItem('theme')
  if (theme === 'light') {
    return data && data.filter(i => i.alt !== 'github_light')
  }
  return data && data.filter(i => i.alt !== 'github')
}
