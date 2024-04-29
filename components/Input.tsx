import { User } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  type?: string;
  ph?: string;
  label?: string;
  name?: string;
  required?: boolean;
  set: Dispatch<SetStateAction<User | undefined>>;
}

export default function CustomInput({
  type = "text",
  ph,
  label,
  name,
  required = true,
  set,
}: Props) {
  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <input
        type={type}
        name={name}
        placeholder={ph}
        id={name}
        required={required}
        onChange={(e) =>
          set((prevent) => ({ ...prevent, [e.target.name]: e.target.value }))
        }
      />
    </div>
  );
}
