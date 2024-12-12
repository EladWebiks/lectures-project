import { User } from "../models/User";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { getUsers, saveUsers } from "../dal/userDAL";

export const createUser = async (
  username: string,
  password: string
): Promise<User> => {
  const users = await getUsers();
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: uuid(),
    username,
    passwordHash,
  };
  users.push(newUser);
  await saveUsers(users);
  return newUser;
};

export const authenticateUser = async (
  username: string,
  password: string
): Promise<User | null> => {
  const users = await getUsers();
  const user = users.find((user) => user.username === username);
  if (user && (await bcrypt.compare(password, user.passwordHash))) {
    return user;
  }
  return null;
};

export const getUser = async (id: string): Promise<User | null> => {
  const users = await getUsers();
  const user = users.find((user) => user.id === id);
  if (user) {
    return user;
  }
  return null;
};
