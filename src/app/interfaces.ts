export interface Letter {
    letter: String;
    pos: number;
  }

  export interface Letters {
    ltrs: Letter[];
    intrvl: number;
  }

  export interface State {
    score: number;
    letters: Letter[];
    level: number;
  }