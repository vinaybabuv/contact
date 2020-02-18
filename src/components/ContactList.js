import React from 'react';
import api from '../api/api';
//import Response from '../api/response'

class ContactList extends React.Component{
   state={contact : []};
    componentDidMount(){
        async function getUser() {
            try {
              const response = await api.get('/users');
              return response;
            } catch (error) {
              console.error(error);
            }
          }
          getUser().then(response=>{this.setState({contact : response}, ()=>{console.log(this.state)})}); 
          
            
    }
      renderList() {
          if(this.state.contact.data){
        return  this.state.contact.data.map(post => {
            return (
            <div className='item' key={post.id}>
                <i className='large middle aligned icon user' />
                <div className='content'>
                    <div className='description'>
                      <h2>{post.name}</h2>
                     <p>{post.phone}</p>
                    </div>
                </div>
            </div>
            );
        });
    }
    else 
    return <div>Loading</div>
    };
    render (){
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
    };
    
}
export default ContactList;