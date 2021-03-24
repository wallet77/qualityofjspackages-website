<template>
    <div>
        <loader v-if="!loaded"/>
        <ul id="menu" class="topnav">
            <li v-on:click="switchMode" data-menuanchor="intro" class="active"><a href="#intro">Intro</a></li>
            <li v-on:click="switchMode" data-menuanchor="quality"><a href="#quality">Overview</a></li>
            <li v-on:click="switchMode" data-menuanchor="copypaste"><a href="#copypaste">Copy/Paste</a></li>
            <li v-on:click="switchMode" data-menuanchor="dependencies"><a href="#dependencies">Dependencies</a></li>
            <li v-on:click="switchMode" data-menuanchor="performance"><a href="#performance">Performance</a></li>
            <li v-on:click="switchMode" data-menuanchor="security"><a href="#security">Security</a></li>
            <li v-on:click="switchMode" data-menuanchor="consumption"><a href="#consumption">Consumption</a></li>
            <li v-on:click="switchMode" data-menuanchor="npms"><a href="#npms">npms.io</a></li>
            <li v-on:click="switchMode" data-menuanchor="contributing"><a href="#contributing">Contributing</a></li>
            <li v-on:click="switchMode" class="icon"><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
        <full-page :options="options" id="fullpage" v-if="loaded">
            <Intro :date=date :duration=duration :details=details />
            <Qualscan :report=qualscanData v-if="qualscanData" />
            <CodeDuplication :report=cdData v-if="cdData" />
            <Dependencies :report=dep v-if="dep" />
            <Performance :report=perf v-if="perf" />
            <Security :report=security v-if="security" />
            <Consumption :report=consumption v-if="consumption" />
            <NPMS :report=npms v-if="npms" />
            <Contact />
        </full-page>
    </div>
</template>

<script>
  import ReportService from '@/services/reports'
  import Loader from '@/components/Loader'
  import Intro from '@/components/Intro'
  import Contact from '@/components/Contact'
  import Qualscan from '@/components/Qualscan'
  import NPMS from '@/components/NPMS'
  import Dependencies from '@/components/Dependencies'
  import Performance from '@/components/Performance'
  import Security from '@/components/Security'
  import CodeDuplication from '@/components/CodeDuplication'
  import Consumption from '@/components/Consumption'
  export default {
    name: 'app',
    components: {
      Intro,
      Contact,
      Qualscan,
      NPMS,
      Security,
      CodeDuplication,
      Dependencies,
      Performance,
      Loader,
      Consumption
    },
    data () {
      return {
        loaded: false,
        options: {
          licenseKey: 'YOUR_KEY_HERE',
          scrollOverflow: true,
          scrollBar: false,
          autoScrolling: true,
          menu: '#menu',
          navigation: window.matchMedia('(min-width: 640px)').matches,
          navigationTooltips: ['Intro', 'Overal quality', "Copy/paste", "Dependencies", "Performance", "Security", "Consumption", "NPMS", 'Contributing'],
          anchors: ['intro', 'quality', 'copypaste', 'dependencies', 'performance', 'security', 'consumption', 'npms', 'contributing'],
          sectionsColor: ['#0b3c1b', '#343E59', '#213b4a', '#232131', '#381535', '#34354e', '#1c401d', '#4e3434', '#000000']
        },
        qualscanData: null
      }
    },
    methods: {
      switchMode: () => {
        const x = document.getElementById("menu");
        if (x.className === "topnav") {
          x.className += " responsive"
        } else {
          x.className = "topnav"
        }
      }
    },
    async created() {
      const data = await ReportService.fetch()
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
      this.loaded = true
      this.details = {
        skippedPackages: Object.keys(data.skippedPackages),
        machine: data.machine,
        nbPackages: data.nbPackages
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

.topnav .icon {display: none;}
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

img {
    aspect-ratio: attr(width) / attr(height);
}

.details {
  font-size: 12px;
}
</style>