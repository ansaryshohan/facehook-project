import { useAuthContext } from "../hooks/useAuthContext";

export default function HomePage() {
  const { auth } = useAuthContext();
  console.log(auth);
  return <></>;
}
