import React, { Component } from 'react'
import '../styles/card.css'
import Date from './Date'

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className='card'>
                <div className='card-image'>
                <img src={this.props.photo} height={200} width={342} alt={"This is img"}/>
                  </div>
                <div className='card-text'>
                    <div className='card-title'> {this.props.title} </div>
                    <p className='card-para'>Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the regions twisted, bristled Joshua trees, the park. 
                    </p>
                    <Date color="color" category="Travel " date="/ January 21, 2022"/>
                </div> 
            </div>
      </div>
    )
  }
}
