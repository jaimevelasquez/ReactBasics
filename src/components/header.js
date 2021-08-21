import React, { Component } from 'react'

// const Header = () => {
//   const getTheYear = () => {
//     const newDate = new Date()
//     return newDate.getFullYear()
//   }

//   return <div>Hello World {getTheYear()} </div>
// }

// class base components
//
/**
 * you can use this line of code with component, or you can transfer component at the top something like this
 * import React from 'react'
 * class Header extends React.Component {
 * or
 * import React, { Component } from 'react'
 * class Header extends Component {
 *
 */

// class Header extends Component {
//   //properties and methods
//   render() {
//     return (
//       <header style={styles.header}>
//         <div style={styles.logo}>LOGO</div>
//         <input type='text' name='' id='' />
//       </header>
//     )
//   }
// }

class Header extends Component {
  //properties and methods
  render() {
    return (
      <header>
        <div className='logo'>LOGO</div>
        <input type='text' name='' id='' />
      </header>
    )
  }
}

// let styles = {
//   header: {
//     background: '#03a9fa',
//   },
//   logo: {
//     color: '#ffffff',
//     fontFamily: 'Anton',
//     textAlign: 'center',
//     fontSize: '45px',
//   },
// }

export default Header
