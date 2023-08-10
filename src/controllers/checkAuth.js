import { getUserById } from "../queries/auth.js";
//api/v1/auth
const checkAuth = async (req, res) => {
  const myId = req.user.id;
  const  data  = await getUserById(myId);

  if(data){
    data.password=  ""
    res.json({ user: data });

  }
};

export default checkAuth;
