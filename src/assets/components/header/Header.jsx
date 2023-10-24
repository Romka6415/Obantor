import './Header.module.scss'
import styles from './Header.module.scss'
const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h2 className={styles.logo}>Obantor</h2>
				<ul className={styles.menu}>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Product</a>
					</li>
					<li>
						<a href='#'>Partnership</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
				<a href='#' className={styles.button}>
					<h5>Sign in</h5>
				</a>
			</header>
		</>
	)
}

export default Header
