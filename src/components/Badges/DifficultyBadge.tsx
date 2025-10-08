import React from "react";
import Admonition from "@theme/Admonition";

type Difficulty = "Easy" | "Medium" | "Hard";

interface DifficultyBadgeProps {
  difficulty?: Difficulty;
  kyu?: number;
}

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({
  difficulty,
  kyu,
}) => {
  let displayDifficulty = difficulty;

  if (kyu) {
    if (kyu >= 5 && kyu <= 8) displayDifficulty = "Easy";
    else if (kyu >= 3 && kyu <= 4) displayDifficulty = "Medium";
    else if (kyu >= 1 && kyu <= 2) displayDifficulty = "Hard";
  }

  const difficultyTypeMap = {
    Easy: "tip",
    Medium: "warning",
    Hard: "danger",
  };

  const type = displayDifficulty ? difficultyTypeMap[displayDifficulty] : "tip";

  const title = displayDifficulty
    ? kyu
      ? `${kyu} kyu`
      : displayDifficulty
    : "";

  return (
    <Admonition type={type} icon={null} title={title}>
      <></>
    </Admonition>
  );
};

export default DifficultyBadge;
