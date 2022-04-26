import { toast } from "react-toastify";
import Api from "../Services/api";

const createTechnology = (nivel, addTech) => {

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

  Api.post(
    "users/techs",
    {
      title: addTech,
      status: nivel,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then(() => toast.success("Tecnologia cadastrada"))
    .catch((err) => console.log(err.response.data))
    .finally(() => console.log("chegou"));
};

export default createTechnology