<!--
  Copyright 2011-2023 Tim Stephenson and contributors

   Licensed under the Apache License, Version 2.0 (the "License"); you may not
   use this file except in compliance with the License.  You may obtain a copy
   of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
   WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
   License for the specific language governing permissions and limitations under
   the License.
-->
<script lang="ts">
	import type { DisplayOptions, GameModel } from '$lib/cricket-types';
  export let current: GameModel;
  export let options: DisplayOptions = {
    lang: undefined
  }

</script>

<section id="battingSect">
  <table id="battingHeader" class="table table-borderless">
    <thead>
      <tr>
        <th></th>
        <th>Batter</th>
        <th colspan="2">Time/Over</th>
        <th>Runs</th>
        <th>4s</th>
        <th>6s</th>
        <th>How out</th>
        <th>Bowler</th>
        <th>Total</th>
      </tr>
      <tr>
        <th></th>
        <th></th>
        <th>In</th>
        <th>Out</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#if current && current.awayTeam}
        {#each current.awayTeam.players as player, i}
            <tr class={player.howOut == undefined ? 'notout' : 'out'}>
              <td contenteditable>{i+1}</td>
              <td contenteditable>{player.name} <span class="strike">{player.onStrike ? '*' : ''}</span></td>
              <td></td>
              <td></td>
              <td>
                {#if player.ballsFaced != undefined}
                  {#each player.ballsFaced as ball} {ball + ' '} {/each}
                {/if}
              </td>
              <td>{ player.ballsFaced.reduce((accumulator, current) => current == 4 ? accumulator += 1 : accumulator, 0)}</td>
              <td>{ player.ballsFaced.reduce((accumulator, current) => current == 6 ? accumulator += 1 : accumulator, 0)}</td>
              <td>{ player.howOut == undefined ? '' : player.howOut }</td>
              <td>{ player.outToBowler == undefined ? '' : player.outToBowler }</td>
              <td>{ player.ballsFaced.reduce((accumulator, current) => accumulator += (isNaN(current) ? 0 : parseInt(current)), 0)}</td>
            </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</section>

<style>
td, th {
  border: solid 1px darkslategray
}
tr.out {
  background-color: #cccccc;
}

</style>