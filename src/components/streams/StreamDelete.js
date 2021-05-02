import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import fetchStream from "../../actions"

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

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

const mapStateToProps = state => {
  return {
    stream: state.streams
  };
};
export default connect(
  mapStateToProps,
  {
    fetchStream,
    StreamDelete
  }
)(StreamDelete);
