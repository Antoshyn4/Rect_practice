import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value = {filter.query}
                onChange = {e => setFilter({...filter, query : e.target.value})}
                placeholder="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                DefaultValue="Sort"
                option={[
                    {name: 'by Title', value: 'title'},
                    {name: 'by Description', value: 'body'}
                ]}
            />
        </div>
    );
};

export default PostFilter;