function ToDo(props) {
    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
        <span> REACTJS </span>
          <button className="btn">Me Contrate pls</button>
        </div>
      </div>
    );
}

export default ToDo;