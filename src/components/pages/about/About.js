import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            Hello, i am vishal choudhary currently studying in IIT ROORKEE pursuing my B.tech degree
            in 2nd year CIVIL department. I am from Sri Ganganagar Rajasthan. I am a explorer as well as
            a developer and a cheerfull person too i hope you like it.....
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 63, Friends Bank colony, Sri Ganganagar.
              </p>
              <p>
                <strong>Email:</strong> vaibhavs.s97r@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 8875850242
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Hindi
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
