import "./Header.css"

export function Header() {

  return(
    <div className ="introContainer">
      <div className="intro">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <img className="ChurroLogo" src="src/images/ChurroLogo.png" width="350" height="110"></img>
          </div>
          <div className="col headerInfo">
            <img className="Churro" src="src/images/Churro.png" width="120" height="80"></img>
          </div>
          <div className="col headerInfo">
            <img className="Chocolate" src="src/images/Chocolate.png" width="120" height="80"></img>
          </div>
          <div className="col headerInfo">
            <img className="Cafe" src="src/images/Cafe.png" width="80" height="80"></img>
          </div>
        </div>
      </div>
    </div>
  )
}