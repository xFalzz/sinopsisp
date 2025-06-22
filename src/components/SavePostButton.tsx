'use client';

import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

interface SavePostButtonProps {
  postId: string;
}

export function SavePostButton({ postId }: SavePostButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    setIsSaved(savedPosts.includes(postId));
  }, [postId]);

  const toggleSave = () => {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    
    if (isSaved) {
      const newSavedPosts = savedPosts.filter((id: string) => id !== postId);
      localStorage.setItem('savedPosts', JSON.stringify(newSavedPosts));
      setIsSaved(false);
    } else {
      const newSavedPosts = [...savedPosts, postId];
      localStorage.setItem('savedPosts', JSON.stringify(newSavedPosts));
      setIsSaved(true);
    }
  };

  return (
    <button
      onClick={toggleSave}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
    >
      {isSaved ? (
        <>
          <BookmarkCheck className="w-4 h-4 text-accent-orange" />
          <span className="text-sm">Tersimpan</span>
        </>
      ) : (
        <>
          <Bookmark className="w-4 h-4" />
          <span className="text-sm">Simpan</span>
        </>
      )}
    </button>
  );
} 