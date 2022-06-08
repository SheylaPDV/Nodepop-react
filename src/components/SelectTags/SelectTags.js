import React from "react";
import Select from "react-select";
import T from "prop-types";

import { getTags } from "../service";
import useQuery from "../hooks/useQuery";
import { filterByTags } from "../adverts/AdvertsPage/filters.js";
import CheckboxGroup from "../common/CheckboxGroup";

function SelectTags(props) {
  const { data: tags = [] } = useQuery(getTags);
  return <CheckboxGroup options={tags} {...props} />;

  // const tagsObj = (tags) => {
  //   const arr = [];
  //   for (let i = 0; i < tags.length; i++) {
  //     const obj = { name: tags[i], value: tags[i] };
  //     arr.push(obj);
  //   }
  //   return arr;
  // };

  // const tg = tagsObj(tags);

  // const handleChange = (event) => {
  //   console.log("evento", event);
  // };

  //   const handleChange = (ev) => {
  //     const { name, checked, value: optionValue } = ev;
  //     onChange({
  //       target: {
  //         name,
  //         value: checked
  //           ? [...value, optionValue]
  //           : value.filter((v) => v !== optionValue),
  //       },
  //     });
  //   };

  //   return (
  //     <div>
  //       <label>
  //         {" "}
  //         TAGS
  //         <Select
  //           value={tg}
  //           checked={value.includes(tg)}
  //           onChange={handleChange}
  //           options={tg.map((sup) => ({ name: sup.name, value: sup.value }))}
  //           {...props}
  //         />
  //       </label>
  //     </div>
  //   );
}

export default SelectTags;
