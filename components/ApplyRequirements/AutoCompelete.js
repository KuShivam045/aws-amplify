import React, { useState, useEffect, useRef } from "react";
import { data } from "../../JsonFiles/AllSkills";
import { IoClose } from "react-icons/io5";

const AutoCompelete = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionShow, setSuggestionShow] = useState(false);
  const [suggestionName, setSuggestionName] = useState([]);
  const [IsPressed] = useState(false);

  const searchContainer = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      searchContainer.current &&
      !searchContainer.current.contains(event.target)
    ) {
      setSuggestionShow(false);
    }
  };

  const keyBoardNavigation = (e) => {
    if (e.key === "Esc") {
      setSuggestionShow(false);
      setSuggestionName("");
    }
  };
  useEffect(() => {
    if (suggestionName !== "") {
      setSuggestions(
        data.filter((val, index) => {
          if (val.name && val.related_1 === suggestionName) {
            val = true;
          }
          return val.name
            ? val.name
                .toLowerCase()
                .startsWith(suggestionName.toString().toLowerCase())
            : null;
        })
      );
    } else {
      setSuggestions([]);
    }
  }, [suggestionName]);

  const seachValuehandler = (e) => {
    setSuggestionName(e.target.value);
    if (e.target.value.length > 0) {
      setSuggestionShow(true);
    }
  };

  const DeleteItem = (id) => {
    props.setSkillList((preLocation) => {
      return preLocation.filter((item, index) => {
        return index !== id;
      });
    });
  };
  const [selected, setSelected] = useState(0);
  const keydown = (e) => {
    if (e.code === "ArrowDown" && selected < suggestions.length) {
      setSelected(selected + 1);
    }
  };
  const keyup = (e) => {
    if (e.code === "ArrowUp" && selected >= 0) {
      setSelected(selected - 1);
    } else if (e.key === "Enter" && suggestionShow) {
      let item = suggestions[selected];
      props.setSkillList([
        ...props.skillList,
        item.name.charAt(0).toUpperCase() + item.name.slice(1),
      ]);
      setSuggestionName("");
      setSelected(0);
    }
  };

  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef?.current?.scrollIntoView();
    window.scrollTo(0, 0);
  }, [selected]);
  useEffect(() => {
    setSelected(0);
  }, [suggestionShow]);
  return (
    <div onKeyDown={(e) => keydown(e)} onKeyUp={(e) => keyup(e)}>
      <div className="mb-4" ref={searchContainer}>
        <div className="">
          <input
            type="search"
            name="suggestion"
            id="Search"
            placeholder="Select upto 10 skills"
            onInput={props.onInput}
            onChange={(e) => {
              seachValuehandler(e);
            }}
            onKeyDown={(e) => {
              keyBoardNavigation(e);
            }}
            value={suggestionName}
            disabled={props.skillList.length >= 10}
            autoFocus={IsPressed === true ? true : false}
            className=" w-full text-sm py-2.5 border px-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
            autoComplete="off"
          />
        </div>

        <div className="bg-white shadow-md  mb-2 max-h-[200px] overflow-y-scroll hide-scroll-bar ">
          {suggestionShow &&
            suggestions.map((val, index) => {
              return props.skillList.includes(val.name) ? null : (
                <div>
                  {selected === index + 8 ? <div ref={scrollRef} /> : <></>}
                  <div
                    key={index}
                    className={`p-1 px-2 hover:cursor-pointer bg-[#ededed] ${
                      selected === index ? "bg-[#1678f2] text-white" : ""
                    }`}
                    onClick={() => {
                      props.setSkillList([...props.skillList, val.name]);
                      setSuggestionName("");
                    }}
                  >
                    {val.name.charAt(0).toUpperCase() + val.name.slice(1)}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex gap-1 flex-wrap cursor-pointer w-full mb-[20px]">
        {props.skillList &&
          props.skillList.map((item, index) => {
            return (
              <>
                {index === 0 ? (
                  <div
                    className="bg-gradient-to-r from-[#4568dc] to-[#b06ab3] m-[4px] text-white rounded-md text-sm py-1 px-2"
                    key={index}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}

                    <IoClose
                      onClick={() => DeleteItem(index)}
                      className="mt-1 ml-2 items-center float-right"
                    />
                    <div className="text-sm text-right mr-1 font-bold italic">
                      {" "}
                      Primary{" "}
                    </div>
                  </div>
                ) : (
                  <div
                    className="bg-[#1678f2] m-1 text-white rounded-md text-sm py-1 px-2 shadow-md h-7"
                    key={index}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}

                    <IoClose
                      onClick={() => DeleteItem(index)}
                      className="mt-1 ml-2 items-center float-right"
                    />
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AutoCompelete;
