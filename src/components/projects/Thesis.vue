<template>
	<div>
		<project-header :route='"/thesis"' />
		<div class='responsive'>
			<h2>TLDR</h2>
			<p>In my master thesis I examined the effects of wearing eyeglasses on eye tracking. I used methods from statistics and machine learning to correct for eyeglass-induced errors.</p>
			<styled-image
        :src='require("../../assets/thesis/foveated-rendering.png")'
        alt='Foveated rendering in a VR game' />
			<h2>Background</h2>
      <p>Eye tracking is a useful method which is not only used in research and interactive systems but also in future technologies such as the <a target="_blank" href="https://techcrunch.com/2016/12/28/the-eye-tribe-oculus/">foveated rendering for VR</a>. Modern eye trackers use a combination of the pupil position and an infrared reflection to infer the point of gaze. Corrective eyeglasses, however, pose a challenge for the eyetracking system. They alter the image of the eye, thus causing errors in the eyetracking signal. These errors are related to the refractive strength of the eyeglasses. In my thesis, I tried to build a classification model that takes eye tracking data as input in order to output the refractive strength of the current user. On the basis of this classification, an error correction is applied that corrects the eye tracking data dependening on the refractive strength.</p>
      <h2>Data collection</h2>
      <p>I collected data using a head model with artificial eyes and different pairs of eyeglasses on various positions of the screen. Two datasets were obtained; one for training and testing the models and one dataset for validation. The validation dataset contained a portion of new data. Its aim was to assess how well the models could generalize on new data.</p>
			<styled-image
        :src='require("../../assets/thesis/data-coll.png")'
        alt='Collected eye tracking data' />
      <h2>Classification</h2>
      <p>I employed several popular machine learning algorithms (KNN, SVM, MLP,...) to build classification models. These models were adjusted on the data (hyperparameters) in a grid search paradigm with a 10-fold cross-validation. The final models were evaluated on training, test and validation set. The Multi-layer perceptron model (MLP) showed the highest performance with a fscore of .99 on the test set and a fscore of .73 on the validation set.</p>
			<styled-image
        :src='require("../../assets/thesis/gnb.png")'
        alt='Confusion matrix of a trained model' />
      <h2>Error correction</h2>
      <p>I built several models following a weighted-average and a regression approach. The weighted-average model was able to reduce the error by about 50% on the training and test set. The regression model reduced the error by about 25%. Both models performed equally on the validation set with a reduction of 45% in X direction and 10% in Y direction.</p>
			<styled-image
        :src='require("../../assets/thesis/regX.png")'
        alt='3D Scatterplot with a regression plane for the X offset' />
      <h2>Reflection</h2>
      <p>My thesis was the first major research project that I conducted from start to finish. I recognized the vitality of an early distinct and definite definition of the task. I learned a lot about the practical application of machine learning on real data and how to deal with problems of data quality like missing and noisy data. I learnt how to make reasonable deductions from preliminary work and how to support my own claims. Lastly, I learnt how to interpret results in the presence of ambiguity and uncertainty and how huge the effort is in order to make small progress in research.</p>
      <a
        id='download'
        target="_blank"
        :href='require("../../assets/thesis/thesis.pdf")'>
        <img
          :src='require("../../assets/thesis/download.png")'
          width=32 />
        Download the pdf here
      </a>
		</div>
		<project-arrows :route='"/thesis"' />
	</div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import StyledImage from '../elements/StyledImage.vue'
import projectArrows from '../elements/ProjectArrows.vue'

export default {
	components: {
		'project-header': ProjectHeader,
		'styled-image': StyledImage,
		'project-arrows': projectArrows,
	}
}
</script>

<style scoped>
h2 {
	font-size: 14px;
	font-weight: bold;
	color: var(--light);
	margin: 0 0 4px 0;
}

p {
	margin: 0 0 24px 0;
}

#download {
  display: inline-block;
  margin-bottom: 32px;
}

#download > img {
  vertical-align: middle;
}
</style>
