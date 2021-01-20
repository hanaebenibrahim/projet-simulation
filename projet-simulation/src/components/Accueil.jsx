import React, { Component } from 'react'
import Simulation from './Simulation.jsx';
import './Accueil.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class Accueil extends Component {
    render() {

        return(
            <div className="accueil">

               <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={Form}/>
                            <Route path="simulation" component={Simulation}/>
                        </Switch>
                        
                    </>
                </Router>

            </div>
          )
    }
}

class Form extends Component {
    
constructor(props) {
    super(props)
    this.state = {
        nbecaisses : 'deux' ,
        nbejours :  0,
        ix :  0,
        iy :  0,
        iz : 0
    }

   this.handleChange = this.handleChange.bind(this)
   this.lancerClicked = this.lancerClicked.bind(this)
/*
    this.handleNbecaissesChange = this.handleNbecaissesChange.bind(this)
    this.handleNbejoursChange = this.handleNbejoursChange.bind(this)
    this.handleIxChange = this.handleIxChange.bind(this)
    this.handleIyChange = this.handleIyChange.bind(this)
    this.handleIzChange = this.handleIzChange.bind(this)*/
}

   handleChange(event) {
       console.log(this.state);
       this.setState( {
           [event.target.name]
           : event.target.value
       }
       )
   }
 /*
    handleNbecaissesChange(event) {
       console.log(event.target.value);
       this.setState({nbecaisses : event.target.value})
   }
   handleNbejoursChange(event) {
      console.log(event.target.value);
      this.setState({nbejours : event.target.value})
   }
   handleIxChange(event) {
    console.log(event.target.value);
    this.setState({ix : event.target.value})
    }
    handleIyChange(event) {
        console.log(event.target.value);
        this.setState({iy : event.target.value})
    }
    handleIzChange(event) {
        console.log(event.target.value);
        this.setState({iz : event.target.value})
    }*/

    lancerClicked() {
       console.log(this.state)
       this.props.history.push("/simulation")
    }
    render() {
        return (
            <div> <h1>Veuillez saisir les paramètres de la simulation : </h1>
                <br />  <br />  <br />  <br /> 
                <label>
                 Nombre de caisses : <br /> 
                 <select name="nbecaisses" value={this.state.value}  onChange={this.handleChange}>
                        <option  value="deux"> 2 caisses</option>
                        <option value="trois"> 3 caisses </option>
                    </select>    <br />  <br /> 
                    </label>
                 Nombre de jours : <input type="text" name="nbejours" value={this.state.nbejours} onChange={this.handleChange} /> <br />  <br /> 
                 Valeur du germe IX : <input type="text" name="ix" value={this.state.ix} onChange={this.handleChange} /> <br /> <br /> 
                 Valeur du germe IY : <input type="text" name="iy" value={this.state.iy} onChange={this.handleChange} /> <br /> <br /> 
                 Valeur du germe IZ : <input type="text" name="iz" value={this.state.iz} onChange={this.handleChange} /> <br /> <br /> <br /> 
                 <button type="button" className="btn" onClick={this.lancerClicked}>Lancer la simulation</button>
            </div>

            /*
        <div>      <h1>Veuillez saisir les paramètres de la simulation : </h1>
          <table>
               <thread>
                  <tr>
                      <th>Nombre de caisses :</th>
                      <th>Nombre de jours :</th>
                      <th>Valeur du germe IX :</th>
                      <th>Valeur du germe IY :</th>
                      <th>Valeur du germe IZ :</th>
                  </tr>
               </thread>
               <tbody>
                   <tr>
                       <td>{this.state.form.nbecaisses}</td>
                       <td>{this.state.form.nbejours}</td>
                       <td>{this.state.form.ix}</td>
                       <td>{this.state.form.iy}</td>
                       <td>{this.state.form.iz}</td>
                   </tr>
               </tbody>

          </table>

        </div>*/
        )
    }
}





export default Accueil