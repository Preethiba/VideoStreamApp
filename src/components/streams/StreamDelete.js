import React from "react";
import Modal from "../Modal";

class StreamDelete extends React.Component {
  onDismiss = () => {
    window.history.back();
  };

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        Stream Delete
        <Modal
          header="Delete Stream"
          content="Are you sure you want to delete the stream?"
          actions={this.renderActions()}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default StreamDelete;
