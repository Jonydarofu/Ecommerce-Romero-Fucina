import { userEffect } from "react";

const ConsumeindoApis = () => {
  userEffect(() => {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");

    getData
      .then((res) => res.json())
      .then((res) => console.log("then:", res))
      .catch((err) => console.log("catch: ", err));
  }, []);
  return <div>ConsumiendoApis</div>;
};

export default ConsumeindoApis;