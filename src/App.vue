<template>
  <div>
    <loader v-if="!loaded" />
    <nav>
      <ul
        id="menu"
        class="topnav"
      >
        <li
          data-menuanchor="intro"
          class="active"
          @click="switchMode"
        >
          <a href="#intro">Intro</a>
        </li>
        <li
          data-menuanchor="quality"
          @click="switchMode"
        >
          <a href="#quality">Overview</a>
        </li>
        <li
          data-menuanchor="copypaste"
          @click="switchMode"
        >
          <a href="#copypaste">Copy/Paste</a>
        </li>
        <li
          data-menuanchor="dependencies"
          @click="switchMode"
        >
          <a href="#dependencies">Dependencies</a>
        </li>
        <li
          data-menuanchor="performance"
          @click="switchMode"
        >
          <a href="#performance">Performance</a>
        </li>
        <li
          data-menuanchor="security"
          @click="switchMode"
        >
          <a href="#security">Security</a>
        </li>
        <li
          data-menuanchor="consumption"
          @click="switchMode"
        >
          <a href="#consumption">Consumption</a>
        </li>
        <li
          data-menuanchor="npms"
          @click="switchMode"
        >
          <a href="#npms">npms.io</a>
        </li>
        <li
          data-menuanchor="contributing"
          @click="switchMode"
        >
          <a href="#contributing">Contributing</a>
        </li>
        <li
          class="icon"
          @click="switchMode"
        >
          &#9776;
        </li>
      </ul>
    </nav>
    <main>
      <full-page
        v-if="loaded"
        id="fullpage"
        ref="fullpage"
        :options="options"
      >
        <Intro
          :date="date"
          :duration="duration"
          :details="details"
          :reports-list="reportsList"
          @previousReport="loadReport"
        />
        <Qualscan
          :report="qualscanData"
          :display="toShow.quality"
        />
        <CodeDuplication
          v-if="cdData"
          :report="cdData"
          :display="toShow.copypaste"
        />
        <Dependencies
          :report="dep"
          :display="toShow.dependencies"
        />
        <Performance
          :report="perf"
          :display="toShow.performance"
        />
        <Security
          :report="security"
          :display="toShow.security"
        />
        <Consumption
          :report="consumption"
          :display="toShow.consumption"
        />
        <NPMS
          :report="npms"
          :display="toShow.npms"
        />
        <Contact />
      </full-page>
    </main>
  </div>
</template>

<script>
  import ReportService from '@/services/reports'
  import Loader from '@/components/Loader'
  import Intro from '@/components/Intro'
  import Qualscan from '@/components/Qualscan'
  import NPMS from '@/components/NPMS'
  import Dependencies from '@/components/Dependencies'
  import Performance from '@/components/Performance'
  import Security from '@/components/Security'
  import CodeDuplication from '@/components/CodeDuplication'
  import Consumption from '@/components/Consumption'
  import Contact from '@/components/Contact'

  import reportsList from '@/resources/reportList.json'

  for (let i = 0; i < reportsList.length; i++) {
      reportsList[i] = {
          name: `Report of ${reportsList[i]}`,
          value: reportsList[i]
      }
  }

  const mobileCheck = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  export default {
    name: 'App',
    components: {
      Intro,
      Qualscan,
      Security,
      CodeDuplication,
      Dependencies,
      Performance,
      Consumption,
      NPMS,
      Contact,
      Loader
    },
    data () {
      return {
        loaded: false,
        reportsList,
        options: {
          licenseKey: 'YOUR_KEY_HERE',
          scrollOverflow: true,
          scrollBar: false,
          autoScrolling: true,
          menu: '#menu',
          navigation: window.matchMedia('(min-width: 640px)').matches,
          navigationTooltips: ['Intro', 'Overal quality', "Copy/paste", "Dependencies", "Performance", "Security", "Consumption", "NPMS", 'Contributing'],
          anchors: ['intro', 'quality', 'copypaste', 'dependencies', 'performance', 'security', 'consumption', 'npms', 'contributing'],
          sectionsColor: ['#0b3c1b', '#343E59', '#213b4a', '#232131', '#381535', '#34354e', '#1c401d', '#4e3434', '#000000'],
          onLeave: function(origin, destination) {
            // if we display a page for the first time
            if (mobileCheck() && this.toShow[destination.anchor] !== undefined && !this.toShow[destination.anchor]) {
              // because of lazyloading of charts
              // on small screens, some info are hidden
              // we must recalculate section's height
              this.$nextTick(() => {
                this.$refs.fullpage.api.reBuild()
              })
            }
            this.toShow[destination.anchor] = true
          }.bind(this),
        },
        toShow: {
          quality: false,
          dependencies: false,
          copypaste: false,
          performance: false,
          security: false,
          consumption: false,
          npms: false
        },
        qualscanData: null,
      }
    },
    async created() {
      this.loadReport()
    },
    methods: {
      switchMode: () => {
        const x = document.getElementById("menu");
        if (x.className === "topnav") {
          x.className += " responsive"
        } else {
          x.className = "topnav"
        }
      },
      async loadReport (report) {
        // hack to avoid first loading duplication
        if(report === 'last') return

        this.loaded = false

        if(!report) report = this.reportsList[this.reportsList.length - 1].value

        const data = await ReportService.fetch(report)
        this.qualscanData = {
          qualscan: data.metrics.general.qualscan,
          details: data.metrics.qualscanMetrics
        }
        this.cdData = data.metrics['Code duplication']
        this.security = data.metrics['Security audit']
        this.npms = {
            final: data.metrics.general.npmsFinal,
            quality: data.metrics.general.npmsQuality,
            maintenance: data.metrics.general.npmsMaintenance,
            popularity: data.metrics.general.npmsPopularity
        }
        this.dep = {
          updates: data.metrics['Dependencies updates'],
          check: data.metrics['Dependencies check'],
          exactVersions: data.metrics['Exact version of dependencies']
        }
        this.perf = {
          depSize: data.metrics['Dependencies size'],
          packageSize: data.metrics['Project\'s size'],
          requireTime: data.metrics['Require time']
        }
        this.consumption = data.metrics.consumption
        this.date = new Date(data.time)
        this.duration = data.duration / 1000000
        this.details = {
          skippedPackages: Object.keys(data.skippedPackages),
          machine: data.machine,
          nbPackages: data.nbPackages
        }
        this.loaded = true
      }
    }
  }
</script>

<style>
.fp-controlArrow {
  border-style: none!important;
  margin-top: -25px;
}

.fp-controlArrow::before {
  border-style: solid;
  border-color: white;
	border-width: 0.3em 0.3em 0 0;
	content: '';
	display: inline-block;
	left: 0.15em;
	position: relative;
	top: 0.15em;
	transform: rotate(-45deg);
	vertical-align: top;
  width: 2em;
  height: 2em;
}

.fp-controlArrow:hover::before {
  border-color: #b9b9b9;
  transition: border-color 0.2s ease-in-out;
}

.fp-controlArrow.fp-next {
  right: 5.5em;
}

.fp-controlArrow.fp-next:before {
	left: 0;
  transform: rotate(45deg);
}

.fp-controlArrow.fp-prev:before {
	left: 0;
	transform: rotate(-135deg);
}

blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul{
  padding:0;margin:0
}

a{text-decoration:none}

table{border-spacing:0}

fieldset,img{border:0}

address,caption,cite,code,dfn,em,strong,th,var{font-weight:400;font-style:normal}

strong{font-weight:700}

ol,ul{list-style:none;margin:0;padding:0}

caption,th{text-align:left}

h1,h2,h3,h4,h5,h6{font-weight:400;font-size:100%;margin:0;padding:0}

abbr,acronym{border:0}

*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}

body{font-family:arial,helvetica; min-width: 100v; min-height: 100vh; }

.section{position:relative; color: #fff;}

h3{font-size:3em;text-align:center;color:#fff;font-weight:700}
h4{
    font-size: 3em;
    text-align: center;
    color: #fff;
    font-weight: 700;
}
.subTitle{
  font-size: 20px;
}

.topnav{position:fixed;top:20px;right:20px;z-index:70;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;letter-spacing:1px;font-size:1.1em}
.topnav li{display:inline-block;margin:10px 0;position:relative}
.topnav a{color:#fff;padding:0 1.1em 1.1em 1.1em}
.topnav li.active a:after{content:'';margin:0 1.1em 0 1.1em;height:2px;background:#fff;display:block;position:absolute;bottom:-6px;left:0;right:0;display:block}

.topnav .icon {
  color: white;
  display: none;
}
/* When the screen is less than 1190 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 1190px) {
  .topnav li:not(.active) {
    display: none;
  }
  .topnav li.icon {
    float: right;
    display: block;
  }

  .topnav.responsive {
    background-color: #0d30ad;
  }

  .topnav.responsive li.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive li {
    float: none;
    display: block;
    text-align: left;
  }

  h3 {
    margin-top: 45px;
  }

  .topnav {
    right: 0;
    top: 0;
  }

  .fp-controlArrow.fp-next {
    right: 50px;
  }
}

.valueImportant {
    font-size: 2em;
    font-weight: bold;
    color: #3599b3;
}
.valueWarn {
  color:#d0a05a;
}
.valueCritical {
  color:#d05a5a;
}
.valueInfo {
  color:#008ffb;
}
.valueSucceed {
  color:#2c9c28;
}
.section a, a.visited {
    color:#4ac9ea;
    text-decoration: underline;
}
.explanation {
    font-size: 1.8em;
    padding: 50px;
}
.explanation ul {
  list-style: none;
  list-style-position: inside;
}
.section ul li:before {
  content: "•";
  font-size: 130%;
  line-height: 0;
  margin: 0 0.3rem 0 -0.25rem;
  position: relative;
  top: 0.08rem;
  color: #4b9655;
}
.section li {
    font-size: 25px;
    margin-left: 30px;
}
.info {
  padding: 10px;
  text-align: center;
}

.alignCenter {
  text-align: center;
}

.info hr {
  border: 1px solid #638a70;
}

.details {
  font-size: 12px;
}
</style>