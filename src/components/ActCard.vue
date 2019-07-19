<template>
    <v-flex xs12 pa-2>
        <v-layout 
            class="act-card" 
            :style="{ backgroundColor: typeColor[activity.type] }" 
            row wrap
        >
            <v-flex class="act-card__property-group" xs3 sm6>
                <v-layout row wrap>
                    <v-flex class="act-card__property" xs12 sm6>
                        <v-icon small color="#484642">bookmarks</v-icon>
                        {{ activity.type | chinese-category-format }}
                    </v-flex>
                    <v-flex class="act-card__property" xs12 sm6>
                        <v-icon small color="#484642">monetization_on</v-icon>
                        {{ activity.price }}
                    </v-flex>
                    <v-flex class="act-card__property" xs12 sm6>
                        <v-icon small color="#484642">group</v-icon>
                        {{ activity.participants }}
                    </v-flex>
                    <v-flex class="act-card__property" xs12 sm6>
                        <v-icon small color="#484642">create</v-icon>
                        {{ activity.accessibility }}
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex class="act-card__name" pa-2 xs9 sm6>
                {{ activity.activity }}
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
export default {
    props: {
        activity: Object
    },
    data() {
        return {
            color: "orange darken-3",
            typeColor: {
                education: '#E8CFCF',
                recreational: '#B9B9A7',
                social: '#E2B6B6',
                diy: '#CADFE2',
                charity: '#DEDAC7',
                cooking: '#CEA899',
                relaxation: '#D1D1E4',
                music: '#BCE8D4',
                busywork: '#DEDDB0'
            }
        }
    }
}
</script>

<style lang="scss">
.act-card {
    position: relative;
    align-items: stretch;
    height: 90px;
    padding: 0 10px 0 20px;
    background-color: #DEDDB0;
    border: 1px solid #F3DABB;
    border-radius: 10px 0 0 10px;
    overflow: hidden;
    font-size: 8px;
    &__property-group {
        background-color: #FAFFED;
    }
    &__property {
        padding: 2px 5px;
        border-right: 1px solid #F3DABB;
        color: #484642;
        @media (min-width: 600px) {
            padding: 5px 35px;
        }
    }
    &__name {
        height: 100%;
        text-align: left;
        word-break: break-all;
        background-color: #FAFFED;
        color: #484642;
        @media (min-width: 600px) {
            text-align: center;
        }
    }
    @media (min-width: 600px) {
        height: 60px;
        padding-left: 30px;
        font-size: 12px;
    }
    @media (min-width: 800px) {
        height: 70px;
        padding-left: 50px;
        font-size: 16px;
    }
}
</style>


