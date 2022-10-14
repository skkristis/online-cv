import { useQuery } from "react-query";

export enum ServerStateKeysEnum {
  repositories = "repositories",
}

export const useGetRepositories = () =>
  useQuery(ServerStateKeysEnum.repositories, () =>
    fetch("https://api.github.com/users/skkristis/repos").then((r) => r.json())
  );
