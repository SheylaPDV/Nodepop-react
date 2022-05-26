import { Link } from "react-router-dom";
import Page from "../../layout/Page";
import Button from "../../common/button";
import Advert from "./Advertt";
import "../../../assets/css/AdvertsPage.css";
import styles from "./AdvertsPage.module.css";
import { useAdverts } from "../../auth/context";

const EmptyList = () => (
  <div style={{ textAlign: "center" }}>
    <p>Upload the first product!</p>
    <Button as={Link} to="/adverts/new" variant="primary">
      Add product
    </Button>
  </div>
);

const AdvertsPage = () => {
  const adverts = useAdverts();

  return (
    <Page title="What are you looking for today?">
      <div className={styles.advertsPage}>
        {adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <Advert {...advert} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
};

export default AdvertsPage;
