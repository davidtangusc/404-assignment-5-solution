import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      size: "",
      comments: "",
      receipt: false,
      submit: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.toggleReceiptCheckbox = this.toggleReceiptCheckbox.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSizeChange(event) {
    this.setState({ size: event.target.value });
  }

  toggleReceiptCheckbox(event) {
    this.setState({ receipt: event.target.checked });
  }

  handleCommentsChange(event) {
    this.setState({ comments: event.target.value });
  }

  clearForm() {
    this.setState({
      name: "",
      size: "",
      comments: "",
      receipt: false,
      submit: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submit: true });
  }

  render() {
    return (
      <div className="container mt-3">
        <h1 className="text-center">T-Shirt Order Form</h1>
        {this.state.submit ? (
          <div>
            <h2 className="mb-4">Thank you for your order!</h2>
            <p>Name: {this.state.name}</p>
            <p>Size: {this.state.size}</p>
            <p>Comments: {this.state.comments}</p>
            <p>Reciept: {this.state.receipt ? "Yes" : "No"}</p>
            <button
              type="button"
              onClick={this.clearForm}
              className="btn btn-primary"
            >
              Back To Form
            </button>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={this.state.name}
                className="form-control"
                placeholder="David Tang"
                onChange={this.handleNameChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="size">
                Size
              </label>
              <select
                id="size"
                className="form-select"
                value={this.state.size}
                onChange={this.handleSizeChange}
              >
                <option>-- Select a size --</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="comments" className="form-label">
                Comments
              </label>
              <textarea
                id="comments"
                value={this.state.comments}
                className="form-control"
                onChange={this.handleCommentsChange}
                placeholder="Any special requests?"
              ></textarea>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="receipt"
                className="form-check-input"
                checked={this.state.receipt}
                onChange={this.toggleReceiptCheckbox}
              />
              <label htmlFor="receipt" className="form-label">
                Do you want a reciept?
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              onClick={this.clearForm}
              className="btn btn-secondary ms-3"
            >
              Clear
            </button>
          </form>
        )}
      </div>
    );
  }
}
