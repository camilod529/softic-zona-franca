import { ChangeEvent } from "react";
import { Tag } from "../types/types";

export const TagCard = ({
  tag,
  onChange,
}: {
  tag: Tag;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="interest-checkbox">
      <input
        type="checkbox"
        id="interest1"
        className="interest-checkbox"
        value={tag.id_etiqueta}
        onChange={onChange}
      />
      <label>{tag.nombre_etiqueta}</label>
    </div>
  );
};
