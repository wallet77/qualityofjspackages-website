
<template>
    <div class="section">
        <h3>Contributing</h3>
        <div class="row mt-4">
            <div class="col-md-1">
            </div>
            <div class="col-md-10 explanation">
                <div class="align-middle">
                    If you see any error or if you just want to participate <font-awesome-icon :icon="['far', 'smile-wink']" />, feel free to check the project's <font-awesome-icon :icon="['fab', 'github-alt']" /> repositories:
                </div>
                <ul class="features-list">
                    <li><a href="https://github.com/wallet77/npm-packages-quality-analysis" target="_blank" rel="noopener noreferrer">Packages crawler</a></li>
                    <li><a href="https://github.com/wallet77/qualityofjspackages-data-generator" target="_blank" rel="noopener noreferrer">Report generator</a></li>
                    <li><a href="https://github.com/wallet77/qualityofjspackages-website" target="_blank" rel="noopener noreferrer">Quality of JS packages website</a></li>
                </ul>
            </div>
            <div class="col-md-1">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-1">
            </div>
            <div class="col-md-10 explanation">
                <div class="row mt-4">
                    This project is possible because of them:
                </div>
                <div class="dependencies row mt-4">
                    <td class="align-self-center col-md-2">
                        <a href="https://github.com/kucherenko/jscpd" target="_blank" rel="noopener noreferrer">
                            <img :src="`${publicPath}logos/jscpd.png`" width="175" height="175" alt="jscpd" />
                            <div></div>
                        </a>
                    </td>
                    <td class="align-self-center col-md-2">
                        <a href="https://github.com/hubblo-org/scaphandre" target="_blank" rel="noopener noreferrer">
                            <img :src="`${publicPath}logos/scaphandre.svg`" width="100" height="100" alt="scaphandre"/>
                            <div>Scaphandre</div>
                        </a>
                    </td>
                    <td class="align-self-center col-md-2">
                        <a href="https://github.com/wallet77/qualscan" target="_blank" rel="noopener noreferrer">
                            <img :src="`${publicPath}logos/qualscan.png`" width="100" height="100" alt="qualscan" />
                            <div>Qualscan</div>
                        </a>
                    </td>
                    <td class="align-self-center col-md-2">
                        <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon :icon="['fab', 'npm']" size="4x" />
                        </a>
                    </td>
                    <td class="align-self-center col-md-2">
                        <a href="https://npms.io/" target="_blank" rel="noopener noreferrer">
                            <img :src="`${publicPath}logos/npms.png`" width="100" height="100" alt="npms" />
                            <div></div>
                        </a>
                    </td>
                    <td class="align-self-center col-md-2">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon :icon="['fab', 'github-alt']" size="4x" />
                        </a>
                    </td>
                </div>
            </div>
            <div class="col-md-1">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contributing',
    props: {
        date: Date,
        duration: Number
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style scoped>
.dependencies a {
    display: block;
    text-align: center;
    height: 200px;
    width: 200px;
}
</style>