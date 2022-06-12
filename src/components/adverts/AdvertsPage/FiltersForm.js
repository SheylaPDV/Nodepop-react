import T from "prop-types";
import useForm from "../../hooks/useForm";
import SelectTags from "../../SelectTags/SelectTags";
import RadioGroup from "../../common/RadioGroup";
import { advert } from "../../propTypes";
import { saleFilter } from "./filters";
import "../../../assets/css/Button.css";

function FiltersForm({ initialFilters, defaultFilters, onFilter }) {
  const {
    formValue: filters,
    setFormValue,
    handleChange,
    handleSubmit,
  } = useForm(initialFilters);

  const handleResetClick = () => {
    setFormValue(defaultFilters);
    onFilter(defaultFilters);
  };

  const { name, sale, priceMax, priceMin, tags } = filters;

  return (
    <form onSubmit={handleSubmit(onFilter)}>
      <h2>Filters</h2>
      <label>Name:</label>
      <input name="name" value={name} onChange={handleChange} />
      <label>Price Min</label>
      <input
        type="number"
        placeholder="MIN"
        value={priceMin}
        name="priceMin"
        onChange={handleChange}
        style={{ width: 70, margin: 24 }}
      />
      <label>Price Max</label>
      <input
        type="number"
        placeholder="MAX"
        value={priceMax}
        name="priceMax"
        onChange={handleChange}
        style={{ width: 70, margin: 24 }}
      />

      <RadioGroup
        options={Object.values(saleFilter)}
        name="sale"
        value={sale}
        onChange={handleChange}
      />

      <SelectTags multiple name="tags" value={tags} onChange={handleChange} />
      <button className="styled-button" type="submit">
        Filter
      </button>
      <button className="styled-button" onClick={handleResetClick}>
        Reset
      </button>
    </form>
  );
}

const filtersProp = T.shape({
  ...advert,
  sale: T.oneOf(Object.keys(saleFilter)).isRequired,
  // price: T.arrayOf(T.number.isRequired).isRequired,
});

FiltersForm.propTypes = {
  initialFilters: filtersProp.isRequired,
  defaultFilters: filtersProp.isRequired,
  onFilter: T.func.isRequired,
  // prices: T.arrayOf(T.number.isRequired).isRequired,
};

export default FiltersForm;
