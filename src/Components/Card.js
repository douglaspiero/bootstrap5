import React from 'react';
import PropTypes from 'prop-types'
import image1 from '../assets/image1.jpg'

const Card = ({title, imageSource, text, url,}) => {   
    return (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp' >
            <div className='overflow'>
            <img src={imageSource} alt="" className='card-img-top'/>
            </div>
           <div className="card-body text-light">
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'> 
                {
                text ? text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
                </p>
                
                <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Click here">
                    Go to this website
                </a>    
           </div> 
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card;
