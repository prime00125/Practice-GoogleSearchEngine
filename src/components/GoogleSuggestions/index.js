// Import React and CSS file
import React, {Component} from 'react'
import './index.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    suggestions: suggestionsList,
  }

  change = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  fetch = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput, suggestions} = this.state

    const searchResults = suggestions.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="sicon"
          />
          <input
            type="search"
            onChange={this.change}
            value={searchInput}
            className="search-input"
          />
          <ul className="suggestions-list">
            {searchResults.map(eachItem => (
              <li key={eachItem.id} className="suggestion-item">
                <p> {eachItem.suggestion}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                  alt="arrow"
                  className="aicon"
                  onClick={() => this.fetch(eachItem.suggestion)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
