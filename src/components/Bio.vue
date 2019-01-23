<template>
    <div id='bio'>
        <div class='responsive'>
            <img src='../assets/bio/bio-image.png' />
            <div id='text'>
                <div id='heading'>About me</div>
                <div class='line'>
                    After studing psychology and HCI I started a career in UX. I am very interested in programming and data science, but my passion belongs to tailoring digital products to user needs. For that I like to listen to the right people, ideate in all directions and deliver a product which is easy to use and visually appealing.
                </div>
                <div class='line'>
                    Currently, I am working as a UX Designer at <a href='https://www.knime.com/'>KNIME</a>.
                </div>
                <div>

                <div id='contact'>
                    Contact me at
                </div>
                <div id='social-images'>
                    <a href='https://linkedin.com/in/jschweig'>
                        <img id='linkedin' @mouseover='linkedin_hover = true' @mouseleave='linkedin_hover = false' :src='linkedin_hover == true ? require("../assets/bio/linkedin_hover.png") : require("../assets/bio/linkedin.png")'/>
                    </a>
                    <a href='https://github.com/johannesschweig'>
                    <img id='github' @mouseover='github_hover = true' @mouseleave='github_hover = false' :src='github_hover == true ? require("../assets/bio/github_hover.png") : require("../assets/bio/github.png")'/>
                    </a>
                    <img id='mail' @click='mail_activated = !mail_activated' @mouseover='mail_hover = true' @mouseleave='mail_hover = false' :src='mail_hover == true ? require("../assets/bio/mail_hover.png") : require("../assets/bio/mail.png")'/>
                    <img id='mail-address' v-if='mail_activated' src='../assets/email.png' />
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            linkedin_hover: false,
            github_hover: false,
            mail_hover: false,
            mail_activated: false
        }
    }
}
</script>

<style scoped>

#bio {
    background-image: url('../assets/pattern.png');
    background-position: center top;
    background-repeat: no-repeat;
    font-size: 18px;
}

.line {
    padding-bottom: 12px;
}

#heading {
    font-size: 36px;
    padding-bottom: 14px;
    padding-top: 24px;
}

.responsive {
    padding-top: 48px;
}

.responsive > img {
    max-width: 100%;
}


#linkedin, #github, #mail {
    width: 48px;
    height: 48px;
    margin-right: 18px;
    cursor: pointer;
}

#contact {
    display: inline-block;
    padding-top: 12px;
    padding-right: 24px;
    vertical-align: top;
}

#social-images {
    display: inline-block;
}

#mail-address {
    padding: 14px 0;
}

#text {
    padding-bottom: 24px;
}

@media screen and (max-width: 768px) and (min-width: 550px) {
    .responsive > img {
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
}

@media screen and (min-width: 768px) {
    .responsive {
        display: grid;
        grid-template-columns: 4fr 48px 5fr
    }

    .responsive > img {
        grid-column: 1 / 2;
    }

    #text {
        grid-column: 3 / 4;
        padding-bottom: 0;
    }

    #heading {
        font-size: 48px;
        padding-bottom: 24px;
    }

    #bio {
        font-size: 20px;
    }
}

@media screen and (min-width: 992px) {
    #bio {
        font-size: 24px;
    }
}
</style>
