/*******************************************************************************
 * Copyright 2011-2023 Tim Stephenson and contributors
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not
 *  use this file except in compliance with the License.  You may obtain a copy
 *  of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  License for the specific language governing permissions and limitations under
 *  the License.
 ******************************************************************************/

export const NS = {
}
export type DisplayOptions = {
  lang?: string;
}

export class TeamModel {
  constructor(
    public name: string,
    public players: PlayerModel[]
  ) {
  }
}

export class PlayerModel {
  constructor(
    public name: string,
    public onStrike: boolean,
    public ballsFaced?: string[],
    public batNo?: number, 
    public howOut?: string,
    public outToBowler?: string,
    // public batting: BattingModel,
    // public bowling: BowlingModel,
    public oversBowled?: OverModel[],
    public bowlerNo?: number
  ) {
  }
}

// export class BattingModel {
//   constructor(
//     public balls: string[]
//   ) {
//   }
// }

// export class BowlingModel {
//   constructor(
//     public overs: OverModel
//   ) {
//   }
// }

export class OverModel {
  constructor(
    public deliveries: string[]
  ) {
  }
}

export class GameModel {
  constructor(
    // public id: string,
    public date: date,
    public venue: string,
    public homeTeam: TeamModel,
    public awayTeam: TeamModel,
    public tossWonBy: string,
    public decidedTo: string,
    public maxOversPerBowler: number,

    ) {
      if (homeTeam == undefined) {
        console.warn('no home team, creating default');
        this.homeTeam = {
          name: 'Home',
          players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10', 'Player 11']
        }
      }
      if (awayTeam == undefined) {
        console.warn('no away team, creating default');
        this.awayTeam = {
          name: 'Visitors',
          players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10', 'Player 11']
        }
      }
      // if (maxOversPerBowler == undefined) {
        this.maxOversPerBowler = 5;
      // }
  }
}
