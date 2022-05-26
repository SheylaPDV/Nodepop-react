import React from "react";

import { getTags } from "../service";
import CheckboxGroup from "../common/CheckboxGroup";
import useQuery from "../hooks/useQuery";

function SelectTags(props) {
  const { data: tags = [] } = useQuery(getTags);
  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;
