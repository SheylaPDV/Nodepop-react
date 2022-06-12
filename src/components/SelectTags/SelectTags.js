import React from "react";

import { getTags } from "../service";
import useQuery from "../hooks/useQuery";
import CheckboxGroup from "../common/CheckboxGroup";

function SelectTags(props) {
  const { data: tags = [] } = useQuery(getTags);
  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;
