import { forwardRef } from "react";

type Props = {
  placeholder: string;
  classname?: string;
  options?: string[];
  value?: string | number;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>, property: string) => void;
};

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { placeholder, classname, handleChange, value,...props }: Props,
  ref
) {
  return (
    <div>
      <input
        ref={ref}
        {...props}
        type="text"
        value={value}
        onChange={(e) => handleChange && handleChange(e, placeholder)}
        placeholder={placeholder}
        className={`w-full p-1 h-10 rounded-sm text-black text-lg ${classname}`}
      />
    </div>
  );
});

export default Input;

//big silly mistake: i did not add {...props} in props  thats why my Input component did not receive the {...register()} from react-hook-form