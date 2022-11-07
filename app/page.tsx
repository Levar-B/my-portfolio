import styles from './page.module.css';

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<h1> Welcome to my Portfolio </h1>
				<section className={styles.section}>
					<p>
						Hello my name is
						<span> Levar Bobb-Semple </span> and I am a Software engineer
					</p>
				</section>
				<section className={styles.section}>
					<h2> What&apos;s in my stack </h2>
					<div>
						<span> Postgres | </span>
						<span> Express |</span>
						<span> React |</span>
						<span> Node </span>
					</div>
				</section>
				<section className={styles.section}>
					<h2> My Projects </h2>
					<div className={styles.projects}>
						<div className={styles.project}>
							<a href="https://ecommercelolcards1.herokuapp.com/">
								<h3> LoLEcommerce &rarr;</h3>
							</a>
							<a href="https://github.com/Team-Scooby-Doo-Grace-Shopper/League-of-Legends-Cards">
								GitHub
							</a>
						</div>
						<div className={styles.project}>
							<a href="https://rowlf.herokuapp.com/">
								<h3> Hello Kitchen &rarr;</h3>
							</a>
							<a href="https://github.com/Team-Rowlf/Rowlf">GitHub</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
