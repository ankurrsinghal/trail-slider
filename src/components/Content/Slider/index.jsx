import React, { Component } from 'react'
import FirstSlide from '../FirstSlide'
import MiddleSlide from '../MiddleSlide'
import EndSlide from '../EndSlide'

import './index.scss'

class Slider extends Component {
    render() {
        const {
            posts,
            info,
            author,
            currentSlide
        } = this.props


        return (
            <div className="trell-content-wrapper">
                <div
                    style={{
                        transform: `translateX(-${(currentSlide) * 100}%)`
                    }}
                    className="trell-content-scroller">
                    <FirstSlide
                        author={author}
                        title={info.name}
                        postCount={info.counts.posts}
                        tryoutsCount={info.counts.tryouts}
                        viewsCount={info.counts.views}
                        imageURL={posts[0].imageList['real']} />
                    {
                        posts.map(post => 
                            <MiddleSlide
                                key={post.id}
                                imageURL={post.imageList['real']}
                                location={post.checkInLocation}
                                about={post.about} />)
                    }
                    <EndSlide
                        author={author}
                        title={info.name}
                        likesCount={info.counts.posts}
                        commentsCount={info.counts.tryouts}
                        imageURL={posts[0].imageList['real']} />
                </div>
            </div>
        )
    }
}

export default Slider