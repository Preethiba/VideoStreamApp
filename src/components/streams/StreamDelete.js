import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const onDismiss = () => {
    window.history.back();
  };

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      Stream Delete
      <Modal
        header="Delete Stream"
        content="Are you sure you want to delete the stream?"
        actions={actions}
        onDismiss={onDismiss}
      />
    </div>
  );
};

export default StreamDelete;
