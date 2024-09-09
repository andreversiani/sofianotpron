export const useComment = (comment: string) => {
  return <p dangerouslySetInnerHTML={{ __html: `<!-- ${comment} -->` }} />
}
