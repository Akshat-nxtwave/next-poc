import React from "react";

interface Prop {
  params: {
    slug: string;
  };
  searchParams: object;
}
// for route : /route1/acs?abc=123&cde=d%20ef
// this obj will be {slug: 'acs', searchParams: {abc: '123', cde: 'd ef'}}

const page = (obj: Prop) => {
  console.log(obj, "ooooo");

  return <div>with dynamic route</div>;
};

export default page;
