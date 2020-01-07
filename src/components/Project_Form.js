import React from "react"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Form,
  Input,
  TextArea
} from 'semantic-ui-react';
class SubForm extends React.Component {
  state = {
    members: [{fname:"", lname:"",pnumber:''}]
  }
handleChange = (e) => {
    if (["fname", "lname",'pnumber'].includes(e.target.className) ) {
      let members = [...this.state.members]
      members[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ members }, () => console.log(this.state.members))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
addMember = (e) => {
    this.setState((prevState) => ({
      members: [...prevState.members, {fname:"", lname:"",pnumber:""}],
    }));
  }
handleSubmit = (e) => { e.preventDefault() }
render() {
    let { members} = this.state
    return (
        <Segment inverted>
            <Form inverted onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <Divider inverted horizontal>Team leader detail</Divider>
                <Form.Group widths='equal'>
                    <Form.Input

                        label='First Name'
                        placeholder='First Name'
                    />
                    <Form.Input

                        label='Second Name'
                        placeholder='Second Name'
                    />
                    <Form.Input

                        label='Mobile Number'
                        placeholder='Mobile Number'
                    />
                </Form.Group>
                <Divider inverted horizontal>Team Member Detail</Divider>

              {/* <label htmlFor="name">Owner</label>
              <input type="text" name="owner" id="owner"  /> */}
              {/* <input type="text" name="owner" id="owner" value={owner} /> */}

              {/* <label htmlFor="description">Description</label>
              <input type="text" name="description" id="description"  /> */}

              {
                members.map((val, idx)=> {
                  let memId = `Member-${idx}`,fnameId='fname-${idx}',lnameId='lname-${idx}',pnumberId='pnumber-${idx}';
                  return (
                    <div key={idx}>
                        <h4>{`Member ${idx + 1}`}</h4>
                      {/* <label htmlFor={memId}>{`member #${idx + 1}`}</label> */}
                      {/* <div>Enter first name</div> */}
                      <Form.Group widths='equal'>
                      <Form.Input
                        type="text"
                        label="First Name"
                        placeholder="First Name"
                        name={fnameId}
                        data-id={idx}
                        id={fnameId}
                        value={members[idx].fname}
                        className="fname"
                      />
                      <Form.Input
                        type="text"
                        label="Last Name"
                        placeholder="Last Name"
                        name={lnameId}
                        data-id={idx}
                        id={lnameId}
                        value={members[idx].lname}
                        className="lname"
                      />
                      <Form.Input
                        type="number"
                        label="Phone Number"
                        placeholder="Phone Number"
                        name={pnumberId}
                        data-id={idx}
                        id={pnumberId}
                        value={members[idx].pnumber}
                        className="pnumber"
                      />

</Form.Group>


                    </div>
                  )
                })
              }
<Button attached='left' onClick={this.addMember}>


     <Icon  name='user plus' size='large'  />
   Add a Member
 </Button>
              {/* <input type="submit" value="Submit"/> */}
              <Divider inverted horizontal>About the Project</Divider>
              <Form.Field
          control={TextArea}

          placeholder='Tell us about your project...'
        />
                  <Button>Submit</Button>
            </Form>
        </Segment>

    )
  }
}
export default SubForm
