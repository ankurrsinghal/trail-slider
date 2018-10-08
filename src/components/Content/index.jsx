import React, { Component } from 'react'
import Slider from './Slider'

import './index.scss'

class Content extends Component {

    state = {
        currentSlide: 0,
        isSlidingOut: false,
        isSlidingIn: true,
        isNavigating: false
    }

    handleNext = () => {
        this.setState({
            currentSlide: this.state.currentSlide + 1
        })
    }

    handlePrevious = () => {
        this.setState({
            currentSlide: this.state.currentSlide - 1
        })
    }

    render() {
        const {
            info, posts, author
        } = this.props

        const {
            currentSlide
        } = this.state
        

        return (
            <div className="trell-content">
                <div className="slider-controls">
                    <div
                        disabled={currentSlide === 0}
                        onClick={(this.handlePrevious)}
                        className="slider-control previous">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div
                        disabled={currentSlide === posts.length - 1}
                        onClick={this.handleNext}
                        className="slider-control next">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>

                <Slider
                    currentSlide={currentSlide}
                    info={info}
                    posts={posts}
                    author={author} />
            </div>
        )
    }
}

export default Content