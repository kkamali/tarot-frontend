import React from 'react'
import { Link } from 'react-router-dom'

export const Welcome = props =>
  <div>
    <h1>Welcome!</h1>
    <p>I'm so glad you're here! I'm the Tiny Rosehunter Tarot, and it  is <em>wonderful</em> to see you! I hope I can be of service!</p>
    <p>To get started, think of a question you have or a challenge you are facing. No problem is too small for the Tiny Rosehunter Tarot! I always do my best to offer helpful advice.</p>
    <p>With your question in mind, next you must choose a spread. Each spread gives a different kind of reading, so be sure to pick one that makes sense for you today.</p>
    <div>
      <Link to="/spreads">
        <button>See the spreads</button>
      </Link>
      <button>View the cards</button>
    </div>
  </div>

export default Welcome