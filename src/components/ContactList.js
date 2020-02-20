import React from 'react';
import {fetchContacts} from '../api/dataCalls'

class ContactList extends React.Component{
   state = {
       contacts : []
    }

    fetchData = () => {
        this.setState({
            loading: true,
            contacts: []
        })
        fetchContacts().then(contacts => {
            this.setState({
                contacts,
                loading: false
            })
        })
    }
    componentDidMount(){
     this.fetchData()
    }

    handleReload = () => {
        this.fetchData()
    }

    render (){
        return <div className='ui relaxed divided list'>
            <div>
                <button  onClick={this.handleReload}>Reload</button>
            </div>
                {this.state.contacts.length > 0 && (
                    this.state.contacts.map(post => {
                        return (
                        <div className='item' key={post.id}>
                            <i className='large middle aligned icon user' />
                            <div className='content'>
                                <div className='description'>
                                    <h2>{post.name}</h2>
                                    <p>{post.contact}</p>
                                </div>
                            </div>
                        </div>
                        )
                    }) )
                    } 
                    { this.state.loading && <p>Loading....</p>}
                </div>;
    };
    
}
export default ContactList;