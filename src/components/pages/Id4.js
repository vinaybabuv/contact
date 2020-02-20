import React from 'react'
import {fetchContacts} from '../../api/dataCalls'

export class Id4 extends React.Component{
    state = {
        contacts : []
     }

    fetchstate (){
         fetchContacts().then(contacts => {this.setState({  contacts : contacts })})
     }
    componentDidMount(){
          this.fetchstate()
    }
    render(){

    const result = this.state.contacts.filter(data => data.id === "4").pop()  
    
      if ( this.state.contacts.length > 0) 
        {
         return (
        
           <div>
               <div className='item' >
                   <i className='large middle aligned icon user' />
                    <div className='content'>
                            <div className='description'>
                                <h2>{result.name}</h2>
                                <p>{result.contact}</p>
                                <p>{result.type}</p>
                            </div>
                    </div>
               </div>
            </div>
          )
         
        }
        else {  return <div>Loading</div>}
    }
}