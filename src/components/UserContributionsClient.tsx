"use client";

import { useState } from "react";
import ContributionError from "./ContributionError";
import ContributionHeatmap from "@/components/ContributionHeatmap";
import ContributionsLoading from "./ContributionsLoading";
import ContributionCustomizer from "@/components/ContributionCustomizer";
import { THEMES } from "@/types/contributions.types";
import { useGitHubContributions } from "@/hooks/useGitHubContributions";

interface Props {
  username: string;
}

const UserContributionsClient = ({ username }: Props) => {
  const { contributions, totalContributions, loading, error } = useGitHubContributions(username);

  const [selectedTheme, setSelectedTheme] = useState<number>(4);
  const [showCustomize, setShowCustomize] = useState<boolean>(false);
  const [squareSize   , setSquareSize   ] = useState<number>(11);
  const [squareGap    , setSquareGap    ] = useState<number>(3);
  const [squareRadius , setSquareRadius ] = useState<number>(2);

  if (loading) return <ContributionsLoading />;

  if (error) return <ContributionError error={error} />;

  const currentTheme = THEMES[selectedTheme];

  return (
    <div className="py-8 space-y-6 px-2 sm:px-0 w-full overflow-x-hidden">
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

      <ContributionHeatmap
        contributions      = {contributions}
        totalContributions = {totalContributions}
        theme              = {currentTheme}
        squareSize         = {squareSize}
        squareGap          = {squareGap}
        squareRadius       = {squareRadius}
        username           = {username}
      />
    </div>
  );
};

export default UserContributionsClient;
