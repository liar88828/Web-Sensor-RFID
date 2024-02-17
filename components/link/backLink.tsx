import Link from "next/link";
import React from "react";

export function BackLink({href, title}: { href: string, title: string }) {
  return <div className="max-w-md flex items-center space-x-2 justify-between">
    <Link className="btn btn-primary" href={"/" + href}> Back </Link>
    <h1 className="text-2xl font-bold capitalize"> {title} {href} </h1>
  </div>;
}
