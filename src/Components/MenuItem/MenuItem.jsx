import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

//classname was `${size} menu-item` but tried to remove undefined when large is not present in compiled code
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={size !== undefined ? `${size} menu-item` : "menu-item"}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem); // no need to do props tuneling(drilling) with this
