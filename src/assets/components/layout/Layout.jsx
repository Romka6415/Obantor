import Header from '../header/Header'
import MainSection from '../main-section/MainSection'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<MainSection />
		</div>
	)
}

export default Layout
