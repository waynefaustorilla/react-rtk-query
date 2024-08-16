type ReactionType = {
  likes: number;
  dislikes: number;
};

export type PostType = {
  id: number,
  title: string;
  body: string;
  tags: string[];
  reactions: ReactionType,
  views: number;
  userId: number;
};