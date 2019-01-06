import React, { Component } from 'react';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, S3Album } from 'aws-amplify-react';
import { Link } from "react-router-dom";
import './App.css';
Amplify.configure(aws_exports);

// spelling dictated by Amplify
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
    state = {
        busy: false,
        companies: []
    }

    static defaultProps = {
        options: [],
        deleteOption: () => null,
    }

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
        this.setState({ busy: true });
        const newEvent = await API.graphql(graphqlOperation(addCompany, companyDetails));
        this.setState({ busy: false });
        alert(JSON.stringify(newEvent));
    }

    listQuery = async () => {
        console.log('listing companies');
        this.setState({ busy: true });
        const allCompanies = await API.graphql(graphqlOperation(listCompanys));
        alert(JSON.stringify(allCompanies.data.listCompanys.items));
        this.setState({ companies: allCompanies.data.listCompanys.items });
        this.setState({ busy: false });
    }

    // async handleDeleteClick(option, e) {
    //   e.preventDefault();

    //   if (window.confirm(`Are you sure you want to delete option ${option.id}`)) {
    //     const { deleteOption } = this.props;
    //     console.log('option - ', option);
    //     console.log('deleteOption - ', deleteOption);
    //     await deleteOption(option);
    //   }
    // }

    // handleSync = async () => {
    //   const { client } = this.props;
    //   // const query = QueryAllOptions;

    //   this.setState({ busy: true });

    //   await client.query({
    //     query,
    //     fetchPolicy: 'network-only',
    //   });

    //   this.setState({ busy: false });
    // }

    renderCompanies = (company) => (
        <Link to={`/company/${company.id}`} className="card" key={company.id}>

            {console.log('listing companies one = ', company)}
            <div className="content">
                <div className="header">{company.name}</div>
            </div>
            <div className="content">
                <div className="description"><i className="icon info circle"></i>name: {company.locationZipCode}</div>
            </div>
            <div className="extra content">
                <i className="icon comment"></i> rating: {company.creditRating}
            </div>
            <div className="extra content">
                <i className="icon comment"></i> years in market: {company.yearsOfOperation}
            </div>

        </Link>
    );

    render() {
        const { busy } = this.state;
        const { options } = this.props;

        return (
            <div className="App">
                <p> Pick a file</p>
                <input type="file" onChange={this.uploadFile} />
                <button onClick={this.listQuery}
                    disabled={busy}>
                    <i aria-hidden="true" className={`refresh icon ${busy && "loading"}`}></i>
                    GraphQL Query</button>
                <button onClick={this.addCompanyMutation}
                    disabled={busy}>
                    <i aria-hidden="true" className={`refresh icon ${busy && "loading"}`}></i>
                    GraphQL Mutation</button>
                <br />
                {console.log('listing companies one = ', this.state.companies)}
                {this.state.companies && [].concat(this.state.companies).sort((a, b) => a.name.localeCompare(b.name)).map(this.renderCompanies)}
                <S3Album level="private" path='' />
            </div>
        );
    }
}

export default withAuthenticator(App, true);
