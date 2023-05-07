import { baseRequest } from "@/service/baseRequest";

export const getComments = async () => {
  const comments = await baseRequest('/comments').then(response => response.data);
  return comments
}

export const deleteComment = async (id) => {
  await baseRequest('/comments/' + id, {
    method: 'DELETE',
  })
}

export const addComment = async (data) => {
  const comment = await baseRequest('/comments', {
    method: 'POST',
    data: data
  })
  return comment
}