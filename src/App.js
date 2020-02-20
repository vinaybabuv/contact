import React from 'react';
//import ContactList from './components/ContactList'
import {BrowserRouter , Route} from 'react-router-dom'
import {Contacts} from './components/pages/Contacts'
import {Id1} from './components/pages/Id1'
import {Id2} from './components/pages/Id2'
import {Id3} from './components/pages/Id3'
import {Id4} from './components/pages/Id4'
import {Id5} from './components/pages/Id5'

function App() {
  return (
    <div className="App">  
     <BrowserRouter>
            <Route path="/" exact component={Contacts} />
            <Route path="/id/1" exact component={Id1} />
            <Route path="/id/2" exact component={Id2} />
            <Route path="/id/3" exact component={Id3} />
            <Route path="/id/4" exact component={Id4} />
            <Route path="/id/5" exact component={Id5} />

        </BrowserRouter>
    </div>
  );
}

export default App;
