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
  import { afterUpdate, createEventDispatcher  } from 'svelte';

	import type { BpmnDisplayOptions, BpmnModel } from '$lib/bpmn-types';
  export let current: BpmnModel;
  export let options: BpmnDisplayOptions;
  const dispatch = createEventDispatcher();

  function isDisabled() {
    return 'disabled'// if selectedIds.length > 1???
  }

  function downloadImage(diagIdToSave: string) {
    console.info('downloadImage: '+diagIdToSave);
    svgToPng(diagIdToSave, function(imgDataUri: string) {
      const imageFileName = modeler.getFileName() + '.png';
      if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(imgDataUri, imageFileName);
      else { // Others
        const a = document.createElement("a");
        a.href = imgDataUri;
        a.download = imageFileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(imgDataUri);
        }, 0);
      }
    });
  }

  function svgToPng(svgElId: string, callback: Function) {
    console.info('svgToPng');
    const svgUrl = URL.createObjectURL(new Blob([document.getElementById(svgElId)!.outerHTML], { type: 'image/svg+xml' }));
    const svgImage = new Image();
    document.body.appendChild(svgImage);
    svgImage.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = svgImage.clientWidth;
      canvas.height = svgImage.clientHeight;
      var canvasCtx = canvas.getContext('2d');
      canvasCtx.drawImage(svgImage, 0, 0);
      var imgData = canvas.toDataURL('image/png');
      callback(imgData);
      setTimeout(function() {
        document.body.removeChild(svgImage);
      }, 0);
    };
    svgImage.src = svgUrl;
  }

</script>

<section id="bowlingSect">
  <table id="bowlingHeader" class="table table-borderless">
    <thead>
      <tr>
        <th></th>
        <th class="bowler">Bowler</th>
        <th colspan="10">Bowling analysis</th>
        <th colspan="7">Bowling summary</th>
      </tr>
      <tr>
        <th></th>
        <th class="bowler"></th>
        {#each Array(current.maxOversPerBowler) as _, i (i)}
          <th class="over">{ i+1}</th>
        {/each}
        <th>wd</th>
        <th>nb</th>
        <th>overs</th>
        <th>mdns</th>
        <th>runs</th>
        <th>wkts</th>
        <th>avg</th>
      </tr>
    </thead>
    <tbody>
      {#if current && current.homeTeam}
        {#each current.homeTeam.players as player, i}
          {#if player.oversBowled != undefined && player.oversBowled.length > 0}
            <tr>
              <td>{i+1}</td>
              <td contenteditable>{player.name}</td>
              {#each player.oversBowled as over}
                <td>
                  <table>
                    <tr>
                      <td class="ball" contenteditable>
                        {over.deliveries[0]}
                      </td>
                      <td class="ball" contenteditable>
                        {over.deliveries[1]}
                      </td>
                      <td class="ball" contenteditable>
                        {over.deliveries[2]}
                      </td>
                    </tr>
                    <tr>
                      <td class="ball" contenteditable>
                        {over.deliveries[3]}
                      </td>
                      <td class="ball" contenteditable>
                        {over.deliveries[4]}
                      </td>
                      <td class="ball" contenteditable>
                        {over.deliveries[5]}
                      </td>
                    </tr>
                    {#if over.deliveries.length > 6}
                      <tr>
                        <td class="ball" contenteditable>
                          {over.deliveries[6]}
                        </td>
                        {#if over.deliveries.length > 6}
                          <td class="ball" contenteditable>
                            {over.deliveries[7]}
                          </td>
                        {/if}
                        {#if over.deliveries.length > 6}
                          <td class="ball" contenteditable>
                            {over.deliveries[8]}
                          </td>
                        {/if}
                      </tr>
                    {:else}
                      <tr>
                        <td colspan="3"></td>
                      </tr>
                    {/if}
                    <tr>
                      <td colspan="3"></td>
                    </tr>
                  </table>
                </td>
              {/each}
              {#each Array(current.maxOversPerBowler - player.oversBowled.length) as _, j}
                <td class="over"></td>
              {/each}
              <td>{ player.oversBowled.reduce((accumulator, current) => current == 4 ? accumulator += 1 : accumulator, 0)}</td>
              <td>nb</td>
              <td>overs</td>
              <td>mdns</td>
              <td>runs</td>
              <td>wkts</td>
              <td>avg</td>
            </tr>
          {/if}
        {/each}
      {/if}
    </tbody>
  </table>
</section>


<style>
td, th {
  border: solid 1px darkslategray
}
</style>