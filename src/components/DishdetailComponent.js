import React, { Component } from 'react'
import { Card,CardImg,CardTitle,CardBody,CardText } from 'reactstrap'


function RenderComments({comments}){
    if(comments != null){
        return(
            comments.map((d) => {
                return(
                <div className='container'>
                    <div key={d.id} className='mt-4'>
                        <div>{d.comment}</div>
                        <div>-- {d.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(d.date)))}</div>
                    </div>
                </div>
                );
            })
        );
    }else{
        return(
            <div></div>
        );
    }
}
function RenderDish({dish}){
    if(dish != null){
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5'>
                        <h2>Comments</h2>
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
            </div>
         );
    }else
        return(
            <div></div>
        );
}

const DishDetail = (props) => {
    return(
        <RenderDish dish={props.selectedDish_2} />
    );
}
 
export default DishDetail;