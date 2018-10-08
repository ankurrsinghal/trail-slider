import React from 'react'
import './index.scss'

const Suggestions = ({ suggestions }) => (
    <div className="trell-suggestions">
        <p className="label">Suggested Trails:</p>
        <div className="trell-suggestions-grid">
            <div className="trell-suggestions-column">
                <div className="trell-suggestion">
                    <div className="image">
                        <img src={suggestions[0].imageURL}/>
                    </div>
                    <div className="details-wrapper">
                        <div className="details">
                            <h1 className="name">{suggestions[0].title}</h1>
                            <div className="author">
                                <div className="author-name">
                                    By {suggestions[0].author.name}
                                </div>
                                <div className="author-image">
                                    <img src={suggestions[0].author.image} alt={suggestions[0].author.name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trell-suggestion">
                    <div className="image">
                            <img src={suggestions[1].imageURL}/>
                        </div>
                    <div className="details-wrapper">
                        <div className="details">
                            <h1 className="name">{suggestions[1].title}</h1>
                            <div className="author">
                                <div className="author-name">
                                    By {suggestions[1].author.name}
                                </div>
                                <div className="author-image">
                                    <img src={suggestions[1].author.image} alt={suggestions[1].author.name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trell-suggestions-column">
            <div className="trell-suggestion">
                    <div className="image">
                        <img src={suggestions[2].imageURL}/>
                    </div>
                    <div className="details-wrapper">
                        <div className="details">
                            <h1 className="name">{suggestions[2].title}</h1>
                            <div className="author">
                                <div className="author-name">
                                    By {suggestions[2].author.name}
                                </div>
                                <div className="author-image">
                                    <img src={suggestions[2].author.image} alt={suggestions[2].author.name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Suggestions