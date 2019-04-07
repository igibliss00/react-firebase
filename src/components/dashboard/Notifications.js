import React from 'react'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return <li key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">4th of May</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications