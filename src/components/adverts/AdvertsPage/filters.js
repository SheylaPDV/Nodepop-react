export const saleFilter = {
  all: { value: "all", label: "All" },
  sell: { value: "sell", label: "Sell" },
  buy: { value: "buy", label: "Buy" },
};

export const defaultFilters = {
  name: "",
  priceMax: 0,
  priceMin: 0,
  sale: saleFilter.all.value,
  tags: [],
};

const filterByName =
  (filter) =>
  ({ name }) => {
    const cleanFilter = filter.trim();
    return !cleanFilter || new RegExp(cleanFilter, "gi").test(name);
  };

const filterByPriceMax =
  (filter) =>
  ({ price }) => {
    console.log("FILTERBYPRICE-filter: ", filter); // VALOR DEL FILTRO
    console.log("FILTERBYPRICE-price: ", price); // VALOR DEL PRODUCTO
    if (filter === 0) {
      return true;
    } else {
      return price <= filter;
    }
  };

const filterByPriceMin =
  (filter) =>
  ({ price }) => {
    console.log("FILTERBYPRICE-filter: ", filter); // VALOR DEL FILTRO
    console.log("FILTERBYPRICE-price: ", price); // VALOR DEL PRODUCTO
    if (filter === 0) {
      return true;
    } else {
      return price >= filter;
    }
  };

const filterBySale =
  (filter) =>
  ({ sale }) =>
    [
      saleFilter.all.value,
      sale ? saleFilter.sell.value : saleFilter.buy.value,
    ].includes(filter);

export const filterByTags =
  (filter) =>
  ({ tags }) =>
    !filter.length || filter.every((tag) => tags.includes(tag));

export const filterAdverts = (
  adverts,
  { name, priceMax, priceMin, sale, tags }
) =>
  adverts
    .filter(filterByName(name))
    .filter(filterByPriceMin(priceMin))
    .filter(filterByPriceMax(priceMax))
    .filter(filterBySale(sale))
    .filter(filterByTags(tags));
