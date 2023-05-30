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
  import { createEventDispatcher } from 'svelte';
	import type { DisplayOptions, GameModel } from '$lib/cricket-types';
  export let current: GameModel;
  export let options: DisplayOptions = {
    // showDetails: false,
    lang: undefined
  }
  // let files: File[];
  // let scale: number = 1.0;
  // let scaleStep: number = 0.25;
  // const dispatch = createEventDispatcher();

  // function loadFile() {
  //   // @ts-ignore
  //   modeler.readSingleFile(files[0], showModel, options);
  // }
  // function openFile() {
  //   // @ts-ignore
  //   document.getElementById('file-input').click();
  // }

  // function saveFile() {
  //   var file = new Blob([modeler.saveFile()], {type: 'text/xml'});
  //   if (window.navigator.msSaveOrOpenBlob) // IE10+
  //       window.navigator.msSaveOrOpenBlob(file, modeler.getFileName()+'.bpmn');
  //   else { // Others
  //       var a = document.createElement("a"),
  //               url = URL.createObjectURL(file);
  //       a.href = url;
  //       a.download = modeler.getFileName()+'.bpmn';
  //       document.body.appendChild(a);
  //       a.click();
  //       setTimeout(function() {
  //           document.body.removeChild(a);
  //           window.URL.revokeObjectURL(url);
  //       }, 0);
  //   }
  // }

  // function showModel(currentModel: BpmnModel) {
  //   dispatch('modelLoaded', {
  //     current: currentModel
  //   });

  //   // In this usage the current object should be displayed immediately as there is no list
  //   // document.getElementById('currentSect').style.display = 'inline';
  //   // Display first diagram immediately if there is only one
  //   // var isHidden = getComputedStyle(document.querySelector('#'+current.diagrams.0.id+'Sect .bpmnDiagram')).display == 'none';
  //   // if (current.diagrams.length == 1 && isHidden) {
  //   //   toggleSection(current.diagrams[0].id+'Sect');
  //   // }
  //   // makeDraggable(me.svgContainer);

  //   document.querySelectorAll('.loaded-btn').forEach(function(el) {
  //     el.setAttribute('style','display:inline');
  //   });
  // }

  // function zoomOut() {
  //   console.info('zoomOut');
  //   scale -= scaleStep;
  //   var diags = document.querySelectorAll('svg');
  //   diags.forEach(function(d,i) { d.setAttribute('transform', 'scale('+scale+')');})
  // }

  // function zoomIn() {
  //   console.info('zoomIn');
  //   scale += scaleStep;
  //   var diags = document.querySelectorAll('svg');
  //   diags.forEach(function(d,i) { d.setAttribute('transform', 'scale('+scale+')');})
  // }

  // /**
  //  * @param { MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} event
  //  */
  // function showDetails(event) {
  //   options.showDetails = !options.showDetails;
  //   dispatch('optionsChanged', {
  //    options: options
  //   });
  // }

  // /**
  //  * @param { MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} event
  //  */
  // function showDebug(event) {
  //   options.showBounds = !options.showBounds;
  //   dispatch('optionsChanged', {
  //    options: options
  //   });
  // }
</script>

<!-- <input type="file" id="file-input" style="display:none" bind:files on:change={loadFile}/> -->
<nav class="navbar navbar-expand-md fixed-top">
        <a class="navbar-brand" href="https://knowprocess.com/">
          <img src="https://knowprocess.com/images/knowprocess-logo.png" alt="KnowProcess" loading="lazy"/>
        </a>
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->

        <div class="collapse navbar-collapse" id="navbarDefault" style="flex-grow:0.03">
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item" id="open-btn">
              <a class="nav-link" href="#openFile" on:click={openFile} title="Open a local model file">
                <span class="kp-icon-upload-alt"></span>
              </a>
            </li> -->
            <!-- <li class="nav-item loaded-btn" id="save-btn">
              <a class="nav-link" href="#saveFile" on:click={saveFile} title="Download this model">
                  <span class="kp-icon-download-alt"></span>
              </a>
            </li> -->
            <!-- <li class="nav-item loaded-btn" id="zoom-out-btn" title="Zoom out">
              <a class="nav-link" href="#zoomOut" on:click={zoomOut} title="Zoom out">
                <span class="kp-icon-minus-sign"></span>
              </a>
            </li>
            <li class="nav-item loaded-btn" id="zoom-in-btn" title="Zoom in">
              <a class="nav-link" href="#zoomIn" on:click={zoomIn} title="Zoom in">
                <span class="kp-icon-plus-sign"></span>
              </a>
            </li>
            <li class="nav-item loaded-btn" id="impl-details-btn" title="Toggle implementation details">
              <a class="nav-link" href="#showDetails" on:click={showDetails} title="Show implementation details">
                <span class="details-control kp-icon-eye-blocked"></span>
              </a>
            </li>
            <li class="nav-item loaded-btn" id="debug-btn" title="Toggle debug details">
              <a class="nav-link" href="#showDebug" on:click={showDebug} title="Show BPMN debug settings">
                <span class="debug-control kp-icon-bug"></span>
              </a>
            </li> -->
          </ul>
        </div>
      </nav>

<style></style>