import { type Database } from "./database.ts";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"];
type UserEntity = Database["public"]["Tables"]["users"]["Row"];

export type Post = PostEntity & {
  user: UserEntity;
};
