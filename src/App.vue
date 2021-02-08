<template>
    <div>
        <loader v-if="!loaded"/>
        <ul id="menu">
            <li data-menuanchor="intro" class="active"><a href="#intro">Intro</a></li>
            <li data-menuanchor="quality"><a href="#quality">Overview</a></li>
            <li data-menuanchor="copypaste"><a href="#copypaste">Copy/Paste</a></li>
            <li data-menuanchor="dependencies"><a href="#dependencies">Dependencies</a></li>
            <li data-menuanchor="security"><a href="#security">Security</a></li>
            <li data-menuanchor="npms"><a href="#npms">npms.io</a></li>
        </ul>
        <full-page :options="options" id="fullpage" v-if="loaded">
            <Intro :date=date :duration=duration />
            <Qualscan :report=qualscanData v-if="qualscanData" />
            <CodeDuplication :report=cdData v-if="cdData" />
            <Dependencies :report=dep v-if="dep" />
            <Security :report=security v-if="security" />
            <NPMS :report=npms v-if="npms" />
        </full-page>
    </div>
</template>

<script>
  import ReportService from '@/services/reports'
  import Loader from '@/components/Loader'
  import Intro from '@/components/Intro'
  import Qualscan from '@/components/Qualscan'
  import NPMS from '@/components/NPMS'
  import Dependencies from '@/components/Dependencies'
  import Security from '@/components/Security'
  import CodeDuplication from '@/components/CodeDuplication'
  export default {
    name: 'app',
    components: {
      Intro,
      Qualscan,
      NPMS,
      Security,
      CodeDuplication,
      Dependencies,
      Loader
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
          navigation: true,
          navigationTooltips: ['Intro', 'Overal quality', "Copy/paste", "Dependencies", "Security", "NPMS"],
          anchors: ['intro', 'quality', 'copypaste', 'dependencies', 'security', 'npms'],
          sectionsColor: ['#117540', '#343E59', '#213b4a', '#232131', '#34354e', '#4e3434']
        },
        qualscanData: null
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
      this.date = new Date(data.time)
      this.duration = data.duration / 1000000
      this.loaded = true
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

h3{font-size:5em;text-align:center;color:#fff;font-weight:700}
h4{
    font-size: 3em;
    text-align: center;
    color: #fff;
    font-weight: 700;
}
h5{
  font-size: 20px;
}

#menu-line{position:absolute;bottom:-4px;left:0;width:159px;height:2px;background:#fff}
#menu{position:fixed;top:20px;right:20px;z-index:70;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;letter-spacing:1px;font-size:1.1em}
#menu li{display:inline-block;margin:10px 0;position:relative}
#menu a{color:#fff;padding:0 1.1em 1.1em 1.1em}
#menu li.active a:after{content:'';margin:0 1.1em 0 1.1em;height:2px;background:#fff;display:block;position:absolute;bottom:-6px;left:0;right:0;display:block}

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
.section a, a.visited {
    color:#3599b3;
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

.info hr {
  border: 1px solid #638a70;
}

img {
    aspect-ratio: attr(width) / attr(height);
}
</style>