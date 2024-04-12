
const Switcher = ({ onClick, switcherName, newstyle }) => {
  return (
    <div className="control" onClick={onClick}>
      <p>{switcherName}</p>
      <div className="select">
        <div className="inner" style={newstyle}></div>
      </div>
    </div>
  );
};

export default Switcher;
