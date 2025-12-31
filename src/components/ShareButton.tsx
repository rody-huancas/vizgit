"use client";

import { useState } from "react";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoShareSocialOutline, IoCheckmark, IoLinkOutline } from "react-icons/io5";

interface ShareButtonProps {
  username : string;
  stats   ?: {
    totalCommits?: number;
    totalRepos  ?: number;
    stars       ?: number;
  };
}

const ShareButton = ({ username, stats }: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = `https://vizgit.novtiq.com/${username}`;

  const shareText = stats
    ? `¡Mira mis estadísticas de GitHub! 📊 ${
        stats.totalCommits || 0
      } commits, ${stats.totalRepos || 0} repos, ${
        stats.stars || 0
      } ⭐ en VizGit`
    : `¡Mira mis estadísticas de GitHub en VizGit! 🚀`;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(
      shareUrls[platform],
      "_blank",
      "noopener,noreferrer,width=600,height=400"
    );
    setIsOpen(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mis estadísticas de GitHub",
          text : shareText,
          url  : shareUrl,
        });
        setIsOpen(false);
      } catch (err) {
        console.error("Error al compartir:", err);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg text-white bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 cursor-pointer"
        aria-label="Compartir estadísticas"
        title="Compartir perfil en redes sociales"
        type="button"
      >
        <IoShareSocialOutline className="w-5 h-5" />
        <span>Compartir</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-2 w-56 bg-[#0D0716] rounded-lg shadow-xl border border-blue-500/20 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-2 space-y-1">
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white/90 hover:bg-blue-500/10 rounded-md transition-colors"
              >
                {copied ? (
                  <>
                    <IoCheckmark className="w-5 h-5 text-green-500" />
                    <span className="text-green-500">¡Enlace copiado!</span>
                  </>
                ) : (
                  <>
                    <IoLinkOutline className="w-5 h-5" />
                    <span>Copiar enlace</span>
                  </>
                )}
              </button>

              <div className="border-t border-blue-500/20 my-1" />

              <button
                onClick={() => handleShare("twitter")}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white/90 hover:bg-blue-500/10 rounded-md transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
                <span>Compartir en Twitter</span>
              </button>

              <button
                onClick={() => handleShare("facebook")}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white/90 hover:bg-blue-500/10 rounded-md transition-colors"
              >
                <FaFacebookF className="w-4 h-4 text-[#4267B2]" />
                <span>Compartir en Facebook</span>
              </button>

              <button
                onClick={() => handleShare("linkedin")}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white/90 hover:bg-blue-500/10 rounded-md transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
                <span>Compartir en LinkedIn</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShareButton;
