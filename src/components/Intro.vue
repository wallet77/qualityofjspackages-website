
<template>
    <div class="section">
        <h3>What is it?</h3>
        <div class="row mt-4">
            <div class="col-md-1 align-self-center alignCenter">
                <picture>
                    <source :srcset="`${publicPath}logo.webp`" type="image/webp">
                    <source :srcset="`${publicPath}logo.png`" type="image/png"> 
                    <img :src="`${publicPath}logo.png`" width="200" height="200" alt="logo">
                </picture>
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
                            <div class="button" v-on:click="showModal = true">
                                <font-awesome-icon :icon="['far', 'question-circle']" />
                            </div>
                            <div class="details-modal-overlay"></div>
                        </summary>
                        <Modal v-if="showModal" :details="details" />
                    </details>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'intro',
    components: {
        Modal: () => import('./Modal')
    },
    props: {
        date: Date,
        duration: Number,
        details: Object
    },
    data() {
        return {
            showModal: false,
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
