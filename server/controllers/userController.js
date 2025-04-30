import User from '../models/userModel'

export const create = async(req, res) => {
  const newUser = new User(req.body);

  const userExist = await User.findOne({email});
  if (userExist) {
    return res.status(400).json({message: "User already exist."})
  }
  const saveData = await newUser.save()
  res.status(200).json({message: "User created successfully"});
}

export const getAllUsers = async(req, res) => {
  const usersData = await User.find();
  if (!usersData){
    return res.status(400).json({message: "There is no User"})
  }
    res.status(200).json(usersData);
}

// export const deleteUser = async(req, res) => {
//   const id = req.body
// }