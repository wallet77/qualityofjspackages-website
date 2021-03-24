
<template>
    <div class="section">
        <h3>What is it?</h3>
        <div class="row mt-4">
            <div class="col-md-1 align-self-center alignCenter">
                <img :src="`${publicPath}logo.png`" width="200" height="200" alt="logo">
            </div>
            <div class="col-md-4 align-self-center">
                <h4>Quality of JS packages</h4>
            </div>
            <div class="col-md-7 explanation">
                <div class="align-middle">
                    This website is an open-source project which aims to analyze Javascript packages.
                    <br/><br />
                    All the charts are based on a report automatically generated after the analysis of the top <a href="https://www.npmjs.com/browse/depended" target="_blank" rel="noopener noreferrer">most depended packages <font-awesome-icon :icon="['fab', 'npm']" /></a>.
                    <br /><br />
                    <u>Last generated report:</u> <b>{{ date | formatDate }} in {{ duration | prettyMS }}</b>
                    <details>
                        <summary>
                            <div class="button">
                                <font-awesome-icon :icon="['far', 'question-circle']" />
                            </div>
                            <div class="details-modal-overlay"></div>
                        </summary>
                        <div class="details-modal">
                            <div class="details-modal-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
                                </svg>
                            </div>
                            <div class="details-modal-title">
                                <h1>Report details</h1>
                            </div>
                            <div class="details-modal-content">
                                <p>
                                    Total packages scanned: {{details.nbPackages}}
                                </p>
                                <p>
                                    Machine details:
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Number of cores</td><td>{{details.machine.cpu.number}}</td>
                                            </tr>
                                            <tr>
                                                <td>CPU</td><td>{{details.machine.cpu.type.model}}</td>
                                            </tr>
                                            <tr>
                                                <td>Memory</td><td>{{details.machine.memory.total}}</td>
                                            </tr>
                                            <tr>
                                                <td>OS</td>
                                                <td>
                                                    Platform: {{details.machine.os.platform}} <br/>
                                                    Version: {{details.machine.os.version}} <br/>
                                                    Release: {{details.machine.os.release}}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                                <p>
                                    Not scanned modules:
                                    <ul>
                                        <li v-bind:key="currentPackage" v-for="currentPackage in details.skippedPackages">
                                            {{ currentPackage }}
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'intro',
    props: {
        date: Date,
        duration: Number,
        details: Object
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style scoped>

.button {
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
}
.button:hover {
  background-color: #17ac4e;
}
.details-modal {
  background: #ffffff;
  color: black;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  left: 25%;
  max-width: 90%;
  pointer-events: none;
  position: absolute;
  top: 25%;
  transform: translate(-50%, -50%);
  width: 30em;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.details-modal .details-modal-close {
  align-items: center;
  color: #111827;
  display: flex;
  height: 4.5em;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 4.5em;
}
.details-modal .details-modal-close svg {
  display: block;
  cursor: pointer;
}
.details-modal .details-modal-title {
  color: #111827;
  padding: 1.5em 2em;
  pointer-events: all;
  position: relative;
  width: calc(100% - 4.5em);
}
.details-modal .details-modal-title h1 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: normal;
}
.details-modal .details-modal-content {
  border-top: 1px solid #e0e0e0;
  padding: 2em;
  pointer-events: all;
  overflow: auto;
}

.details-modal .details-modal-content, .details-modal .details-modal-content li {
    font-size: 15px;
}

.details-modal .details-modal-content td {
    padding: 10px
}

.details-modal-overlay {
  transition: opacity 0.2s ease-out;
  pointer-events: none;
  background: rgba(15, 23, 42, 0.8);
  position: fixed;
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}
details {
    display: inline-block;
    margin-left: 10px
}
details[open] .details-modal-overlay {
  pointer-events: all;
  opacity: 0.5;
}

details summary:focus {
  outline: none;
}
details summary::marker {
  content: none;
}
</style>
