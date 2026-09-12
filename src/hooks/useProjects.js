import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useSearchParams } from "react-router-dom";

export default function useProjects() {
  const [searchParams] = useSearchParams();
  const queryObject = Object.fromEntries(searchParams);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(queryObject),
  });

  const { projects } = data || {};
  return { isLoading, isError, projects };
}