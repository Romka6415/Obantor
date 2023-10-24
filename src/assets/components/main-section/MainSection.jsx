import styles from './MainSection.module.scss'

const MainSection = () => {
	return (
		<>
			<div className={styles.container}>
				<section className={styles.first_section}>
					<h1>Boosting Your Business Growth Econimically</h1>
					<div className={styles.advantages}>
						<div className='advantage'>
							<h3 className={styles.h3}>15K+</h3>
							<div className={styles.description}>HAPPY CLIENTS</div>
						</div>
						<div className='advantage'>
							<h3 className={styles.h3}>600+</h3>
							<div className={styles.description}>PROJECTS COMPLETED</div>
						</div>
						<div className='advantage'>
							<h3 className={styles.h3}>12K+</h3>
							<div className={styles.description}>REVIEWS</div>
						</div>
					</div>
				</section>
				<section className={styles.second_section}>
					<h4 className={styles.description}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
						laudantium mollitia, tempora beatae itaque atque voluptatem minima
						obcaecati labore neque inventore quidem cupiditate accusantium
						ducimus debitis impedit deserunt iste at?
					</h4>
					<a href='#' target='_blank' className={styles.demo_button}>
						Request a demo
					</a>
					<ul className={styles.sponsors}>
						<li>
							<a href='#'>
								<img
									className={styles.sponsor_icon}
									src='../../../../public/nike.svg'
								/>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className={styles.sponsor_icon}
									src='../../../../public/nike.svg'
								/>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className={styles.sponsor_icon}
									src='../../../../public/nike.svg'
								/>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className={styles.sponsor_icon}
									src='../../../../public/nike.svg'
								/>
							</a>
						</li>
					</ul>
				</section>
			</div>
		</>
	)
}

export default MainSection
