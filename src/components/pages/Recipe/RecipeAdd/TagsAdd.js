import React, { useState } from "react";
import styled from "styled-components";
import { useTags } from "../../../../context/TagsContext";
const TagsAdd = ({ tags, setTags }) => {
  const tagsContext = useTags();
  const [value, setValue] = useState(tagsContext.tags[0].name);

  const handleAddTag = () => {
    if (!value) {
      alert("sss");
    } else {
      value && setTags([...tags, value]);
      setValue("");
    }
  };

  const handleTagChange = (e) => {
    setValue(e.target.value);
  };

  const tagOptions = () => {
    return tagsContext.tags.map((tag) => {
      return (
        <option key={tag.name} value={tag.name}>
          {tag.name}
        </option>
      );
    });
  };

  return (
    <Container>
      <label>Lista tagów</label>
      <select value={value} name="tags" onChange={handleTagChange}>
        {tagOptions()}
      </select>
      <label>Nazwa nowego tagu</label>
      <input type="text" value={value} onChange={handleTagChange} />
      <input type="button" onClick={handleAddTag} value={"Dodaj tag"}></input>
    </Container>
  );
};

export default TagsAdd;
const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
