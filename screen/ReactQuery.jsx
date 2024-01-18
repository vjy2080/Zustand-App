import { useQuery } from "@tanstack/react-query";

export const handleApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } 
      const data = await response.json();
    return data;
  }

  export const useHandleApi = () => {
    return useQuery({
        queryKey: ['handleApi'],
        queryFn: handleApi,
      });
  };
  