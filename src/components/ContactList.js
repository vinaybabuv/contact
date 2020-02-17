import React from 'react';
import Contacts from './Contacts'
import Data from './Data';

function ContactList (){
    const RenderList = Data.map(item => {
        return <Contacts name={item.name} type = {item.type}/>;
    }); 
  return (
  <div>
      <h1>Contacts</h1>
      <div className='ui relaxed divided list'>{RenderList}</div>
  
  </div>);
 
};
export default ContactList;