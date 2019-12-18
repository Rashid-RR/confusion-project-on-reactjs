import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {

    constructor(props){
      super(props);
      this.state = { 
          dishes : DISHES,
          selectedDish:null
        };
    }

    onSelectedDish(dishId){
        this.setState({selectedDish:dishId});
        console.log("this is onSectedDish console data");
        console.log(this.state.selectedDish);
    }

    render(){
      return (
        <div>
          <Navbar dark color='primary'>
            <div className='container'>
              <NavbarBrand href="/"> Confusion Kitchen Restraunt</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onSelectedDish(dishId)} />
          <DishDetail selectedDish_2={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
          />
      </div>
      );
    }
  }

export default Main;
