import React from "react";

export default function Clients() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/6">
        <img src="/images/logo-amazon.svg" alt="Amazon" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <img
          src="/images/logo-microsoft.svg"
          alt="Microsoft"
          className="mx-auto"
        />
      </div>
      <div className="w-1/6">
        <img src="/images/logo-tesla.svg" alt="Tesla" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <img src="/images/logo-google.svg" alt="Google" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <img
          src="/images/logo-facebook.svg"
          alt="Facebook"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
