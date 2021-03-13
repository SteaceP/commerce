import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors.js";

import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";

const Directory = ({ sections }) => (
  //otherSectionProps pass all the props of the sections state without explicitly identifying all of them.
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
