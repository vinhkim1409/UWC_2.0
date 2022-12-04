import styles from './style.module.css'

function Footer() {
    return ( 
        <> 
            <div className = {styles.container}></div>
            <footer className = {styles.wrapper}>
                <div className = {styles.inner}>
                    <div className={styles.text1}>@2022UWC2.0</div>
                    <a href = '/' className={styles.text2}>Quy chế sử dụng</a>
                    <a href = '/' className={styles.text3}>Chính sách bảo mật</a>
                    
                </div>
            </footer>    
        </>
    )
}


export default Footer;