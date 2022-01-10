import React from 'react';

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>HTML</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '89%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>CSS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>JAVASCRIPT</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '45%' }}
                ></div>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col s6">
              <p>MySQL</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '40%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>JQUERY</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '35%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
