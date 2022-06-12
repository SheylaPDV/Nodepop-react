import T from "prop-types";
import useForm from "../../hooks/useForm";
import SelectTags from "../../SelectTags/SelectTags";
import RadioGroup from "../../common/RadioGroup";
import { advert } from "../../propTypes";
import { saleFilter } from "./filters";
import "../../../assets/css/Button.css";
import SelectRange from "../../common/SelectRange";

function FiltersForm({ initialFilters, defaultFilters, onFilter, prices }) {
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

  const { name, sale, maxprice, minprice, tags } = filters;
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  console.log(min);

  return (
    <form onSubmit={handleSubmit(onFilter)}>
      <h2>Filters</h2>
      <label>Name:</label>
      <input name="name" value={name} onChange={handleChange} />
      <label>Price</label>
      <input
        placeholder="min price"
        type="number"
        value={minprice}
        min={min}
        name="price"
        onChange={handleChange}
        style={{ width: 70, margin: 24 }}
        marks={{ [min]: min }}
      />
      <input
        placeholder="max price"
        type="number"
        value={maxprice}
        max={max}
        name="price"
        onChange={handleChange}
        style={{ width: 70, margin: 24 }}
        marks={{ [max]: max }}
      />

      {/* Min:
      <input
        // type="number"
        name="price"
        value={price}
        onChange={handleChange}
        min={min}
        marks={{ [max]: max, [min]: min }}
      />
      Max:
      <input
        name="price"
        value={price}
        onChange={handleChange}
        max={max}
        marks={{ [max]: max, [min]: min }}
      /> */}
      <RadioGroup
        options={Object.values(saleFilter)}
        name="sale"
        value={sale}
        onChange={handleChange}
      />
      {/* <SelectRange
        min={min}
        max={max}
        value={price}
        name="price"
        onChange={handleChange}
        style={{ width: 400, margin: 24 }}
        marks={{ [min]: min, [max]: max }}
      /> */}
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
  price: T.arrayOf(T.number.isRequired).isRequired,
});

FiltersForm.propTypes = {
  initialFilters: filtersProp.isRequired,
  defaultFilters: filtersProp.isRequired,
  onFilter: T.func.isRequired,
  prices: T.arrayOf(T.number.isRequired).isRequired,
};

export default FiltersForm;
