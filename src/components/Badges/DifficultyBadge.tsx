import React from "react";
import Admonition from "@theme/Admonition";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Props {
  difficulty?: Difficulty;
}

const DifficultyBadge: React.FC<Props> = ({ difficulty = "Easy" }) => {
  const type =
    difficulty === "Easy"
      ? "tip"
      : difficulty === "Medium"
      ? "warning"
      : "danger";

  return (
    <Admonition type={type} icon={null} title={difficulty}>
      <></>
    </Admonition>
  );
};

export default DifficultyBadge;
