"use client";

import { Fragment, useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
      <div className="text-center border-2 border-slate-800 p-3 rounded-md">
        <p className="text-sky-500">{`© ${year} Atik Ullah Khan. All Rights Reserved.`}</p>
      </div>
    </Fragment>
  );
};

export default Footer;
