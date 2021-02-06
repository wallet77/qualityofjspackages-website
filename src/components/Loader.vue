
<template>
    <div>
        <div id="loader-wrapper">
            <div id="loader"></div>
        
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        
            </div>
        <div id="loader-overlay"></div>
    </div>
</template>

<script>
export default {
    name: 'loader',
    methods: {
        addLoader (element) {
            element.classList.add('pending');
            
            const wrapper = document.querySelector('#loader-wrapper');
            const overlay = document.querySelector('#loader-overlay');
            
            const bounds =   element.getBoundingClientRect();
            
            const popupWidth = bounds.width;
            const popupHeight = bounds.height;

            const popupTop = bounds.top;
            const popupLeft = bounds.left;
            
            const size = Math.min(popupHeight, popupWidth) / 3;

            const loader = document.getElementById('loader');
            loader.style.width = size + 'px';
            loader.style.height = size + 'px';
            loader.style.marginTop = (popupHeight - size)/2 + 'px';
            loader.style.marginLeft = (popupWidth - size)/2 + 'px';
            
            wrapper.style.width = popupWidth + 'px';
            wrapper.style.height = popupHeight + 'px';
            wrapper.style.top = popupTop + 'px';
            wrapper.style.left = popupLeft + 'px';
            
            overlay.style.width = popupWidth + 'px';
            overlay.style.height = popupHeight + 'px';
            overlay.style.top = popupTop + 'px';
            overlay.style.left = popupLeft + 'px';
        },
        removeLoader: (element) => {
            const wrapper = document.querySelector('#loader-wrapper');
            const overlay = document.querySelector('#loader-overlay');
            
            element.classList.remove('pending');
            wrapper.parentNode.removeChild(wrapper);
            overlay.parentNode.removeChild(overlay);
        }
    },
    mounted() {
        this.addLoader(document.body)
    }
}
</script>

<style scoped>
/* The Loader */
#loader-overlay {
    background-color: grey;
    opacity: 0.25;
    z-index: 9;
}

#loader-wrapper, #loader-overlay {
    position: absolute;
    z-index: 10;
    overflow: hidden;
}

#loader {
    display: block;
    position: relative;
    margin: 0px 0 0 0px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #16a085;
    animation: spin 1.7s linear infinite;
    z-index: 11;
}
#loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #e74c3c;
    animation: spin-reverse .6s linear infinite;
}

#loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f9c922;
    animation: spin 1s linear infinite;
}

@keyframes spin-reverse {
    0% {
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.pending {
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
    -webkit-filter: url(#blur-filter);
    filter: url(#blur-filter);
    -webkit-filter: blur(3px);
    filter: blur(3px);
}
</style>