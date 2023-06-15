import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import qs from "query-string";
import { Input } from "./Input";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

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
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="¿Que quieres escuchar?"
      className="bg-neutral-900 border border-neutral-800"
    />
  );
};
