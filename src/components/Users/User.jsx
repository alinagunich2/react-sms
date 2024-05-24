import React from "react";

export const User = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvote,
  isInvited,
}) => (
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />
      <div>
        <h3>
          {first_name} {last_name}
        </h3>
        <p>
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
          </svg>
          {email}
        </p>
      </div>
    </div>
    <div className="svg" onClick={() => onClickInvote(id)}>
      {isInvited ? (
        <svg
          height="20px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="20px"
        >
          <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" />
        </svg>
      ) : (
        <svg
          height="20px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256  c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" />
        </svg>
      )}
    </div>
  </li>
);
