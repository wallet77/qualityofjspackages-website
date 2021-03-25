<template>
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
</template>

<script>
export default {
    name: 'modal',
    props: {
        details: Object
    }
}
</script>

<style scoped>
.details-modal {
  background: #ffffff;
  color: black;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  left: 5vw;
  pointer-events: none;
  position: absolute;
  top: 0;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.details-modal .details-modal-close {
  align-items: center;
  color: #111827;
  display: flex;
  height: 3em;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 2em;
}
.details-modal .details-modal-close svg {
  display: block;
  cursor: pointer;
}
.details-modal .details-modal-title {
  color: #111827;
  padding: 1em 1em;
  pointer-events: all;
  position: relative;
  width: calc(100% - 2em);
}
.details-modal .details-modal-title h1 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: normal;
}
.details-modal .details-modal-content {
  border-top: 1px solid #e0e0e0;
  padding: 1em;
  pointer-events: all;
  overflow: auto;
}

.details-modal .details-modal-content, .details-modal .details-modal-content li {
    font-size: 15px;
}

.details-modal .details-modal-content td {
    padding: 10px
}
</style>