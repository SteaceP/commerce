import React from "react";
import SHOPDATA from "./ShopData";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";

class ShopPage extends React.Component {
  state = {
    collections: SHOPDATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
