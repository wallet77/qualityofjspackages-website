
<template>
    <div class="section">
        <h3>Contact</h3>
        <div class="row mt-4">
            <div class="col-md-1">
            </div>
            <div class="col-md-10 explanation">
                <div class="align-middle">
                    If you see any error or if you just want to participate <font-awesome-icon :icon="['far', 'smile-wink']" />, feel free to check the project's <font-awesome-icon :icon="['fab', 'github-alt']" /> repositories:
                </div>
                <ul class="features-list">
                    <li><a href="https://github.com/wallet77/npm-packages-quality-analysis" target="_blank" rel="noopener noreferrer">Packages crawler</a></li>
                    <li><a href="https://github.com/wallet77/stateofjsdep-api" target="_blank" rel="noopener noreferrer">Report generator</a></li>
                    <li><a href="https://github.com/wallet77/stateofjsdep-ui" target="_blank" rel="noopener noreferrer">Website</a></li>
                </ul>
            </div>
            <div class="col-md-1">
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
