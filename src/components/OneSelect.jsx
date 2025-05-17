import React from "react";
import Select from "react-select";

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export default function OneSelect({ symptoms }) {
  // const [isClearable, setIsClearable] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);

  const isClearable = true;
  const isSearchable = true;
  const isDisabled = false;
  const isLoading = false;
  const isRtl = false;

  // Convert array of strings to react-select format
  const symptomOptions = symptoms?.map((symptom) => ({
    label: symptom.charAt(0).toUpperCase() + symptom.slice(1),
    value: symptom,
  }));

  return (
    <>
      <Select
        className="basic-single w-full "
        classNamePrefix="select"
        defaultValue={null}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="symptom"
        options={symptomOptions}
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div>
    </>
  );
}
