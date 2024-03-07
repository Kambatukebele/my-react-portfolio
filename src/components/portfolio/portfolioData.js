import webizycode from '../../assets/images/webizycode.png'
import bankweb from '../../assets/images/bankweb.png'
const portfolios = [
    {
        id: 0,
        img: webizycode,
        title : "WEB DEVELOPMENT AGENCY",
        description:"I construct my freelance web development agency from the ground up. It serves as a digital platform offering services to individuals and businesses seeking to develop and elevate their online presence.",
        stack : ["Laravel", "Javascript"],
        links : [
            {
                github : "https://github.com/Kambatukebele/webizycode",
                live_website : "https://webizycode.com",
            }
        ]
    },
    {
        id: 1,
        img: bankweb,
        title : "Mordern Bank App",
        description:"A modern bank website is an online platform that offers a range of financial services for individuals and businesses seeking to manage their finances securely and conveniently.",
        stack : ["Reactjs", "TailwindCss"],
        links : [
            {
                github : "https://github.com/Kambatukebele/bank_modern_app-with-react",
                live_website : "https://bank/webizycode.com",
            }
        ]
    }
]

export default portfolios;