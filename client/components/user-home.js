import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {DreamList} from '.'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props
  

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <a onClick={props.logout}>Log out</a>
      <DreamList dreams={[
        'Naked at school again',
        "I can't drive my car",              
      ]} />      
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
