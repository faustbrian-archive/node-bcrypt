import { compareSync, hashSync } from "bcryptjs";

export const hash = (plain: string): string => hashSync(plain);

export const verify = (hash: string, plain: string): boolean =>
  compareSync(plain, hash);
