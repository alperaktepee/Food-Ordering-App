import React, { useState } from "react";
import Title from "../../components/layout/ui/Title";
import Input from "../../components/Input";
const Categories = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState(["pizza"]);
  return (
    <div className="mt-5 md:ml-2 w-3/4 mr-4 ml-[12.5%]">
      <Title addClass="text-4xl text-center md:text-left">Categories</Title>
      <div className="grid grid-cols-8 gap-4 mt-8 items-center">
        <div className="col-span-7">
          <Input
            placeholder="Add a category"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
        </div>

        <div className="col-span-1 ">
          <button
            className="btn-primary ml-3"
            onClick={() => {
              setCategories([...categories, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
      </div>

      {categories.map((category, index) => (
            <div className="flex justify-between mt-4" key={index}>
              <div className="text-lg">{category}</div>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-md"
                onClick={() =>
                  setCategories(categories.filter((cat) => cat !== category))
                }
              >
                Delete
              </button>
            </div>
          ))}
    </div>
  );
};

export default Categories;
