import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email } = req.body;
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;

    await user.save();

    return res.status(200).json(user);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    // const { firstname, lastname } = req.body;

    // const user = await User.findOneBy({ id: parseInt(req.params.id) });

    // if (!user) return res.status(500).json({ message: "User does not exists" });

    // user.firstname = firstname;
    // user.lastname = lastname;

    // user.save();

    // User.update(
    //   { id: parseInt(req.params.id) },
    //   {
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //   }
    // );
    await User.update({ id: parseInt(req.params.id) }, req.body);

    return res.sendStatus(204);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.delete({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.sendStatus(204);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(user);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
