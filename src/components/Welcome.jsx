import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";

const Welcome = () => {
  const { googleSignin } = useContext(ContextProvider);
  return (
    <div className="welcome">
      <h1>Welcome to Messenger</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod
        dolorum in sint deserunt fugiat iste dolores officia expedita ea
        consequatur qui, illum exercitationem eos debitis omnis et at nisi
        facere odit assumenda esse, quaerat ex illo. Ipsa aperiam voluptas,
        repellendus, iusto voluptatum, maiores perspiciatis architecto possimus
        nihil repellat voluptatibus tempora! Deserunt unde provident et quam
        tempora fuga pariatur nulla nam, explicabo culpa veniam in repellendus
        nisi voluptatibus iste quidem voluptates earum sequi rem ex
        necessitatibus! Quis dolores enim possimus? Neque, quo. Totam ipsa
        voluptas nisi error eveniet numquam itaque quidem quae ullam! Non dicta
        quisquam reprehenderit, doloribus id voluptate.
      </p>
        <button onClick={googleSignin} >
          <img src="google.png" alt="" />
          <span>Sign In With Google</span> 
        </button>
    </div>
  );
};

export default Welcome;
