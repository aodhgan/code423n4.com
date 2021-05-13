import React, { useCallback } from "react";
import Select from "react-select";
import * as baseStyles from "./Widgets.module.scss";
import * as styles from "./WardenField.module.scss";

const WardenOptionLabel = ({ value, image }) => {
  return (
    <div className={styles.OptionContainer}>
      <img
        src={
          image
            ? image.childImageSharp.resize.src
            : "https://placekitten.com/g/64/64"
        }
      />
      <span>{value}</span>
    </div>
  );
};

const WardenField = ({ label, helptext, options, onChange, fieldState }) => {
  const handleChange = useCallback(
    ({ value }) => {
      onChange({ target: { name: "handle", value } });
    },
    [onChange]
  );

  return (
    <div className={baseStyles.Container}>
      <label className={baseStyles.Label}>{label}</label>
      <p className={baseStyles.Help}>{helptext}</p>
      <Select
        value={options.find((o) => o.value === fieldState) || undefined}
        formatOptionLabel={WardenOptionLabel}
        options={options}
        onChange={handleChange}
        className={styles.ReactSelect}
        classNamePrefix="react-select"
      />
      <p>
        <small>
          Don't see your handle here? Submit a pull request{" "}
          <a href="https://github.com/code-423n4/code423n4.com">here</a> to
          register.
        </small>
      </p>
    </div>
  );
};

export default WardenField;
