import React from 'react'
import './indes.scss'

import Stats from './Stats'
import Suggestions from './Suggestions'

const suggestions = [
    {
        title: 'A glimpse of munnar the tea basket of Kerela',
        author: {
            name: 'Shweta Jain',
            image: 'https://res.cloudinary.com/trell/f_auto,w_160,h_160,c_lfill,r_max/user-avatars/CsFKkVLcsEH4svcpv6lI.jpg'
        },
        imageURL: 'https://res.cloudinary.com/trell/f_auto,fl_progressive,t_medium/user-content/images/orig/EU7jeHSwdsf8R4XJ1hbb.jpg'
    },
    {
        title: 'The Backpacking Bridget Jones. The real version of Queen- the story of katy coins',
        author: {
            name: 'Shweta Jain',
            image: 'https://res.cloudinary.com/trell/f_auto,w_160,h_160,c_lfill,r_max/user-avatars/CsFKkVLcsEH4svcpv6lI.jpg'
        },
        imageURL: 'https://res.cloudinary.com/trell/f_auto,fl_progressive,t_medium/user-content/images/orig/thumb-O4CuorbcoNNptv27Rn4z.jpg'
    },
    {
        title: 'My 3am plans',
        author: {
            name: 'Shweta Jain',
            image: 'https://res.cloudinary.com/trell/f_auto,w_160,h_160,c_lfill,r_max/user-avatars/CsFKkVLcsEH4svcpv6lI.jpg'
        },
        imageURL: 'https://res.cloudinary.com/trell/f_auto,fl_progressive,t_medium/user-content/images/orig/QD8DYUB8gANNyBEuUr5B.jpg'
    }
]

const Sidebar = ({ info, posts }) => (
    <div className="trell-sidebar">
        <Stats
            likesCount={info.counts.loves}
            commentsCount={info.counts.comments}
            viewsCount={info.counts.views}/>    
        <Suggestions
            suggestions={suggestions}/>

        <div className="trell-mobile-links">
            <p className="label">Download the app</p>
            <div>
                <a className="android trell-mobile-link" href="#">
                    <i className="fab fa-android"></i>
                    Android
                </a>
                <a className="ios trell-mobile-link" href="#">
                    <i className="fab fa-apple"></i>
                    iPhone
                </a>
            </div>
        </div>
    </div>
)

export default Sidebar