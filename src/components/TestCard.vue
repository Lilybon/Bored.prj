<template>
    <div class="test-card" 
         :class="classObject"
         draggable='true'
         @touchstart='touchStart'
         @touchmove='touchMove'
         @touchend="touchEnd"
         @dragstart='dragStart'
         @drag='drag'
         @dragend='dragEnd'
    >
        <div class="test-card-background"></div>
        <h2 class="test-card-center">
            <p class="test-card-center__mark">Q{{ count }}</p>
            <p class="test-card-center__title grey--text text--darken-2">{{ activity.activity }}</p>
        </h2>
        <div class="test-card-corner test-card-corner__rt">
            <p class="test-card-corner__title"><v-icon small color="#9e1540">create</v-icon>難易</p>
            <p class="grey--text text--darken-2">{{ activity.accessibility }} /1</p>
        </div>
        <div class="test-card-corner test-card-corner__lt">
            <p class="test-card-corner__title"><v-icon small color="#9e1540">bookmarks</v-icon>類型</p>
            <p class="grey--text text--darken-2">{{ activity.type | chinese-category-format }}</p>
        </div>
        <div class="test-card-corner test-card-corner__rb">
            <p class="test-card-corner__title"><v-icon small color="#9e1540">group</v-icon>人數</p>
            <p class="grey--text text--darken-2">{{ activity.participants }}人</p>
        </div>
        <div class="test-card-corner test-card-corner__lb">
            <p class="test-card-corner__title"><v-icon small color="#9e1540">monetization_on</v-icon>開銷</p>
            <p class="grey--text text--darken-2">{{ activity.price }} /1</p>
        </div>
    </div>
</template>

<script>
import { bus } from '../main'
export default {
    props: {
        count: Number,
        activity: Object
    },
    data() {
        return {
            classObject: {
                'test-card--invisible': false,
                'test-card--spin': false
            },
            touch: null,
            moveOffsetX: 0,
            moveOffsetY: 0
        }
    },
    created() {
        bus.$on('resetTestCard', () => {
            this.resetCard()
        })
    },
    mounted() {
        this.resetCard()
    },
    methods: {
        resetCard() {
            this.initializePosition()
            this.spinShow()
        },
        initializePosition() {
            const card = document.querySelector('.test-card')
            card.style.left = '50%'
            card.style.top = '5vh'
        },
        hide() {
            this.classObject['test-card--invisible'] = true
        },
        spinShow() {
            this.classObject['test-card--invisible'] = true
            this.classObject['test-card--spin'] = true
            setTimeout(() => {
                this.classObject['test-card--spin'] = false
                this.classObject['test-card--invisible'] = false
            }, 300)
        },
        dragStart(e) {
            // setTimeout(() => {this.classObject['test-card--invisible'] = true}, 0)
            const card = document.querySelector('.test-card')
            this.moveOffsetX = card.offsetLeft + card.offsetWidth / 2 - e.pageX
            this.moveOffsetY = card.offsetTop - e.pageY
        },
        drag(e) {
            const card = document.querySelector('.test-card')
            card.style.left = `${ e.pageX + this.moveOffsetX }px`
            card.style.top = `${ e.pageY + this.moveOffsetY }px`
        },
        dragEnd(e) {
            const card = document.querySelector('.test-card')
            card.style.left = `${ e.pageX + this.moveOffsetX }px`
            card.style.top = `${ e.pageY + this.moveOffsetY }px`
        },
        touchStart(e) {
            const card = document.querySelector('.test-card')
            let touch = e.touches[0]
            this.moveOffsetX = card.offsetLeft + card.offsetWidth / 2 - touch.pageX
            this.moveOffsetY = card.offsetTop - touch.pageY
        },
        touchMove(e) {
            /*
            ISSUE:
            卡片會超出邊界拉不回來
             */
            e.preventDefault()
            const card = document.querySelector('.test-card')
            let touch = e.touches[0]
            card.style.left = `${ touch.pageX + this.moveOffsetX }px`
            card.style.top = `${ touch.pageY + this.moveOffsetY }px`
        },
        touchEnd() {
            /*
             ISSUE:
             如何判移動至目標物的dom?
             */
        }
    }
}
</script>

<style lang="scss">
.test-card {
    position: absolute;
    z-index: 10000000;
    top: 5vh;
    left: 50%;
    margin-left: -105px;
    width: 210px;
    height: 280px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    transition: transform .3s ease-out 0s;
    p {
        margin: 0;
    }
    &--invisible {
        visibility: hidden;
    }
    &--spin {
        transform: scale(0.8) rotateX(-40deg) rotateY(70deg);
    }
    &-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #FFD463;
        top: 0;
        border-radius: 2vw;
        box-shadow: inset 0px 0px 0px 12px #FCF8F4;
    }
    &-center {
        position: absolute;
        top: 25%;
        left: 0%;
        width: 100%;
        text-align: center; 
        background: #FCF8F4;
        &__mark {
            color: #9e1540;
            font-size: 40px;
        }
        &__title {
            padding: 5px 24px;
            text-align: left;
            font-size: 0.8rem;
            font-weight: 300;
        }
    }
    &-corner {
        position: absolute;
        margin: 0;
        padding: 2% 2.5%;
        background: #FCF8F4;
        font-size:0.5rem;
        &__rt {
            top: 3%;
            right: 5%;
        }
        &__lt {
            top: 3%;
            left: 5%;
        }
        &__rb {
            bottom: 3%;
            right: 5%;
        }
        &__lb {
            bottom: 3%;
            left: 5%;
        }
        &__title {
            color: #9e1540;
            font-weight: bold;
        }
    }
}
@media (min-width: 600px) {
    .test-card {
        margin-left: -135px;
        width: 270px;
        height: 360px;
    }
}
@media (min-width: 960px) {
    .test-card {
        margin-left: -150px;
        width: 300px;
        height: 400px;
    }
}
@media (min-width: 600px) {
    .test-card-background {
        box-shadow: inset 0px 0px 0px 15px #FCF8F4;
    }
}
@media (min-width: 800px) {
    .test-card-background {
        box-shadow: inset 0px 0px 0px 20px #FCF8F4;
    }
}
@media (min-width: 600px) {
    .test-card-center__title {
        font-size: 1.2rem;
    }
}
@media (min-width: 960px) {
    .test-card-center__title {
        font-size: 1.6rem;
    }
}
@media (min-width: 600px) {
    .test-card-corner {
        font-size:0.75rem;
    }
}
@media (min-width: 960px) {
    .test-card-corner {
        font-size: 1rem;
    }
}
</style>


