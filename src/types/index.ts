export interface Data {
  comments: RootComment[];
  currentUser: User;
}

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface RootComment {
  content: string;
  createdAt: string;
  id: number;
  replies: Comment[];
  score: number;
  user: User;
}

export interface Comment extends RootComment {
  replyingTo: string;
}
