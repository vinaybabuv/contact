import React from 'react';

function Contacts ({name , contact , type}){
 return (
 <div>
 <h2>{name}</h2>
 <h2>{contact}</h2>
 <h2>{type}</h2>
</div>);
};

export default Contacts;