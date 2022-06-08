import React from "react";
import Select from "react-select";
import T from "prop-types";

import { getTags } from "../service";
import useQuery from "../hooks/useQuery";
import { filterByTags } from "../adverts/AdvertsPage/filters.js";

function SelectTags({ options, value, onChange, ...props }) {
  const { data: tags = [] } = useQuery(getTags);

  const tagsObj = (tags) => {
    const arr = [];
    for (let i = 0; i < tags.length; i++) {
      const obj = { name: tags[i], value: tags[i] };
      arr.push(obj);
    }
    return arr;
  };

  const tg = tagsObj(tags);

  // const handleChange = (event) => {
  //   console.log("evento", event);
  // };

  const handleChange = (ev) => {
    const { name, checked, value: optionValue } = ev;
    onChange({
      target: {
        name,
        value: checked
          ? [...value, optionValue]
          : value.filter((v) => v !== optionValue),
      },
    });
  };

  return (
    <div>
      <label>
        {" "}
        TAGS
        <Select
          value={tg}
          checked={value.includes(tg)}
          onChange={handleChange}
          options={tg.map((sup) => ({ name: sup.name, value: sup.value }))}
          {...props}
        />
      </label>
    </div>
  );
}

export default SelectTags;

// function SelectTags({ options, value, onChange: handleChange, ...props }) {
//   const { data: tags = [] } = useQuery(getTags);

//   console.log("optionss", options);

//   const tg = tagsObj(tags);
//   console.log("TAGSSS", tg);

//   // const handleChange = (ev) => {
//   //   console.log("---------------", ev);
//   //   const { name, checked, value: optionValue } = ev.target;
//   //   onChange({
//   //     target: {
//   //       name,
//   //       value: checked
//   //         ? [...value, optionValue]
//   //         : value.filter((v) => v !== optionValue),
//   //     },
//   //   });
//   // };

//   return (
//     <div>
//       <Select
//         // key={tags}
//         isMulti
//         type="select"
//         // label={tg}
//         // data={tg}
//         // value={tg}
//         options={tg}
//         checked={value.includes(options)}
//         onChange={handleChange}
//         {...props}
//       />
//     </div>
//   );
// }
// SelectTags.propTypes = {
//   options: T.arrayOf(T.string.isRequired).isRequired,
//   value: T.arrayOf(T.string.isRequired).isRequired,
//   onChange: T.func.isRequired,
// };

// export default SelectTags;
