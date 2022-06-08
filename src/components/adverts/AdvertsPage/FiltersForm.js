import T from "prop-types";
import useForm from "../../hooks/useForm";
import SelectTags from "../../SelectTags/SelectTags";
import RadioGroup from "../../common/RadioGroup";
import { advert } from "../../propTypes";
import { saleFilter } from "./filters";
import "../../../assets/css/Button.css";

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
  //  const { data: tags = [] } = useQuery(getTags);

  const { name, sale, price, tags } = filters;
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  console.log(tags);

  return (
    <form onSubmit={handleSubmit(onFilter)}>
      <h2>Filters</h2>
      <label>Name:</label>
      <input name="name" value={name} onChange={handleChange} />
      Min:
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
        // type="number"
        name="price"
        value={price}
        onChange={handleChange}
        max={max}
        marks={{ [max]: max, [min]: min }}
      />
      <RadioGroup
        options={Object.values(saleFilter)}
        name="sale"
        value={sale}
        onChange={handleChange}
      />
      <SelectTags multiple name="tags" value={tags} onChange={handleChange} />
      {/* <SelectTags
      multiple
        options={tags}
        name="tags"
        value={tags}
        onChange={handleChange}
        {...props}
      /> */}
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
