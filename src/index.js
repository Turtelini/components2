import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" text="Awesome" date="Today at 4:00 PM" />
      <CommentDetail author="Jane" text="cool" date="Today at 2:00 AM"/>
      <CommentDetail author="Luke" text="Dumb man" date="Yesterday"/>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
