import { createStore } from "solid-js/store";
import { NUM_BOARDS } from "./consts";
import { range } from "./funcs";

type GameState = {
  // Daily duotrigordle number (seed for target words)
  id: number;
  // Current word input
  input: string;
  // List of guesses
  guesses: string[];
  // 32 wordle targets
  targets: string[];
  // Whether or not the game is finished
  gameOver: boolean;
  // Whether or not the game is in practice mode
  practice: boolean;
  // Start timestamp (milliseconds from unix epoch)
  startTime: number;
  // End timestamp (milliseconds from unix epoch)
  endTime: number;
};
type PopupsState = {
  about: boolean;
  settings: boolean;
  stats: boolean;
};
type SettingsState = {
  colorBlindMode: boolean;
  showTimer: boolean;
  wideMode: boolean;
  hideCompletedBoards: boolean;
  animateHiding: boolean;
  hideKeyboard: boolean;
};
type GameHistory = {
  id: number;
  guesses: number | null;
  time: number;
};
type StatsState = {
  history: GameHistory[];
};
type AppState = {
  game: GameState;
  popups: PopupsState;
  settings: SettingsState;
  stats: StatsState;
};

const initialState: AppState = {
  game: {
    id: 0,
    input: "",
    guesses: [],
    targets: range(NUM_BOARDS).map((_) => "AAAAA"),
    gameOver: false,
    practice: true,
    startTime: 0,
    endTime: 0,
  },
  popups: {
    about: false,
    settings: false,
    stats: false,
  },
  settings: {
    colorBlindMode: false,
    showTimer: false,
    wideMode: false,
    hideCompletedBoards: false,
    animateHiding: true,
    hideKeyboard: false,
  },
  stats: {
    history: [],
  },
};

const [getStore, setStore] = createStore(initialState);
