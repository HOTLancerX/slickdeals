"use client";
import Image from "next/image";
import { useState } from "react";

type CommentType = {
  id: number;
  text: string;
  img?: string;
  author: string;
  votes: number;
  replies: CommentType[];
};

type CommentProps = {
  items: CommentType[];
};

const Comment: React.FC<CommentProps> = ({ items }) => {
  const [comments, setComments] = useState(items);
  const [newComment, setNewComment] = useState("");

  const handleVote = (id: number, type: "up" | "down") => {
    const updateVotes = (comments: CommentType[]): CommentType[] => {
      return comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            votes: type === "up" ? comment.votes + 1 : comment.votes - 1,
          };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: updateVotes(comment.replies) };
        }
        return comment;
      });
    };

    setComments(updateVotes(comments));
  };

  const handleAddComment = () => {
    const newCommentObj: CommentType = {
      id: comments.length + 1,
      text: newComment,
      author: "New User",
      votes: 0,
      replies: [],
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleReply = (id: number, replyText: string) => {
    const addReply = (comments: CommentType[]): CommentType[] => {
      return comments.map((comment) => {
        if (comment.id === id) {
          const newReply: CommentType = {
            id: comments.length + 1,
            text: replyText,
            author: "Replying User",
            votes: 0,
            replies: [],
          };
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: addReply(comment.replies) };
        }
        return comment;
      });
    };

    setComments(addReply(comments));
  };

  const renderComments = (comments: CommentType[], level = 0) => {
    return comments.map((comment) => (
      <div key={comment.id} className="my-4 bg-white p-4">
        <div
          className={`relative ml-${level * 4} pl-4 pb-4 border-l-4 ${
            level % 2 === 0 ? "border-blue-500" : "border-green-500"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {comment.img && (
                <Image
                  src={comment.img}
                  width={100}
                  height={100}
                  alt={comment.author}
                  className="w-12 h-12 rounded-full object-cover mr-2"
                />
              )}
              <span className="font-bold">{comment.author}</span>
            </div>            
            <div className="flex items-center space-x-2">
              <button
                className="text-green-500"
                onClick={() => handleVote(comment.id, "up")}
              >
                ↑
              </button>
              <span>{comment.votes}</span>
              <button
                className="text-red-500"
                onClick={() => handleVote(comment.id, "down")}
              >
                ↓
              </button>
            </div>
          </div>
          <p>{comment.text}</p>
          <div className="mt-2">
            <button
              className="text-blue-500 text-sm"
              onClick={() => handleReply(comment.id, prompt("Enter your reply") || "")}
            >
              Reply
            </button>
          </div>
          {comment.replies.length > 0 && renderComments(comment.replies, level + 1)}
        </div>
      </div>
    ));
  };

  return (
    <div>
      {renderComments(comments)}
      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comment;
