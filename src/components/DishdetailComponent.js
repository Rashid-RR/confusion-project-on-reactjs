import React, { Component } from 'react'
import { Card,CardImg,CardTitle,CardBody,CardText } from 'reactstrap'

class DishDetail extends Component {

    componentDidMount(){
        console.log('dishDetial component ComponneDidMount invoked')
    }
    componentDidUpdate(){
        console.log('dishDetial component ComponneDidUpdate invoked')
    }
    render() {
        console.log('dishDetial component render is invoked')
        console.log(this.props.selectedDish_2);
        const dish = this.props.selectedDish_2;
        let append;
        if(dish != null){
            append = dish.comments.map((d) => {
                return (
                    <div className='container'>
                        <div key={d.id} className='mt-4'>
                            <div>{d.comment}</div>
                            <div>-- {d.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(d.date)))}</div>
                        </div>    
                    </div>
                );
            });
        }


        if(this.props.selectedDish_2 != null){
            return ( 
                <div className='container'>
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
                        <div className='col-12 col-md-5'>
                            <h2>Comments</h2>
                            {append}
                        </div>
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