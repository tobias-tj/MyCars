export const isAdmin = (userId: string | null | undefined) => {
  return userId === process.env.NEXT_PUBLIC_ADMIN;
};
