import React, { Component } from 'react';
import { Card,CardImg,CardTitle,CardBody,CardText } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    renderDishComments(dish){
        
    }

    render() {
        console.log();
        const dish = this.props.selectedDish_2;
        let append;
        if(dish != null){
            const data = Array.from(dish.comments);
            append = data.map((d) => {
                return (
                    <div key={d.id} className='mt-4'>
                        <div>{d.comment}</div>
                        <div>-- {d.author},{d.date}</div>
                    </div>
                );
            });
        }


        if(this.props.selectedDish_2 != null){
            return ( 
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg top src={this.props.selectedDish_2.image} alt={this.props.selectedDish_2.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish_2.name}</CardTitle>
                                <CardText>{this.props.selectedDish_2.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='ml-3 col-12 col-md-5'>
                        <h2>Comments</h2>
                        {append}
                        {/* {this.renderDishComments(this.props.selectedDish_2)} */}
                    </div>
                </div>
             );
        }else
            return(
                <div></div>
            );
        
    }
}
 
export default DishDetail;