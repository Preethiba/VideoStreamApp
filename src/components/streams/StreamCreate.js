import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return <input {...formProps.input} />; //assigns form props to input tag and returns that to field component
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
