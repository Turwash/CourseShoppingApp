import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        const playVideo = () => {
            window.location.href = "https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt";
          }; 
        return (
            <ProductConsumer>
                {value=>{
                   const {id, company, img, info, price, title, inCart} = value.detailProduct; 
                   return(
                       <div className="container py-5">
                           {/*title*/}
                            <div className="row>">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                                <div>
      <ButtonContainer onClick={playVideo}>Watch The Course Live</ButtonContainer>
    </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                            {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Course:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Teacher: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Course Details
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*buttons*/}
                                    <div>
                                       <Link to="/">
                                           <ButtonContainer>
                                               Get Another Courses
                                           </ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                               {inCart ? "inCart" : "Add Course to cart"}
                                            </ButtonContainer>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                       
                   ); 
                }}
            </ProductConsumer>
        )
    }
}
