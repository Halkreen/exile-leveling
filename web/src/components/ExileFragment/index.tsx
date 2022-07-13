import classNames from "classnames";
import { Fragment, RouteLookup } from "../../../../common/routes";
import { Quest } from "../../../../common/types";
import {
  BsArrowDownSquare,
  BsArrowDownLeftSquare,
  BsArrowDownRightSquare,
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsArrowUpSquare,
  BsArrowUpLeftSquare,
  BsArrowUpRightSquare,
} from "react-icons/bs";
import { InlineFakeBlock } from "../InlineFakeBlock";
import { quests, areas } from "../../../../common/data";

import styles from "./ExileFragment.module.css";

interface FragmentProps {
  fragment: Fragment;
  lookup: RouteLookup;
}

function getImageUrl(path: string) {
  return new URL(`./images/${path}`, import.meta.url).href;
}

function EnemyComponent(enemy: string) {
  return <span className={classNames(styles.enemy)}>{enemy}</span>;
}

function AreaComponent(areaName: string) {
  return <span className={classNames(styles.area)}>{areaName}</span>;
}

function QuestComponent(quest: Quest) {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("quest.png")}
        className={classNames("inlineIcon")}
      />
      <span className={classNames(styles.quest)}>{quest.name}</span>
    </div>
  );
}

function QuestTextComponent(text: string) {
  return <span className={classNames(styles.questText)}>{text}</span>;
}

function WaypointComponent() {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("waypoint.png")}
        className={classNames("inlineIcon")}
      />
      <span className={classNames(styles.waypoint)}>Waypoint</span>
    </div>
  );
}

function TrialComponent() {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("trial.png")}
        className={classNames("inlineIcon")}
      />
      <span className={classNames(styles.trial)}>Trial of Ascendancy</span>
    </div>
  );
}

function TownComponent() {
  return (
    <>
      <span className={classNames(styles.default)}>
        <span>Logout</span>
      </span>
    </>
  );
}

function PortalComponent() {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("portal.png")}
        className={classNames("inlineIcon")}
      />
      <span className={classNames(styles.portal)}>Portal</span>
    </div>
  );
}

const directions = [
  <InlineFakeBlock child={<BsArrowUpSquare />} />,
  <InlineFakeBlock child={<BsArrowUpRightSquare />} />,
  <InlineFakeBlock child={<BsArrowRightSquare />} />,
  <InlineFakeBlock child={<BsArrowDownRightSquare />} />,
  <InlineFakeBlock child={<BsArrowDownSquare />} />,
  <InlineFakeBlock child={<BsArrowDownLeftSquare />} />,
  <InlineFakeBlock child={<BsArrowLeftSquare />} />,
  <InlineFakeBlock child={<BsArrowUpLeftSquare />} />,
];

function DirectionComponent(dirIndex: number) {
  return <span>{directions[dirIndex]}</span>;
}

function GenericComponent(text: string) {
  return <span className={classNames(styles.default)}>{text}</span>;
}

function CraftingComponent(craftingRecipes: string[]) {
  return (
    <span>
      <div className={classNames(styles.noWrap)}>
        <img
          src={getImageUrl("crafting.png")}
          className={classNames("inlineIcon")}
        />
        <span className={classNames(styles.default)}>Crafting: </span>
      </div>
      <span className={classNames(styles.default)}>
        {craftingRecipes.join(", ")}
      </span>
    </span>
  );
}

function AscendComponent() {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("trial.png")}
        className={classNames("inlineIcon")}
      />
      <span className={classNames(styles.trial)}>Ascend</span>
    </div>
  );
}

export function ExileFragment({ fragment, lookup }: FragmentProps) {
  switch (fragment.type) {
    case "kill":
      return EnemyComponent(fragment.value);
    case "arena":
      return AreaComponent(fragment.value);
    case "area":
      return AreaComponent(areas[fragment.areaId].name);
    case "enter":
      return AreaComponent(areas[fragment.areaId].name);
    case "quest": {
      return QuestComponent(quests[fragment.questId]);
    }
    case "quest_text":
      return QuestTextComponent(fragment.value);
    case "waypoint": {
      if (fragment.areaId == null) return WaypointComponent();

      return (
        <>
          {WaypointComponent()}
          <span> ➞ </span>
          {AreaComponent(areas[fragment.areaId].name)}
        </>
      );
    }
    case "get_waypoint":
      return WaypointComponent();
    case "trial":
      return TrialComponent();
    case "town":
      return TownComponent();
    case "set_portal":
      return PortalComponent();
    case "use_portal":
      return PortalComponent();
    case "dir":
      return DirectionComponent(fragment.dirIndex);
    case "generic":
      return GenericComponent(fragment.value);
    case "crafting":
      return CraftingComponent(fragment.crafting_recipes);
    case "ascend":
      return AscendComponent();
  }

  return <>{`unmapped: ${JSON.stringify(fragment)}`}</>;
}