import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";

export default function useOwnerProjects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectApi,
  });

  const { projects } = data || {};
  return { isLoading, isError, projects };
}
