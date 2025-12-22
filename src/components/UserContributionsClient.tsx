"use client";

import { useState } from "react";
import UserStatsCard from "@/components/UserStatsCard";
import LanguagesCard from "@/components/LanguagesCard";
import WeekdayActivity from "@/components/WeekdayActivity";
import ContributionError from "./ContributionError";
import ExportFullProfile from "@/components/ExportFullProfile";
import ActivityLevelCard from "@/components/ActivityLevelCard";
import FooterImageDownload from "./FooterImageDownload";
import ContributionHeatmap from "@/components/ContributionHeatmap";
import ContributionsLoading from "./ContributionsLoading";
import ContributionCustomizer from "@/components/ContributionCustomizer";
import { THEMES } from "@/types/contributions.types";
import { useGitHubContributions } from "@/hooks/useGitHubContributions";

interface UserContributionsClientProps {
  username: string;
}

const UserContributionsClient = ({ username }: UserContributionsClientProps) => {
  const { contributions, totalContributions, languages, userStats, weekdayStats, activityLevel, loading, error } = useGitHubContributions(username);

  const [selectedTheme, setSelectedTheme] = useState<number>(4);
  const [showCustomize, setShowCustomize] = useState<boolean>(false);
  const [squareSize   , setSquareSize   ] = useState<number>(16);
  const [squareGap    , setSquareGap    ] = useState<number>(5);
  const [squareRadius , setSquareRadius ] = useState<number>(4);

  if (loading) return <ContributionsLoading />;

  if (error) return <ContributionError error={error} />;

  const currentTheme = THEMES[selectedTheme];

  return (
    <div className="py-8 space-y-6 px-2 sm:px-0 w-full overflow-x-hidden">
      <div id="contribution-customizer" className="px-5">
        <ContributionCustomizer
          selectedTheme    = {selectedTheme}
          setSelectedTheme = {setSelectedTheme}
          squareSize       = {squareSize}
          setSquareSize    = {setSquareSize}
          squareGap        = {squareGap}
          setSquareGap     = {setSquareGap}
          squareRadius     = {squareRadius}
          setSquareRadius  = {setSquareRadius}
          showCustomize    = {showCustomize}
          setShowCustomize = {setShowCustomize}
        />
      </div>

      <div className="flex justify-end px-5">
        <ExportFullProfile username={username} />
      </div>

      <div id="full-profile-container" className="space-y-6 px-5 pt-5">
        <div className="bg-linear-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h1 className="text-4xl font-black bg-linear-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              vizgit
            </h1>
          </div>
          <p className="text-white/70 text-lg">
            Perfil de <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400">@{username}</a>
          </p>
        </div>

        {activityLevel && (
          <ActivityLevelCard
            activityLevel      = {activityLevel}
            totalContributions = {totalContributions}
            theme              = {currentTheme}
            username           = {username}
          />
        )}

        {userStats && (
          <UserStatsCard stats = {userStats} theme = {currentTheme} username = {username} />
        )}

        <ContributionHeatmap
          contributions      = {contributions}
          totalContributions = {totalContributions}
          theme              = {currentTheme}
          squareSize         = {squareSize}
          squareGap          = {squareGap}
          squareRadius       = {squareRadius}
          username           = {username}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {weekdayStats.length > 0 && (
            <WeekdayActivity weekdayStats = {weekdayStats} theme = {currentTheme} />
          )}

          {languages. length > 0 && (
            <LanguagesCard languages = {languages} theme = {currentTheme} />
          )}
        </div>

        <FooterImageDownload />
      </div>
    </div>
  );
};

export default UserContributionsClient;
