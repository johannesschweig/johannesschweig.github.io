<template>
	<div
    id="content"
    class='responsive body2'>
		<h5>Legal Disclosure</h5>
		<p>Johannes Schweig</p>
		<p>Flemingstr 6, 10557 Berlin</p>
		<p>VAT No.: DE363289149</p>
		<p>Telephone: 030/60269851</p>
		<p>E-Mail: <a class='link' href='mailto:hello@johannesschweig.de'>hello@johannesschweig.de</a> </p>
		<p>Internetadresse: <a class='link' href="http://www.johannesschweig.de">www.johannesschweig.de</a></p>
		<h6>Person responsible for content</h6>
		<p>Johannes Schweig</p>
		<p>Flemingstr 6, 10557 Berlin</p>
		<h6>Indication of source for images and graphics</h6>
		<ul>
			<li
				:key='s.title'
				v-for='s in sources'>
				{{s.title}} by {{s.author}} from {{s.platform}},
				license: <a class='link' :href='s.licenseLink'>{{s.licenseName}}</a>,
				source: <a class='link' :href='s.sourceLink'>link</a>
			</li>
		</ul>
		<h6>Disclaimer</h6>
		<p><i>Accountability for content: </i> The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>
		<p><i>Accountability for links: </i>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
		<p><i>Copyright: </i>Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).</p>
		<p><i>Quelle: </i><a class='link' href="http://www.muster-vorlagen.net">http://www.muster-vorlagen.net</a></p>
		<h5>Impressum</h5>
		<p>Johannes Schweig</p>
		<p>Flemingstr 6, 10557 Berlin</p>
		<p>USt - IdNr: DE363289149</p>
		<p>Telefon: 030/60269851</p>
		<p>E-Mail: <a class='link' href='mailto:hello@johannesschweig.de'>hello@johannesschweig.de</a> </p>
		<p>Internetadresse: <a class='link' href="http://www.johannesschweig.de">www.johannesschweig.de</a></p>
		<h6>Verantwortlich für den Inhalt</h6>
		<p>Johannes Schweig</p>
		<p>Flemingstr 6, 10557 Berlin</p>
		<h6>Quellenangaben für die verwendeten Bilder und Grafiken</h6>
			<!-- <li>artist von Gregor Cresnar aus Symbols Vol. 2 Collection von the Noun Project, Lizenz: <a class='link' href="https://creativecommons.org/licenses/by/3.0/">Creative Commons-BY 3.0</a> Quelle: <a class='link' href="https://thenounproject.com/term/artist/368426">Link</a></li> -->
		<ul>
			<li
				:key='s.title'
				v-for='s in sources'>
				{{s.title}} von {{s.author}} von {{s.platform}},
				Lizenz: <a class='link' :href='s.licenseLink'>{{s.licenseName}}</a>,
				Quelle: <a class='link' :href='s.sourceLink'>Link</a>
			</li>
		</ul>
		<h6>Haftungsausschluss</h6>
		<p><i>Haftung für Inhalte: </i>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
		<p><i>Haftung für Links: </i>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
		<p><i>Urheberrecht: </i>Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
		<p><i>Quelle:  </i><a class='link' href="http://www.muster-vorlagen.net">http://www.muster-vorlagen.net</a></p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sources: [
				{
					title: 'artist',
					author: 'Gregor Cresnar',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/term/artist/368426'
				},
				{
					title: 'phoenix',
					author: 'Design Rails',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/term/phoenix/85573'
				},
				{
					title: 'QueryBuilder',
					author: 'jQuery',
					platform: '',
					licenseName: 'MIT License',
					licenseLink: 'https://opensource.org/licenses/MIT',
					sourceLink: 'https://querybuilder.js.org/'
				},
				{
					title: 'think',
					author: 'Gregor Cresnar',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/grega.cresnar/collection/users-vol-1/?i=541709'
				},
				{
					title: 'Happy news',
					author: 'Katerina Limpitsouni',
					platform: 'unDraw',
					licenseName: 'open-source license',
					licenseLink: 'https://undraw.co/license',
					sourceLink: 'https://undraw.co/search'
				},
				{
					title: 'Feeling blue',
					author: 'Katerina Limpitsouni',
					platform: 'unDraw',
					licenseName: 'open-source license',
					licenseLink: 'https://undraw.co/license',
					sourceLink: 'https://undraw.co/search'
				},
				{
					title: 'Ideas',
					author: 'Katerina Limpitsouni',
					platform: 'unDraw',
					licenseName: 'open-source license',
					licenseLink: 'https://undraw.co/license',
					sourceLink: 'https://undraw.co/search'
				},
				{
					title: 'Lottie Completed Animation',
					author: 'Bhola Record',
					platform: 'lottiefiles',
					licenseName: 'Lottie Simple License',
					licenseLink: 'https://lottiefiles.com/page/license',
					sourceLink: 'https://lottiefiles.com/70295-lottie-completed-animation'
				},
				{
					title: 'Agile',
					author: 'muhamad afiffudin',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/browse/icons/term/agile/'
				},
				{
					title: 'Network',
					author: 'Saeful Gokil',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/browse/icons/term/network/'
				},
				{
					title: 'Telescope',
					author: 'ProSymbols',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/browse/icons/term/telescope/'
				},
				{
					title: 'Send',
					author: 'Christine Chapman',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/icon/send-6776899/'
				},
				{
					title: 'Calendar',
					author: 'etika ariatna',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/icon/calendar-7503036/'
				},
				{
					title: 'Checkmark',
					author: 'Melisa Lutfiani',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/icon/checkmark-7188359/'
				},
				{
					title: 'half time',
					author: 'Berkah Icon',
					platform: 'The Noun Project',
					licenseName: 'Creative Commons-BY 3.0',
					licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
					sourceLink: 'https://thenounproject.com/icon/half-time-6804561/'
				},
			]
		}
	}
}
</script>

<style scoped>
#content {
	padding-bottom: 24px;
}

img {
	vertical-align: middle;
}

</style>
