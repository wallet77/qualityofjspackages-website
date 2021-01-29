
<template>
    <div class="section">
        <h3>What is it?</h3>
        <div class="row mt-4">
            <div class="col-md-1 align-self-center">
                <img :src="`${publicPath}logo.png`">
            </div>
            <div class="col-md-4 align-self-center">
                <h4>State Of JS Packages</h4>
            </div>
            <div class="col-md-7 explanation">
                <div class="align-middle">
                    This website is an open-source project which aims to analyze Javascript packages.
                    <br/><br />
                    All the charts are based on a report automatically generated after the analysis of the top 1000 <a href="https://www.npmjs.com/browse/depended" target="_blank" rel="noopener noreferrer">most depended packages <font-awesome-icon :icon="['fab', 'npm']" /></a>.
                    <br /><br />
                    Last generated report: {{ date | formatDate }}
                    <br /><br />
                    If you see any error or if you just want to participate <font-awesome-icon :icon="['far', 'smile-wink']" />, feel free to check the project's <font-awesome-icon :icon="['fab', 'github-alt']" /> repositories:
                </div>
                <ul class="features-list">
                    <li>Report generator</li>
                    <li>Website</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'intro',
    props: {
        date: Date
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>
