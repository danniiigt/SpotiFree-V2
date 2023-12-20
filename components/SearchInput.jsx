import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import qs from "query-string";
import { Input } from "./Input";
import { Icons } from "./Icons";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const clearValue = () => setValue("");

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/buscar",
      query,
    });

    router.push(url);
  }, [debouncedValue]);

  return (
    <Input
      leftIcon={
        <Icons.search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" />
      }
      value={value}
      clearValue={clearValue}
      onChange={(e) => setValue(e.target.value)}
      placeholder="¿Que quieres escuchar?"
      className="bg-neutral-900 border border-neutral-800"
    />
  );
};
