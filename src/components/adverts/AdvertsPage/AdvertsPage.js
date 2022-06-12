import Page from "../../layout/Page";
import "../../../assets/css/AdvertsPage.css";
import styles from "./AdvertsPage.module.css";
import React from "react";
import { Navigate } from "react-router-dom";
import FiltersForm from "./FiltersForm";
import AdvertsList from "./AdvertsList";
import EmptyList from "./EmptyList";
import storage from "../../../utils/storage";
import { getLatestAdverts } from "../../service";
import { defaultFilters, filterAdverts } from "./filters";
import useQuery from "../../hooks/useQuery";
import { useState, useEffect } from "react";

const getFilters = () => storage.get("filters") || defaultFilters;
const saveFilters = (filters) => storage.set("filters", filters);

function AdvertsPage() {
  const { isLoading, error, data: adverts = [] } = useQuery(getLatestAdverts);
  const fpp = getFilters();
  console.log("FILTERS1: ", fpp);
  const [filters, setFilters] = useState(getFilters);

  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  if (error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  const filteredAdverts = filterAdverts(adverts, filters);

  console.log("FILTERS: ", filters);
  console.log("ADVERTS: ", adverts);

  return (
    <div className={styles.advertsPage}>
      <Page title="What are you looking for today?">
        {adverts.length > 0 && (
          <FiltersForm
            initialFilters={filters}
            defaultFilters={defaultFilters}
            prices={adverts.map(({ price }) => price)}
            onFilter={setFilters}
          />
        )}
        {filteredAdverts.length ? (
          <h4>
            ADVERTS LIST
            <AdvertsList adverts={filteredAdverts} />
          </h4>
        ) : (
          <EmptyList advertsCount={adverts.length} />
        )}
      </Page>
    </div>
  );
}

export default AdvertsPage;
