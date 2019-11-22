import React,{ Component } from "react";
import { Card,CardImg,CardImgOverlay,CardTitle,CardBody,CardText } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            selectedDish : null,
            dishes:this.props.dishes
         }
    }

    onSelectedDish(dish){
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={ ()=> this.onSelectedDish(dish) }>
                        <CardImg width='100' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className="row">
                    {menu}
                </div>
                
                <DishDetail selectedDish_2={this.state.selectedDish}/>
            </div>
         );
    }
}
 
export default Menu;