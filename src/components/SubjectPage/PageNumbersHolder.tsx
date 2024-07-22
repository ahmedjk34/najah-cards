"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  numberOfPages: number;
};

const PageNumbersHolder = ({ numberOfPages }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  //if the number of elements is less than 10 it simply wont display
  const items = [];
  const params = new URLSearchParams(searchParams);
  if (parseInt(searchParams.get("pages") ?? "1") > numberOfPages) {
    params.set("pages", "1");
    replace(`${pathname}?${params.toString()}`);
  }
  for (let i = 1; i <= numberOfPages; i++) {
    items.push(
      <li
        key={i}
        onClick={() => {
          params.set("pages", i.toString());
          replace(`${pathname}?${params.toString()}`);
        }}
      >
        {i}
      </li>
    );
  }
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default PageNumbersHolder;
