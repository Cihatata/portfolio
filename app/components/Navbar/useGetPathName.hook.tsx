import { usePathname } from "next/navigation";

export const useGetPathName = () => {
  let pathName = usePathname();

  if (pathName === "/") {
    return (pathName = "Ana Sayfa");
  } 
  else if (pathName === "/work") {
    return (pathName = "Çalışmalarım")
  }
  else if (pathName === "/about") {
    return (pathName = "Hakkımda")
  }
  else {
    return pathName.substring(1);
  }
};
