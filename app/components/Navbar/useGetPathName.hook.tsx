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
  else if (pathName === "/tools") {
    return (pathName = "Araçlarım")
  }
  else {
    return pathName.substring(1);
  }
};
