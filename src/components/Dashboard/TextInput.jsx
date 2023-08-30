import React from "react";

function TextInput({
  name,
  value,
  placeholder,
  funct = () => {},
  disabled = false,
}) {
  return (
    <div className="relative flex w-full flex-wrap items-stretch">
      <input
        type="number"
        className={`relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid ${
          disabled === true
            ? "border-neutral-300 bg-neutral-300"
            : "border-neutral-300 bg-transparent"
        }  bg-clip-padding px-4 py-[0.45rem] text-xl font-normal text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:${
          disabled === true ? "border-neutral-300" : "border-neutral-600"
        } dark:text-black dark:placeholder:text-neutral-400`}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => funct(e.target.value)}
      />
    </div>
  );
}

export default TextInput;