import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";
import {Header,Segment,Form} from 'semantic-ui-react';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;




    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
      console.log(values);
    // this.props.createPost(values, () => {
    //   this.props.history.push("/");
    // });
  }

  render() {
    const { handleSubmit} = this.props;


    return (
        <div>
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Segment>
              <Form.Group widths="equal" >
      <Header as='h3' textAlign="center" > Team Leader Details</Header>
        <Field
          label="Name"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Phone Number"
          name="Phone"
          component={this.renderField}
        />
        </Form.Group>
        <Field
          label="Email"
          name="Email"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </Segment>

    </Form>
    <input
        name="profile"
        component='input'
        type="file"
        onChange={alert(this.value)}
    value=''/>
    </div>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
