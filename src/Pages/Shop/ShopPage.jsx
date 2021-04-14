import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import CollectionPage from "../../Pages/Collection/CollectionPage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
