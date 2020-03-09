/* eslint-disable no-useless-concat */
import React from 'react';

export default function Progress({name, value}) {

    return (
        <div className="stats">
            <h6>{name}<span>{value}%</span></h6>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${value}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}