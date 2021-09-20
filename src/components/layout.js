/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { darkTheme, lightTheme } from '../theme'

import Footer from '../components/Footer'
import GlobalStyle from '../globalStyles'
import Header from '../components/Header'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../useDarkMode'

const Layout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header theme={theme} toggle={toggleTheme} />
      <main>{children}</main>
      <Footer></Footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
