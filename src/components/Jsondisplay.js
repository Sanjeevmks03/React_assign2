import React, { Component } from 'react'
import dishes from './dishes.json'

class Jsondisplay extends Component {
    render() {
        return (
            <div>
            <h6>Q.Create  a class component that displays a menu from dishes.json (provided with assignment). The
            file must be imported into the component and should display dishes, with images, comments and
            ratings. (images are not included but add images with the sources regardless).</h6>
            <div className='row'>
                {dishes.map((items) => {
                    return (
                        <div className='col-sm-3' key={items.id}>
                            <div className="card" >
                                <img className="card-img-top" src={items.image} alt="images" />
                                <div className="card-body">
                                    <h5 className="card-title">{items.name}</h5>
                                    <p className="card-text">{items.description}</p>
                                    <div> <b> Category: </b> {items.category} </div>
                                    <div><b> Label: </b> {items.label}</div>
                                    <div><b> Price: </b> {items.price} </div>
                                </div>
                                {items.comments.map((cmnt) => {
                                    return (
                                        <ul className="list-group " key={cmnt.id}>
                                            <li className="list-group-item"><b>Rating:</b> {cmnt.rating}</li>
                                            <li className="list-group-item"><b>comment:</b> {cmnt.comment}</li>
                                            <li className="list-group-item"><b>Author:</b>{cmnt.author}</li>
                                            <li className="list-group-item"><b>Date:</b>{cmnt.date}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div >
            </div>
    
        )
    }
}

export default Jsondisplay