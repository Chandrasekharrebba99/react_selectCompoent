import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countrylist: countryAndCapitalsList, activeCapitalId: 'NEW_DELHI'}

  onchangeCap = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {countrylist, activeCapitalId} = this.state
    const countryi = countrylist.find(arr => arr.id === activeCapitalId)
    const {country} = countryi
    console.log(country)

    return (
      <div className="topcard">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div>
            <select id="selectid" onChange={this.onchangeCap}>
              {countrylist.map(arr => (
                <option key={arr.id} value={arr.id}>
                  {arr.capitalDisplayText}
                </option>
              ))}
            </select>
            <lable htmlFor="selectid"> is capital of Which country?</lable>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
