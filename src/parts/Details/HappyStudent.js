import React from "react";

import Star from "src/parts/components/Star";
export default function HappyStudent({ data }) {
  return (
    <div className="mt-8">
      <Star value={data?.rating ?? 0} width={26} height={26}></Star>
      <p className="text-gray-600 mt-1">{data?.note ?? "Student's Response"}</p>
      <div className="flex items-center mt-4">
        <div className="rounded-full overflow-hidden">
          <img
            src={data?.users?.avatar ?? ""}
            alt={data?.users?.name ?? "Student Name"}
            className="object-cover w-14 h-14"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-gray-900">
            {data?.users?.name ?? "Student's Name"}
          </h2>
          <h3 className="text-sm text-gray-600">
            {data?.users?.profession ?? "Student's Role"}
          </h3>
        </div>
      </div>
    </div>
  );
}
