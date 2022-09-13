import T from "prop-types";
import "../../../assets/css/Button.css";

import useForm from "../../hooks/useForm";
import InputFile from "../../common/InputFile";
import SelectTags from "../../SelectTags/SelectTags";
import "../../../assets/css/NewAdvertPage.css";
const validName = ({ name }) => name;
const validPrice = ({ price }) =>
  !Number.isNaN(price) && Number.isFinite(price) && price >= 0;
const validTags = ({ tags }) => !!tags.length;

function NewAdvertForm({ onSubmit, className }) {
  const {
    formValue: advert,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    name: "",
    sale: true,
    price: 0,
    tags: [],
    photo: null,
  });
  const { name, sale, price, tags } = advert;

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <label>Advert name:</label>
      <input name="name" value={name} onChange={handleChange} />
      <label>Sell/Sale</label>
      <input
        className={className}
        type="checkbox"
        name="sale"
        checked={sale}
        onChange={handleChange}
      />
      <label>Price:</label>
      <input type="number" name="price" value={price} onChange={handleChange} />

      <SelectTags name="tags" value={tags} onChange={handleChange} />
      <InputFile name="photo" onChange={handleChange} />
      <button
        className="styled-button"
        disabled={!validate(validName, validPrice, validTags)}
      >
        Save
      </button>
    </form>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
