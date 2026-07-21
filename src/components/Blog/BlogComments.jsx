'use client';

import React, { useState } from 'react';
import { ThumbsUp, CornerDownRight, Send } from 'lucide-react';
import Image from 'next/image';

const initialComments = [
  {
    id: 1,
    name: 'Areeba Khan',
    avatar:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=464&auto=format&fit=crop',
    comment: 'This article was exactly what I needed. Super well explained!',
    timestamp: '2 hours ago',
    likes: 12,
    replies: [
      {
        id: 101,
        name: 'Niaz Ali',
        avatar:
          'https://randomuser.me/api/portraits/lego/1.jpg',
        comment: 'Thank you Areeba! Glad it helped 😊',
        timestamp: '1 hour ago',
        likes: 4,
      },
    ],
  },
  {
    id: 2,
    name: 'Zain Malik',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    comment: 'Great points on frontend performance. Bookmarking this!',
    timestamp: '5 hours ago',
    likes: 8,
    replies: [],
  },
];

const BlogComments = () => {
  const [comments, setComments] = useState(initialComments);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [liked, setLiked] = useState({});

  const handleLike = (id, isReply = false, parentId = null) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id && !isReply) {
          const alreadyLiked = liked[`comment-${id}`];
          if (!alreadyLiked) setLiked({ ...liked, [`comment-${id}`]: true });
          return {
            ...c,
            likes: alreadyLiked ? c.likes : c.likes + 1,
          };
        } else if (c.id === parentId && isReply) {
          return {
            ...c,
            replies: c.replies.map((r) =>
              r.id === id
                ? {
                    ...r,
                    likes:
                      liked[`reply-${id}`] || false
                        ? r.likes
                        : r.likes + 1,
                  }
                : r
            ),
          };
        }
        return c;
      })
    );
    if (isReply && !liked[`reply-${id}`])
      setLiked({ ...liked, [`reply-${id}`]: true });
  };

  const handleReply = (parentId) => {
    if (!replyText.trim()) return;
    const newReply = {
      id: Date.now(),
      name: 'You',
      avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
      comment: replyText.trim(),
      timestamp: 'Just now',
      likes: 0,
    };
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? { ...c, replies: [...c.replies, newReply] }
          : c
      )
    );
    setReplyText('');
    setReplyingTo(null);
  };

  return (
    <section className="w-full flex justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] w-full">
        <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-8 border-b border-gray-200 pb-2">
          Comments ({comments.length})
        </h3>

        <div className="space-y-10">
          {comments.map((c) => (
            <div key={c.id} className="flex flex-col gap-4">
              <div className="flex gap-3 sm:gap-4">
                <Image
                  src={c.avatar}
                  alt={c.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-11 h-11 sm:w-12 sm:h-12"
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                    <h4 className="text-black font-semibold">{c.name}</h4>
                    <span className="text-gray-500 text-sm">{c.timestamp}</span>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm sm:text-base">{c.comment}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <button
                      onClick={() => handleLike(c.id)}
                      className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                      <ThumbsUp size={16} /> {c.likes}
                    </button>
                    <button
                      onClick={() =>
                        setReplyingTo(replyingTo === c.id ? null : c.id)
                      }
                      className="hover:text-black"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              {replyingTo === c.id && (
                <div className="ml-12 mt-2 max-w-full">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write your reply..."
                    className="w-full min-h-[80px] p-2 rounded-md bg-white text-gray-700 border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    onClick={() => handleReply(c.id)}
                    className="mt-2 px-4 py-1.5 text-sm rounded-md bg-black text-gray-900 hover:bg-black transition"
                  >
                    <Send size={14} className="inline mr-1" /> Send
                  </button>
                </div>
              )}

              {c.replies.length > 0 && (
                <div className="ml-10 sm:ml-12 mt-2 space-y-6 border-l border-gray-200 pl-4 sm:pl-6">
                  {c.replies.map((r) => (
                    <div key={r.id} className="flex gap-3 sm:gap-4">
                      <Image
                        src={r.avatar}
                        alt={r.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover w-10 h-10"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                          <h5 className="text-black font-semibold flex items-center gap-1">
                            <CornerDownRight size={14} /> {r.name}
                          </h5>
                          <span className="text-gray-500 text-sm">
                            {r.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700 mt-1 text-sm sm:text-base">{r.comment}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <button
                            onClick={() => handleLike(r.id, true, c.id)}
                            className="flex items-center gap-1 hover:text-black transition-colors"
                          >
                            <ThumbsUp size={16} /> {r.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComments;
