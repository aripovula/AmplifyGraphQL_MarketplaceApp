import React, { Component } from 'react';
// import logo from './logo.svg';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, S3Album } from 'aws-amplify-react';
import './App.css';
Amplify.configure(aws_exports);

const listCompanys = `query listTodos {
  listCompanys{
    items{
      id
      name
      locationZipCode
      creditRating
      yearsOfOperation
    }
  }
}`

const addCompany = `mutation createCompany($name:String! $locationZipCode:String! $creditRating:CreditRating! $yearsOfOperation:Int!) {
  createCompany(input:{
    name:$name
    locationZipCode:$locationZipCode
    creditRating:$creditRating
    yearsOfOperation:$yearsOfOperation
  }){
    id
    name
    locationZipCode
    creditRating
    yearsOfOperation
  }
}`

class App extends Component {

  uploadFile = (evt) => {
    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }

  addCompanyMutation = async () => {
    const companyDetails = {
      name: 'Assemble Works Ltd.',
      locationZipCode: '12345',
      creditRating: 'BB',
      yearsOfOperation: 2
    };
    const newEvent = await API.graphql(graphqlOperation(addCompany, companyDetails));
    alert(JSON.stringify(newEvent));
  }

  listQuery = async () => {
    console.log('listing companies');
    const allCompanies = await API.graphql(graphqlOperation(listCompanys));
    alert(JSON.stringify(allCompanies));
  }

  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.addCompanyMutation}>GraphQL Mutation</button>
        <S3Album level="private" path='' />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
