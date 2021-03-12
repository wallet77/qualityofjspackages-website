
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
                    All the charts are based on a report automatically generated after the analysis of the top 1000 <a href="https://www.npmjs.com/browse/depended" target="_blank" rel="noopener noreferrer">most depended packages <font-awesome-icon :icon="['fab', 'npm']" /></a>.
                    <br /><br />
                    <u>Last generated report:</u> <b>{{ date | formatDate }} in {{ duration | prettyMS }}</b>
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
        duration: Number
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>
