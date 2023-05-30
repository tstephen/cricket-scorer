<script lang="ts">
  import { GameModel, type DisplayOptions } from '$lib/cricket-types';
  import BowlingSect from '../components/Bowling.svelte';
  import NavBarSect from '../components/NavBar.svelte';
  import BattingSect from '../components/Batting.svelte';
//   import { getContext, onMount, setContext } from 'svelte';

  let eagles = {
    name: 'Eagles',
    players: [
      { name: 'Player 4', ballsFaced: [], oversBowled: [
        { deliveries: ['.', 'W', '+', 'B', 'LB', '1', '.', '.', '.'] },
        { deliveries: ['.', '.', '+', 'W', '.', '.'] },
      ] }
    ]
  }
  let hawks = {
    name: 'Hawks',
    players: [
      { name: 'Player 1', ballsFaced: ['.', '1', '.', '4'] },
      { name: 'Player 2', ballsFaced: [], howOut: 'bowled', outToBowler: 'W player 1' }, 
      { name: 'Player 3', ballsFaced: ['4', '6', '2'], howOut: 'caught W player 6', outToBowler: 'W player 2' }, 
      { name: 'Player 4', ballsFaced: [], oversBowled: [
      ] }
    ]
  }
  let current: GameModel = new GameModel(new Date('2023-05-22'), 'Village Green', eagles, hawks);
  let options: DisplayOptions = {}

</script>

<header>
  <NavBarSect current={current} options={options}/>
  <h1 contenteditable="true"
      style="margin-bottom: 0.1rem">
      {#if current && current.homeTeam && current.awayTeam}
        {current.homeTeam.name} vs {current.awayTeam.name}
      {/if}
  </h1>
</header>

<main>

  <BattingSect current={current} options={options}/>
  <BowlingSect current={current} options={options}/>
  
</main>

<footer>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</footer>

<style>



</style>
