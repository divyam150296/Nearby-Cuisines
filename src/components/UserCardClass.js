import React from 'react'

class UserCardClass extends React.Component {

  constructor (props) {
    super (props) 
    console.log(props)

    this.state = {
      count: 2,
      latestCount: 4
    }
  }

  render () {
  
    const { name, age } = this.props

    return (
      <div>
        <div>
          User card class
        </div>
        <button onClick={() => {
          this.setState(
            {
              count: this.state.count + 1,
              latestCount: this.state.latestCount + 1
            }
          )
        }}>
          Count +
        </button>
        <div>Made for {name} of age: {age} count {this.state.count} new count {this.state.latestCount}</div>
      </div>
    )
  }
}

export default UserCardClass