import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.TextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      console.log(this.textInput.value)
      this.textInput.value = null
    };
  }
  render() {
    return (
      <div className="content">
        <h1>todolist</h1>
        <input
          type="text"
          ref={this.TextInputRef}
        />
        <button
          onClick={this.focusTextInput}
        >입력</button>
      </div>
    )
  }
}

export default Header;