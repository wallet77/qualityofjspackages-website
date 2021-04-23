
<template>
  <div class="section">
    <h3>What is it?</h3>
    <div class="row mt-4">
      <div class="col-md-1 align-self-center alignCenter">
        <picture>
          <source
            :data-srcset="`${publicPath}logo.webp`"
            type="image/webp"
          >
          <source
            :data-srcset="`${publicPath}logo.png`"
            type="image/png"
          > 
          <img
            :data-src="`${publicPath}logo.png`"
            width="200"
            height="200"
            alt="logo"
          >
        </picture>
      </div>
      <div class="col-md-4 align-self-center">
        <h4>Quality of JS packages</h4>
      </div>
      <div class="col-md-7 explanation">
        <div class="align-middle">
          This website is an open-source project which aims to analyze Javascript packages.
          <br><br>
          All the charts are based on a report automatically generated after the analysis of the top <a
            href="https://www.npmjs.com/browse/depended"
            target="_blank"
            rel="noopener noreferrer"
          >most depended packages <font-awesome-icon :icon="['fab', 'npm']" /></a>.
          <br><br>
          <u>Last generated report:</u> <b>{{ date | formatDate }} in {{ duration | prettyMS }}</b>
          <details>
            <summary>
              <div
                class="button"
                @click="showModal = true"
              >
                <font-awesome-icon :icon="['far', 'question-circle']" />
              </div>
              <div class="details-modal-overlay" />
            </summary>
            <Modal
              v-if="showModal"
              :details="details"
            />
          </details>
          <br>
        </div>
        <div class="row mt-4">
          <div class="col-md-5">
            <a
              href="#quality"
              class="skewBtn blue"
            >See last report</a>
          </div>
          <div class="col-md-1 align-self-center smallText">
            OR
          </div>
          <div class="col-md-5 align-self-center smallText">
            <Select
              :options="reportsList"
              :default="{name:'Select previous report', value: 'last'}"
              class="select"
              @input="getValue"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from '@/components/basic/Select.vue'
export default {
    name: 'Intro',
    components: {
        Modal: () => import('./Modal'),
        Select
    },
    props: {
        date: Date,
        duration: Number,
        details: Object,
        reportsList: Array
    },
    data() {
        return {
            showModal: false,
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        getValue (value) {
            this.$emit('previousReport', value)
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

.skewBtn {
    text-align: center;
    width: 80%;
    margin-top: 20px;
    display: inline-block;
    padding: 20px;
    height: 80px;
    outline: none;
    cursor: pointer;
    background: none;
    text-decoration: none;
    transition: 0.5s;
    font-size: 24px;
    border-radius: 5px;
    font-family: "Lato", sans-serif;
}
.skewBtn:hover {
  border: none;
  color: white;
  transform: scale(1.1);
}

/* Buttons */
.blue {
  border: 2px solid #1976D2;
  color: #4ac9ea;
}
.blue:hover {
  background-color: #1976D2;
  transition: all 0.3s ease-in-out;
}

.smallText {
    font-size: 0.5em;
}
</style>
